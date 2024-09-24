# Webhooks
(*webhooks*)

## Overview

### Available Operations

* [registerMissionUpdates](#registermissionupdates) - Register for mission updates

## registerMissionUpdates

Register for mission updates

### Example Usage

```typescript
import { SpaceExplorer } from "space-explorer";

const spaceExplorer = new SpaceExplorer({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  await spaceExplorer.webhooks.registerMissionUpdates({
    url: "https://yourapp.com/webhooks/mission-updates",
    eventTypes: [
      "missionDeleted",
      "missionDeleted",
    ],
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpaceExplorerCore } from "space-explorer/core.js";
import { webhooksRegisterMissionUpdates } from "space-explorer/funcs/webhooksRegisterMissionUpdates.js";

// Use `SpaceExplorerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const spaceExplorer = new SpaceExplorerCore({
  apiKeyAuth: process.env["SPACEEXPLORER_API_KEY_AUTH"] ?? "",
});

async function run() {
  const res = await webhooksRegisterMissionUpdates(spaceExplorer, {
    url: "https://yourapp.com/webhooks/mission-updates",
    eventTypes: [
      "missionDeleted",
      "missionDeleted",
    ],
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
| `request`                                                                                                                                                                      | [components.WebhookRegistration](../../models/components/webhookregistration.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Object     | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400,401          | application/json |
| errors.SDKError  | 4xx-5xx          | */*              |
