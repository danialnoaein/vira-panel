# Stage 1: Build
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

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
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["node", "server.js"]
