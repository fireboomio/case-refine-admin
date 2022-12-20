FROM alpine:latest
# RUN apk update && apk upgrade
RUN apk add git curl
WORKDIR /app
COPY . .
EXPOSE 9123 9991
RUN /bin/sh ./run.sh init
VOLUME ["./custom-ts", "./log", "./store", "./upload", "./wundergraph"]

CMD ["./fireboom", "dev"]