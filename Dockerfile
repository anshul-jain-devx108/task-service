# Use a lightweight Node.js image
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy the rest of the application files
COPY . .

# Set environment variable

# Expose the required port
EXPOSE 5000

# Start the application
CMD ["node", "server.js"]
