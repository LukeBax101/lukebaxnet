# lukebaxnet


## Deployment

### Dev (localhost:8080)

``` 
npm i
npm run buildDev
npm start
```
### Production (dockerised - localhost:8081)

```
npm i
npm run buildProd
docker-compose -f lukebaxnet-compose.yml down
docker-compose -f lukebaxnet-compose.yml up --build -d
```
## lukebax.net

- Git actions are in place to deploy to lukebax.net on `git push`
- Remote repo with post-recieve hook at /var/repo/lukebaxnet.git ([Guide Here](https://hackernoon.com/deploy-website-to-remote-server-using-git-da6048805637))
- [SSH Key Install Guide](https://medium.com/@jakewies/accessing-remote-machines-using-ssh-55a0fdf5e9d8) 