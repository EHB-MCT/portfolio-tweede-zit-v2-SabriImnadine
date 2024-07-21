FROM node:latest

WORKDIR /usr/app

COPY package*.json .

RUN npm install --quiet

COPY ./ ./

ADD https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh /
RUN chmod +x /wait-for-it.sh

CMD /wait-for-it.sh store:5432 -- sh -c "npx knex migrate:latest --cwd ./src/db && npm test"

