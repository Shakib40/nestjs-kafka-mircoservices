# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container to the root directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the NestJS application
RUN npm run build

# Expose the application port (if needed)
EXPOSE 3000

# Set the default command to run the application
CMD ["node", "dist/main"]
