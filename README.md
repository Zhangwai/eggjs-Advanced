# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i 
$ 在mysql创建名为chat-dev的数据库
$ npx sequelize db:migrate //在chat-dev数据库创建相应的表
$ (介绍)npm run generator-entity //开发小工具，这段代码目前会让数据库自动生成对应的表以及生成model字段、squelize-cli的代码，未完成全部功能。(开发时候用这里不用输入)
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+
