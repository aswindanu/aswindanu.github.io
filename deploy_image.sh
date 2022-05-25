set -a
source .env
set +a
ssh admin@$POSTGRES_HOST 'cd cmd/aio && ./dc_rm_aio.sh && ./dc_pull_aio.sh && ./dc_run_aio.sh && sudo docker ps -a'