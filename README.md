# Docker MEVN Sample

> Example of Dockerizing MEVN Application 

## Project structure

```txt
.
├── frontend
│   ├── Dockerfile
│   └── ...
├── backend
│   ├── Dockerfile
│   └── ...
├── reverse-proxy
│   ├── Dockerfile
│   └── ...
├── compose.yaml
└── ...
```

## Available scripts

Start the development container:

```bash
make start
```

Stop the development container:

```bash
make stop
```

The frontend is available at http://localhost.

The backend is available at http://localhost/api/users.