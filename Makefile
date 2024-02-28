RUN_NPM ?= npm

install:
	$(RUN_NPM) install

start:
	$(RUN_NPM) start
run: start

test:
	$(RUN_NPM) test
