release: python server/manage.py migrate
web: gunicorn --pythonpath server server.wsgi && python ws_server/main.py