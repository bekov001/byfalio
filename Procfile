release: python server/manage.py migrate

web: daphne --pythonpath server server.asgi:application --port $PORT --bind 0.0.0.0
worker: python manage.py runworker channel_layer