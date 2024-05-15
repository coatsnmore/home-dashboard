# A Cobbled Together Mess of a HomeLab

## TODO 

- [ ] Move most workloads to linux server
- [ ] Expose ollama from high performing machine
- [ ] Ensure GPUs are all used
- [ ] Add weather to home dashboard
- [ ] Add timed jobs and push notifications to ntfy
- [ ] Enable reverse proxy and ACME
- [ ] Authenticate user and conditionally grant access
- [ ] Condense into single Docker Compose file
- [ ] Add compute node and switch to Docker Swarm or Kubernetes


# Deprecated Setup

```bash
# homepage
docker-compose -f docker-compose-homepage.yml up -d

# portainer
docker-compose -f docker-compose-homepage.yml up -d

# startup the general server with docker
./startup.sh

# startup the web server with docker
./web/startup.sh
```

## Local Dev For Server
```bash
cp .env.example .env
// configure env parameters
npm i && npm run dev
```