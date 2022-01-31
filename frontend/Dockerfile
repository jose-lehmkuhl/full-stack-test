FROM node:12.18.1

COPY package.json package.json
COPY package-lock.json package-lock.json

COPY /src /src
COPY /public /public

RUN npm install

CMD ["npm", "start"]