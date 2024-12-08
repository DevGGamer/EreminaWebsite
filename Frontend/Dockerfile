FROM node:18-alpine as builder
COPY package*.json ./

RUN npm install


COPY . .

RUN npm run build

FROM nginx:1.16.0-alpine
WORKDIR /builddir
COPY --from=builder /builddir/build /usr/share/nginx/html

EXPOSE 80
