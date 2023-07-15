release: python server/manage.py migrate

web: cd server && daphne server.asgi:application --port $PORT --bind 0.0.0.0