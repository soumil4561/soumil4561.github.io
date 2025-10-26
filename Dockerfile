# Step 1: Build the website
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine

# Remove default Nginx web files
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80
