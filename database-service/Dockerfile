# Use an official MySQL runtime as a parent image
FROM mysql:latest

# Set the root password and create the database
ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=ecommerce_db

# Copy the SQL scripts to initialize the database
COPY ./initdb/schema.sql /docker-entrypoint-initdb.d/schema.sql
COPY ./initdb/seed.sql /docker-entrypoint-initdb.d/seed.sql

# Expose the port for incoming connections
EXPOSE 3306
