release: python server/manage.py migrate

web: daphne --pythonpath server server.asgi:channel_layer --port $PORT --bind 0.0.0.0 -v2
worker: python manage.py runworker -v2