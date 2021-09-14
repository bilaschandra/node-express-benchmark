# Express API Starter

Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`

Development utilities:

* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [mocha](https://www.npmjs.com/package/mocha)
  * ☕️ Simple, flexible, fun JavaScript test framework for Node.js & The Browser ☕️
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.

## Setup

There is a (root directory) db.sql to create a table user in the DB
https://github.com/bilaschandra/node-express-benchmark/blob/main/db.sql


```
npm install
```

## Lint

```
npm run lint
```

## Test

```
npm run test
```

## Without docker-compose

```
npm run dev
```

## With docker-compose

```
docker-compose up
```

## Benchmark testing
```
node-express-benchmark git:(main) ✗ node benchmarks/basic-get.js 1000 10
Running 10s test @ http://localhost:5000
1000 connections

running [==============      ] 70%
┌─────────┬────────┬────────┬─────────┬─────────┬───────────┬───────────┬─────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%   │ 99%     │ Avg       │ Stdev     │ Max     │
├─────────┼────────┼────────┼─────────┼─────────┼───────────┼───────────┼─────────┤
│ Latency │ 413 ms │ 596 ms │ 1153 ms │ 1213 ms │ 659.79 ms │ 205.56 ms │ 1533 ms │
└─────────┴────────┴────────┴─────────┴─────────┴───────────┴───────────┴─────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Req/Sec   │ 491     │ 491     │ 1637    │ 2021    │ 1428.58 │ 480.08  │ 491     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Bytes/Sec │ 1.79 MB │ 1.79 MB │ 5.98 MB │ 7.39 MB │ 5.22 MB │ 1.75 MB │ 1.79 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

10k requests in 7.13s, 36.5 MB read
```


Main repo or copied from - https://github.com/ipenywis/node-express-benchmark

