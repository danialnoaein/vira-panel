# Use the official Node.js image as the base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and lock file
COPY pnpm-lock.yaml package.json ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the entire application
COPY . .

# Build the app
RUN pnpm build

# Expose port 3000
EXPOSE 3000

# Start the standalone server
CMD ["node", ".next/standalone/server.js"]
