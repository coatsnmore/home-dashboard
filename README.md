# A Cobbled Together Mess of a HomeLab

## TODO 

- [x] Move most workloads to linux server
- [x] Expose ollama from high performing machine
- [x] Ensure GPUs are all used
- [ ] Add weather to home dashboard
- [ ] Add timed jobs and push notifications to ntfy
- [ ] Enable reverse proxy and ACME
- [ ] Authenticate user and conditionally grant access
- [x] Condense into single Docker Compose file (mocstly)
- [ ] Add Automatic1111 Stable Diffusion to central Ollama config
- [ ] Add compute node and switch to Docker Swarm or Kubernetes


# Build and Run

```bash
# build custom services
cd server
./build.sh
cd ../web
./build.sh
cd ..

# start the core services
sudo docker compose -f home.yml up -d

# start the ollama services (might be on a more powerful host machine)
sudo docker compose -f ollama.yml up -d

# WARNING: you may need to do additional work to expose docker network to home network
# When running this in Ubuntu, I had to use Portainer to modify RBAC on network to public.
```


## Local Server Development
```bash
cd server
cp .env.example .env
// configure env parameters
npm i && npm run dev
```

## Local Web Development
```bash
cd web && npm i && npm run dev
```