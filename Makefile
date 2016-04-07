setup:
	@ln -s tools/systemd/uwsgi.service /etc/systemd/system/uwsgi.service
	@ln -s tools/nginx/vhost.conf /etc/nginx/sites-enabled/anonboard
	@cp backend/anonboard/settings_production.sample.py backend/anonboard/settings_production.py
	@echo "Please change the settigns in 'backend/anonboard/settings_production.py'"
