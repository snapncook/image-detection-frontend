FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN node -v && npm -v && npm install

RUN npm run build -- --no-lint

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
ENV API_URL=http://app:3000/api

EXPOSE 3000

CMD ["npm", "start"]