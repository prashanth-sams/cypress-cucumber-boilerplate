FROM cypress/browsers:node12.14.1-chrome83-ff77
WORKDIR /home/node/app
COPY package.json package-lock.json ./
RUN npm install
COPY cypress.json ./
COPY cypress ./cypress
CMD ["npm","run","tags"]