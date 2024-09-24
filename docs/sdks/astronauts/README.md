# Astronauts
(*astronauts*)

## Overview

### Available Operations

* [list](#list) - List all astronauts
* [add](#add) - Add a new astronaut

## list

List all astronauts

### Example Usage

```typescript
import { SpaceExplorer } from "space-explorer";

const spaceExplorer = new SpaceExplorer({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await spaceExplorer.astronauts.list();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpaceExplorerCore } from "space-explorer/core.js";
import { astronautsList } from "space-explorer/funcs/astronautsList.js";

// Use `SpaceExplorerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const spaceExplorer = new SpaceExplorerCore({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await astronautsList(spaceExplorer);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Astronaut[]](../../models/.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## add

Add a new astronaut

### Example Usage

```typescript
import { SpaceExplorer } from "space-explorer";

const spaceExplorer = new SpaceExplorer({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await spaceExplorer.astronauts.add({
    name: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpaceExplorerCore } from "space-explorer/core.js";
import { astronautsAdd } from "space-explorer/funcs/astronautsAdd.js";

// Use `SpaceExplorerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const spaceExplorer = new SpaceExplorerCore({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await astronautsAdd(spaceExplorer, {
    name: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.NewAstronaut](../../models/components/newastronaut.md)                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Astronaut](../../models/components/astronaut.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,401          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
