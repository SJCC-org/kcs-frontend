FROM node:16-alpine AS build
WORKDIR /application

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
COPY --from=build /application/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]