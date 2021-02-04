# lukebaxnet


To start dev server:

``` 
npm run buildDev
npm start
```

Navigate to localhost:8080


To delpoy:

```
npm run buildProd
docker-compose -f lukebaxnet-compose.yml down
docker-compose -f lukebaxnet-compose.yml up --build -d
```
