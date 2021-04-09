FROM node:14.15.4-alpine3.12

# Bundle APP files
COPY package.json src/

WORKDIR src/

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install

COPY . ./

# Expose the listening port of your app
EXPOSE 8081

CMD ["npm", "start"]
