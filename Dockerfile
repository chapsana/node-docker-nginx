FROM node:lts-alpine
# FROM node:latest
# FROM node:10-alpine

# env
ENV ENV_NAME development
ENV NODE_CONFIG_ENV development
# ENV NODE_ENV production
# ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# optionally if you want to run npm global bin without specifying path
# ENV PATH=$PATH:/home/node/.npm-global/bin

RUN mkdir -p /usr/src/app/node_modules && chown -R node:node /usr/src/app

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# Only copy the package.json file to work directory
COPY package*.json ./

USER node

RUN yarn
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# Copy all other source code to work directory
# COPY . .
COPY --chown=node:node . .
# ADD . /usr/src/app

# Build TypeScript app
RUN yarn run build

CMD [ "yarn", "start" ]

EXPOSE 3000