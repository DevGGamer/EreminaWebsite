FROM node:18-alpine as builder
WORKDIR '/app'

#Copy the dependencies file
COPY package.json .

#Install dependencies
RUN npm install

#Copy remaining files
COPY . .

#Build the project for production
RUN npm run build 

FROM nginx:1.16.0-alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
