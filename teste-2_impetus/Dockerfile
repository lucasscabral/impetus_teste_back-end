FROM node:alpine

WORKDIR /usr/app-teste-2

COPY  package*.json ./
RUN npm install

COPY . .

EXPOSE 3002

CMD [ "npm","start" ]
