# Use the official Node.js image as the base image
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

ENV CI=true
# Install pnpm globally
RUN npm install -g pnpm

# Copy the entire application to the working directory
COPY . .

# Install dependencies
RUN pnpm install

# Build the Next.js app
RUN pnpm run build

# Stage 2: Production
FROM node:18-alpine

# Set the working directory
WORKDIR /app


# Install pnpm globally
RUN npm install -g pnpm

# Copy the built files from the build stage
# COPY --from=build /app ./
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/public ./public
# Expose port 3000
EXPOSE 80

# Start the Next.js app
CMD ["node", "server.js"]
