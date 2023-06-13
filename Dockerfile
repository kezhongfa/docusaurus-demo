# build stage
FROM node:16-alpine as build-stage
WORKDIR /app
# 单独分离 package.json，是为了安装依赖可最大限度利用缓存
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html/kzf
COPY default.conf /etc/nginx/conf.d/
EXPOSE 8081