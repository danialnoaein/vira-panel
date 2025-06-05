# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app
ENV CI=true

# Install pnpm
RUN npm install -g pnpm

# Copy all files
COPY . .

# Install deps and build
RUN pnpm install
RUN pnpm run build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy only necessary files from build
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

# Expose the port that the app runs on
EXPOSE 3000

# Run the Next.js app
CMD ["node", "server.js"]
