## Local Development

## Available Scripts

+ `yarn dev` - Runs next dev which starts Next.js in development mode;
+ `yarn build` -  Runs next build which builds the application for production usage;
+ `yarn start` - Runs next start which starts a Next.js production server;

## Development

1. Clone repository;
2. `cd nextjs-hasura-challenge`;
3. Copy `.env.local.example` and rename copied `.env.local.example` to `.env.local` and fill in values if it's need;
4. `yarn / yarn install`;
5. `docker-compose up`;
6. `yarn dev`;
7. [Open app](http://localhost:3000) in your browser;
8. [Open Hasura console](http://localhost:8080/console) in your browser;

**[ABOUT JSON DATA]** To change data source you need to set `NEXT_PUBLIC_DATA_PATH` environment variable. You can specify any HTTP
url or path to file in your file system. By default, it's `data/data.json`.
