# Use the official Node.js image as the base image
FROM node:22-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy the entire application to the working directory
COPY . .

# Install dependencies
RUN pnpm install

# Expose port 80
EXPOSE 3000

# Start the Next.js app
CMD ["pnpm", "dev"]
