FROM node:12.18.1

COPY package.json package.json
COPY package-lock.json package-lock.json

  
COPY /src /src

RUN npm install

CMD [ "node", "src/server.js" ]