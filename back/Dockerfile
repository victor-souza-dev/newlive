FROM node:14-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm i -f 
COPY . .
RUN prisma generate
RUN npm run dev
EXPOSE 3000
CMD ["npm", "start"]
