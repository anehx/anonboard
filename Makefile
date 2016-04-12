APP=/usr/share/anonboard

BACKEND=${APP}/backend
FRONTEND=${APP}/frontend

ENV=${BACKEND}/env

WWW=/var/www/anonboard

DJANGO_SETTINGS_MODULE=anonboard.settings_production

SETTINGS=DJANGO_SETTINGS_MODULE=${DJANGO_SETTINGS_MODULE}

setup:
	@ln -s ${APP}/tools/systemd/anonboard.service /etc/systemd/system/anonboard.service
	@ln -s ${APP}/tools/nginx/anonboard.conf /etc/nginx/sites-enabled/anonboard.conf
	@cp ${BACKEND}/anonboard/settings_production.sample.py ${BACKEND}/anonboard/settings_production.py
	@echo "Please change the settigns in '${BACKEND}/anonboard/settings_production.py'"

deploy-frontend:
	@cd ${FRONTEND} && bower install --allow-root
	@npm --prefix=${FRONTEND} install 
	@npm --prefix=${FRONTEND} run build
	@rsync -az --delete ${FRONTEND}/dist ${WWW}

deploy-backend:
	@bash -c 'source ${ENV}/bin/activate && \
	pip install -r ${BACKEND}/requirements.txt --upgrade && \
	${SETTINGS} ${BACKEND}/manage.py migrate --no-input && \
	${SETTINGS} ${BACKEND}/manage.py collectstatic --no-input'
	@systemctl daemon-reload
	@systemctl restart anonboard.service

deploy: deploy-frontend deploy-backend
	@systemctl restart nginx.service
