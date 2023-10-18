# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application's source code to the container
COPY . .

# Expose the port your app will run on
EXPOSE 5001

# Define the command to run your application
CMD ["node", "index.js"]
