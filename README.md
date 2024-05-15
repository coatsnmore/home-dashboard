# A Cobbled Together Mess of a HomeLab

## TODO 

- [x] Move most workloads to linux server
- [ ] Expose ollama from high performing machine
- [ ] Ensure GPUs are all used
- [ ] Add weather to home dashboard
- [ ] Add timed jobs and push notifications to ntfy
- [ ] Enable reverse proxy and ACME
- [ ] Authenticate user and conditionally grant access
- [x] Condense into single Docker Compose file
- [ ] Add compute node and switch to Docker Swarm or Kubernetes


# Build and Run

```bash
# build custom services
./build.sh
./web/build.sh

# start the services
sudo docker-compose -f home.yml up -d
```


## Local Server Development
```bash
cp .env.example .env
// configure env parameters
npm i && npm run dev
```

## Local Web Development
```bash
cd web && npm i && npm run dev
```