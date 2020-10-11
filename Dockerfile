FROM node:12


RUN mkdir -p /usr/src/app && \
  chown -R node:node /usr/src/app

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

USER node

ENV NODE_ENV='production'

CMD ["npm", "run", "start"]