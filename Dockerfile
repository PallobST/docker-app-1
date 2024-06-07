FROM node:20.14.0-alpine3.20

WORKDIR /app

COPY package*.json .
RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD [ "nodemon", "server.js" ]