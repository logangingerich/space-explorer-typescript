# Missions
(*missions*)

## Overview

### Available Operations

* [list](#list) - List all missions
* [create](#create) - Create a new mission
* [get](#get) - Get mission details
* [update](#update) - Update a mission
* [delete](#delete) - Delete a mission

## list

List all missions

### Example Usage

```typescript
import { SpaceExplorer } from "space-explorer";

const spaceExplorer = new SpaceExplorer({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await spaceExplorer.missions.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpaceExplorerCore } from "space-explorer/core.js";
import { missionsList } from "space-explorer/funcs/missionsList.js";

// Use `SpaceExplorerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const spaceExplorer = new SpaceExplorerCore({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await missionsList(spaceExplorer, {});

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
| `request`                                                                                                                                                                      | [operations.ListMissionsRequest](../../models/operations/listmissionsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMissionsResponse](../../models/operations/listmissionsresponse.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## create

Create a new mission

### Example Usage

```typescript
import { SpaceExplorer } from "space-explorer";

const spaceExplorer = new SpaceExplorer({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await spaceExplorer.missions.create({
    name: "Saturn Exploration",
    status: "planned",
    launchDate: new Date("2025-05-20T10:00:00Z"),
    crew: [
      {
        id: "astro_67890",
        name: "Jane Doe",
        role: "Commander",
      },
    ],
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
import { missionsCreate } from "space-explorer/funcs/missionsCreate.js";

// Use `SpaceExplorerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const spaceExplorer = new SpaceExplorerCore({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await missionsCreate(spaceExplorer, {
    name: "Saturn Exploration",
    status: "planned",
    launchDate: new Date("2025-05-20T10:00:00Z"),
    crew: [
      {
        id: "astro_67890",
        name: "Jane Doe",
        role: "Commander",
      },
    ],
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
| `request`                                                                                                                                                                      | [components.NewMission](../../models/components/newmission.md)                                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Mission](../../models/components/mission.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,401          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## get

Get mission details

### Example Usage

```typescript
import { SpaceExplorer } from "space-explorer";

const spaceExplorer = new SpaceExplorer({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await spaceExplorer.missions.get({
    missionId: "mission_12345",
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
import { missionsGet } from "space-explorer/funcs/missionsGet.js";

// Use `SpaceExplorerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const spaceExplorer = new SpaceExplorerCore({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await missionsGet(spaceExplorer, {
    missionId: "mission_12345",
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
| `request`                                                                                                                                                                      | [operations.GetMissionRequest](../../models/operations/getmissionrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Mission](../../models/components/mission.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401,404          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## update

Update a mission

### Example Usage

```typescript
import { SpaceExplorer } from "space-explorer";

const spaceExplorer = new SpaceExplorer({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const result = await spaceExplorer.missions.update({
    missionId: "mission_12345",
    updateMission: {
      crew: [
        {
          id: "astro_67890",
          name: "Jane Doe",
          role: "Commander",
        },
        {
          id: "astro_67890",
          name: "Jane Doe",
          role: "Commander",
        },
      ],
    },
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
import { missionsUpdate } from "space-explorer/funcs/missionsUpdate.js";

// Use `SpaceExplorerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const spaceExplorer = new SpaceExplorerCore({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await missionsUpdate(spaceExplorer, {
    missionId: "mission_12345",
    updateMission: {
      crew: [
        {
          id: "astro_67890",
          name: "Jane Doe",
          role: "Commander",
        },
        {
          id: "astro_67890",
          name: "Jane Doe",
          role: "Commander",
        },
      ],
    },
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
| `request`                                                                                                                                                                      | [operations.UpdateMissionRequest](../../models/operations/updatemissionrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Mission](../../models/components/mission.md)\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,401,404      | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |


## delete

Delete a mission

### Example Usage

```typescript
import { SpaceExplorer } from "space-explorer";

const spaceExplorer = new SpaceExplorer({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  await spaceExplorer.missions.delete({
    missionId: "mission_12345",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpaceExplorerCore } from "space-explorer/core.js";
import { missionsDelete } from "space-explorer/funcs/missionsDelete.js";

// Use `SpaceExplorerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const spaceExplorer = new SpaceExplorerCore({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await missionsDelete(spaceExplorer, {
    missionId: "mission_12345",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteMissionRequest](../../models/operations/deletemissionrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401,404          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
