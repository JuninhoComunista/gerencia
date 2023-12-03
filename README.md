# gerencia

## buildar imagem
- `cd app-v1`
- `docker build . -t app1`
- `cd ..`
- `cd app-v2`
- `docker build . -t app2`

## rodar container
- `docker run -p 3000:3000 app1`
- `docker run -p 3000:3000 app2`
