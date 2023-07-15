release: python server/manage.py migrate

web: daphne server/server.asgi:application --port $PORT --bind 0.0.0.0