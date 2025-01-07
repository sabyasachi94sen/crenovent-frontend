FROM node:18-alpine
RUN apk update && apk upgrade && apk add dumb-init && adduser -D nextuser 
WORKDIR /app
ADD public ./public
ADD .next/standalone ./
ADD .next/static ./.next/static
USER nextuser
EXPOSE 3000
ENV HOST=0.0.0.0 PORT=3000 NODE_ENV=production
