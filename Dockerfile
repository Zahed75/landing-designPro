# ---- Build stage ----
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production

# ---- Runtime (static) ----
FROM nginx:alpine
# Copy *contents* of the Angular dist folder
COPY --from=builder /app/dist/landing-designPro/ /usr/share/nginx/html/

# Optional SPA routing (uncomment if you add nginx.conf below)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
