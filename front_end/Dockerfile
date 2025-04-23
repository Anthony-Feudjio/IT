# Stage 1: Build Angular App
FROM node:18-alpine as angular

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy source files
COPY . .

# Build Angular app for production
RUN npm run build -- --configuration=production

# Stage 2: Production Server
FROM httpd:alpine

# Copy custom Apache configuration
COPY httpd.conf /usr/local/apache2/conf/httpd.conf

# Copy built Angular files from correct directory
COPY --from=angular /app/dist/crm/browser/ /usr/local/apache2/htdocs/

# Set proper permissions
RUN chown -R www-data:www-data /usr/local/apache2/htdocs && \
    chmod -R 755 /usr/local/apache2/htdocs

# Expose port 80
EXPOSE 80

# Start Apache in foreground
CMD ["httpd-foreground"]
