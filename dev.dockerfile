FROM node:14-alpine

WORKDIR /app

COPY . .

RUN yarn install

ENV HOST 0.0.0.0
EXPOSE 3000

CMD ["yarn", "dev"]