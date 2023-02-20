
build-dev:
	docker build -f dev.dockerfile -t portfolio-dev:latest .

dev: build-dev
	docker run -it --rm -p 3000:3000 -v $(PWD):/app -v /app/node_modules portfolio-dev:latest

build-prod:
	docker build -f prod.dockerfile -t portfolio-prod:latest .