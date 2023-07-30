# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in package.json
RUN npm install --production

# Expose port 3000 for the server to listen on
EXPOSE 3001

# Run the command to start the server
CMD ["node", "server.js"]
