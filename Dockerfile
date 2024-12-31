FROM --platform=arm64 node:20
# FROM node:20

ARG ARCH=arm64
# Install dependencies, Firefox, and ffmpeg
RUN apt-get update
RUN apt-get install ffmpeg -y
# (Optional) Verify ffmpeg installation
RUN ffmpeg -version

WORKDIR /app

COPY . /app

# Update npm and install dependencies
RUN npm update -g && \
    npm install

# Define the default command to run your application
CMD [ "node", "index.js" ]
