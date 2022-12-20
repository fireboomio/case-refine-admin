FROM node:16-alpine as build-stage
RUN wget -qO- https://unpkg.com/@pnpm/self-installer | node -
RUN npm config set registry https://registry.npm.taobao.org/
WORKDIR /app
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
RUN pnpm install --shamefully-hoist=true --strict-peer-dependencies=false
COPY . .
RUN pnpm build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
