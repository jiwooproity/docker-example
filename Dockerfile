FROM node:16-alpine

WORKDIR /app

COPY package.json .yarn .pnp.cjs yarn.lock ./

RUN yarn install

COPY index.js .

CMD [ "yarn", "start" ]