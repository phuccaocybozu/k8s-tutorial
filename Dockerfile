FROM node:alpine

# Set working directory

WORKDIR /app

# Install app dependencies

COPY package.json ./

RUN yarn

# Copy app source code

COPY . .

CMD ["yarn", "start"]
