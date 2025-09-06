# ---- Build stage ----
FROM node:22-alpine AS builder
WORKDIR /app

# Install deps first (better cache)
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
# Add your env if needed here
RUN npm run build -- --configuration production

# ---- Runtime (static) ----
FROM nginx:alpine
# Replace with your actual dist folder name
COPY --from=builder /app/dist/landing-design-pro /usr/share/nginx/html

# Optional: custom nginx config for SPA routing
# (uncomment the two lines below and add nginx.conf file if you need HTML5 pushState)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
