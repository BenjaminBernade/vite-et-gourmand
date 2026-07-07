FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache openssl

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

ENV DATABASE_URL="postgresql://postgres:postgres@postgres:5432/vitegourmand"
ENV NEXTAUTH_SECRET="docker-secret"
ENV NEXTAUTH_URL="http://localhost:3000"

RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]