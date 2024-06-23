-include .env

.DEFAULT_GOAL := help

help:
	@make --help

# environment

envirenments:
	@cp .env.default .env

init: docker-build run install-modules

docker-build:
	@docker build -t ${IMAGE_NAME} .

docker-remove:
	@docker rm ${IMAGE_NAME}

run:
	@mkdir -p node_modules
	@docker run --rm -d -it --name ${IMAGE_NAME} \
		-v ./scripts:/app/scripts \
		-v ./src:/app/src \
		-v ./themes:/app/themes \
		-v ./node_modules:/app/node_modules \
		-v ./package.json:/app/package.json \
		-v ./yarn.lock:/app/yarn.lock \
		${IMAGE_NAME}

stop:
	@docker stop ${IMAGE_NAME} 1> /dev/null

install-modules:
	@docker exec -t -u 1000 ${IMAGE_NAME} yarn install --ignore-engines

# usage

build-themes:
	@docker exec -t -u 1000 ${IMAGE_NAME} npm run build

shell:
	@docker exec -it -u 1000 ${IMAGE_NAME} /bin/sh

