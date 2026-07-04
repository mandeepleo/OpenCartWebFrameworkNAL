
FROM mcr.microsoft.com/playwright:v1.61.0-noble

WORKDIR /app

ENV CI=true

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

CMD ["npx", "playwright", "test", "--project=chromium"]