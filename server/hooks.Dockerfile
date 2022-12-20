FROM node:16-alpine3.17
WORKDIR /app
COPY ./custom-ts/package.json package.json
# COPY ./custom-ts/pnpm-lock.yaml pnpm-lock.yaml
RUN yarn install
VOLUME ["/app"]
RUN yarn build
EXPOSE 9992
CMD ["yarn", "start"]