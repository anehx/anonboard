setup:
	@ln -s ${PWD}/tools/systemd/anonboard.service /etc/systemd/system/anonboard.service
	@ln -s ${PWD}/tools/nginx/anonboard.conf /etc/nginx/sites-enabled/anonboard.conf
	@cp ${PWD}/backend/anonboard/settings_production.sample.py ${PWD}/backend/anonboard/settings_production.py
	@echo "Please change the settigns in 'backend/anonboard/settings_production.py'"

deploy-frontend:
	@cd frontend; npm install
	@cd frontend; bower install --allow-root
	@cd frontend; ember build --prod
	@rsync -az --delete frontend/dist /var/www/anonboard/dist
