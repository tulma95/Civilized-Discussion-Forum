FROM node:12

WORKDIR /usr/src/app

ENV NODE_ENV='production'

COPY package.json .
RUN npm install

WORKDIR /usr/src/app/frontend
COPY ./frontend/package.json .
RUN npm install

WORKDIR /usr/src/app


COPY . .

RUN npm run build-frontend

EXPOSE 3003
EXPOSE 3000


CMD ["npm", "run", "start"]