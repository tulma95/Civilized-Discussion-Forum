FROM node:12

WORKDIR /usr/src/app

COPY . .

EXPOSE 3003

RUN npm install
RUN npm run build


CMD ["npm", "run", "start"]