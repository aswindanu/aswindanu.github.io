set -a
source .env
set +a
docker build --tag $IMAGE_TAG --platform linux/amd64 .
docker push $IMAGE_TAG:latest