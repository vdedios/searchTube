# syntax=docker/dockerfile:1

FROM node:alpine as builder
WORKDIR /app
COPY . .
RUN yarn \
    && yarn build

FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html/
EXPOSE 80

CMD nginx -g "daemon off;"
