FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./

RUN npm i express path
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY server server
COPY public public
COPY dist dist

EXPOSE 8080
CMD [ "node", "./server/index.js" ]