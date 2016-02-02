install: install-backend install-frontend

install-backend:
	@echo "Installing backend..."

install-frontend:
	@echo "Installing frontend..."
	@cd frontend && npm i && bower i

start-backend:
	@echo "Starting backend..."

start-frontend:
	@echo "Starting frontend..."
	@npm --prefix=frontend start
