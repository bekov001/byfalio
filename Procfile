release: python server/manage.py migrate
web: gunicorn --pythonpath server server.wsgi
web: python ws_server/main.py