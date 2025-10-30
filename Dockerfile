# Stage 1: Build the Next.js application
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN rm -f tsconfig.json

RUN npm run build

RUN ls -la /app/out

FROM node:20-alpine AS runner

WORKDIR /app

RUN npm install -g serve@latest

COPY --from=builder /app/out ./out
COPY --from=builder /app/public ./public

RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 && \
    chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["serve", "-s", "out", "-l", "3000"]
