# Stage 1: Build
FROM node:18-alpine

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

# Copy the built files from the build stage
COPY /app/.next/standalone ./
COPY /app/.next/static ./.next/static
COPY /app/public ./public

# Expose port 3000
EXPOSE 3000

# Start the Next.js app
CMD ["node", "server.js"]
