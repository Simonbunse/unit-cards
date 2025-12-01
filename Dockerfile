# ---- Build stage ----
FROM node:16-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build the React app for production
RUN npm run build

# ---- Run stage ----
FROM nginx:alpine

# Copy built assets from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 inside the container
EXPOSE 80

# Default nginx command
CMD ["nginx", "-g", "daemon off;"]
