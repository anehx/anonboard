APP=/usr/share/anonboard

BACKEND=${APP}/backend
FRONTEND=${APP}/frontend

ENV=${BACKEND}/env

WWW=/var/www/anonboard

DJANGO_SETTINGS_MODULE=anonboard.settings_production

setup:
	@ln -s ${APP}/tools/systemd/anonboard.service /etc/systemd/system/anonboard.service
	@ln -s ${APP}/tools/nginx/anonboard.conf /etc/nginx/sites-enabled/anonboard.conf
	@cp ${BACKEND}/anonboard/settings_production.sample.py ${BACKEND}/anonboard/settings_production.py
	@echo "Please change the settigns in '${BACKEND}/anonboard/settings_production.py'"

deploy-frontend:
	@cd ${FRONTEND}; npm install
	@cd ${FRONTEND}; bower install --allow-root
	@cd ${FRONTEND}; npm run build
	@rsync -az --delete ${FRONTEND}/dist ${WWW}

deploy-backend:
	@export DJANGO_SETTINGS_MODULE=${DJANGO_SETTINGS_MODULE}
	@${ENV}/bin/activate; pip install -r ${BACKEND}/requirements.txt --upgrade
	@${ENV}/bin/activate; ${BACKEND}/manage.py migrate
	@${ENV}/bin/activate; ${BACKEND}/manage.py collectstatic
