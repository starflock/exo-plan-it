#
# Exo_Planet Dockerfile
#
# Written by: Immanuel George <ikp4success@gmail.com>
#
# Usage:
#
#   sudo docker build -t backend .
#   sudo docker run -it -p 5001:5001 backend
#
# Pull the base image.
FROM python:3
ENV proj_env_exo_planet_backend 1.0
COPY requirements.txt .

RUN pip install --upgrade pip && pip --no-cache-dir install -r requirements.txt

EXPOSE 5001
WORKDIR /
ADD . .
# Run the application.
CMD ["gunicorn", "-b", "0.0.0.0:5001", "app:app"]
