dev:
	cp ./package-lock.json ./packages/api/
	cp ./package-lock.json ./packages/client/

	docker compose -f docker-compose.dev.yml up -d --build

	rm ./packages/api/package-lock.json
	rm ./packages/client/package-lock.json
	
	docker rmi $$(docker images -f "dangling=true" -q)

dev/stop:
	docker compose -f docker-compose.dev.yml down

prod:
	cp ./package-lock.json ./packages/api/
	cp ./package-lock.json ./packages/client/

	docker compose -f docker-compose.prod.yml up -d --build

	rm ./packages/api/package-lock.json
	rm ./packages/client/package-lock.json

	docker rmi $$(docker images -f "dangling=true" -q)

prod/stop:
	docker compose -f docker-compose.prod.yml down