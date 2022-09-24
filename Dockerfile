FROM node:12-alpine
ENV LIBRARY_PATH=/lib:/usr/lib

RUN mkdir /bot
COPY . /bot

WORKDIR /bot

RUN apk add --update tini && \
	npm install && \
	npm run build

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["npm", "run", "start"]
