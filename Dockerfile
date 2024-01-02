FROM klakegg/hugo:alpine AS builder
WORKDIR /src
COPY . .
RUN hugo
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/
COPY --from=builder /src/public /usr/share/nginx/html