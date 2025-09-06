# ---- Build stage ----
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# Build
RUN npm run build -- --configuration production

# Prepare a unified output folder regardless of Angular's output shape
# If dist/landing-designPro/browser exists, use that; otherwise use dist/landing-designPro
RUN mkdir -p /app/out && \
    if [ -d "/app/dist/landing-designPro/browser" ]; then \
      cp -r /app/dist/landing-designPro/browser/* /app/out/; \
    else \
      cp -r /app/dist/landing-designPro/* /app/out/; \
    fi && \
    # sanity: list what we will ship
    ls -la /app/out

# ---- Runtime (static) ----
FROM nginx:alpine
# SPA routing (send unknown routes to index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built app
COPY --from=builder /app/out/ /usr/share/nginx/html/

EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
