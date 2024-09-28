# Build
FROM node:18-alpine AS build

WORKDIR /app

COPY 2024bw/package.json 2024bw/package-lock.json ./
RUN npm install

COPY ./2024bw .

RUN npm run build

# Runtime
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/build /usr/share/nginx/html

RUN sed -i 's/listen  .*/listen 3000;/g' /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
