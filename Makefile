
.PHONY: prod build upload

prod: build upload
	@echo deploy successfully! 😍

build: 
	yarn build

upload: 
	sshpass -p Stone5201314! scp -r dist root@118.25.96.182:/data/www/
