FROM node:8
RUN npm install -g nodemon
# Create app directory
WORKDIR /usr/src/api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install


# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 2000

CMD [ "npm", "start" ]