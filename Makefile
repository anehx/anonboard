PARALLEL=$(shell command -v parallel >/dev/null && echo 'parallel' || echo 'parallel-moreutils')

pull:
	@git pull
	@git submodule update

install: install-backend install-frontend

install-backend:
	@echo "Installing backend..."
	@make -C ./backend install

install-frontend:
	@echo "Installing frontend..."
	@echo "Installing node packages..."
	@npm --prefix=frontend install > /dev/null
	@echo "Done!"
	@echo "Installing bower packages..."
	@cd frontend && bower install > /dev/null
	@echo "Done!"

start-backend:
	@echo "Starting backend..."
	@./backend/manage.py runserver 0.0.0.0:8000

start-frontend-only:
	@echo "Starting frontend..."
	@npm --prefix=frontend start

start-frontend:
	@echo "Starting frontend with proxy to backend..."
	@npm --prefix=frontend run start-proxy

start:
	@$(PARALLEL) -j 2 -- "make start-backend" "make start-frontend"

vagrant-start:
	@vagrant ssh -c "make -C /var/www start"
