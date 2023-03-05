<p align="center">
  <a href="https://buttonize.io">
    <img width="350" alt="Buttonize.io" src="https://user-images.githubusercontent.com/6282843/212024942-9fd50774-ea26-48ba-b2cf-ca2584498c9a.png">
  </a>
</p>

---

<p align="center">
  <a href="https://discord.gg/2quY4Vz5BM"><img alt="Discord" src="https://img.shields.io/discord/1038752242238496779?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@buttonize/toolkit"><img alt="npm" src="https://img.shields.io/npm/v/@buttonize/toolkit?style=flat-square" /></a>
  <a href="https://github.com/buttonize/typescript-toolkit/actions/workflows/release.yml?query=branch%3Amaster"><img alt="Build status" src="https://img.shields.io/github/actions/workflow/status/buttonize/typescript-toolkit/release.yml?branch=master&style=flat-square" /></a>
</p>

[Buttonize](https://buttonize.io) is a low-code paltform which enables cloud developers to create UI widgets like buttons, inputs, forms etc. connected to the cloud services like [AWS Lambda](https://aws.amazon.com/lambda/), [AWS Step Functions](https://aws.amazon.com/step-functions/), [AmazonDynamoDB](https://aws.amazon.com/dynamodb/) and more.

This package contains TypeScript type definition for your lambda function handlers and other DX utilities.

## Getting started

### Installation

```
$ pnpm i -D @buttonize/toolkit
```

```
$ npm i -D @buttonize/toolkit
```

## Example

*You can find more examples in the [Buttonize AWS CDK constructs repository](https://github.com/buttonize/buttonize-cdk/tree/master/examples#examples).*

```typescript
// Lambda function handler file

import { ButtonizeHandler } from '@buttonize/toolkit'

export const handler: ButtonizeHandler<{
  email: string
  isAdmin: string
}> = async (event) => {
  console.log('save new user to database')

  return {
    format: 'text',
    body: 'User created.'
  }
}
```

## Buttonize Docs

Learn more at [docs.buttnoize.io](https://docs.buttonize.io)

---

**Join our community** [Discord](https://discord.gg/2quY4Vz5BM) | [Twitter](https://twitter.com/SST_dev)
