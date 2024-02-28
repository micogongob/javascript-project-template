RUN_NPM ?= npm

envfile ?= .env.example

.env:
	cp -f $(envfile) .env

install:
	$(RUN_NPM) install

start:
	$(RUN_NPM) start
run: start

test:
	$(RUN_NPM) test

lint:
	$(RUN_NPM) run lint

fmt:
	$(RUN_NPM) run fmt