
# Stage 1: Build Angular App
FROM node:18-alpine as angular

WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build -- --configuration=production

# Stage 2: Production Server
FROM httpd:alpine

COPY httpd.conf /usr/local/apache2/conf/httpd.conf
COPY --from=angular /app/dist/crm/browser/ /usr/local/apache2/htdocs/

RUN chown -R www-data:www-data /usr/local/apache2/htdocs && \
    chmod -R 755 /usr/local/apache2/htdocs

EXPOSE 80
CMD ["httpd-foreground"]
