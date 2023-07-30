# Use a Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory for the app
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
