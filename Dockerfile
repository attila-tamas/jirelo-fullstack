FROM timbru31/node-alpine-git:18

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
