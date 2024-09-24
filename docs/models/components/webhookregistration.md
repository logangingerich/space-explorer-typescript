# WebhookRegistration

## Example Usage

```typescript
import { WebhookRegistration } from "space-explorer/models/components";

let value: WebhookRegistration = {
  url: "https://yourapp.com/webhooks/mission-updates",
  eventTypes: [
    "missionUpdated",
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `url`                                                            | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              | https://yourapp.com/webhooks/mission-updates                     |
| `eventTypes`                                                     | [components.EventTypes](../../models/components/eventtypes.md)[] | :heavy_check_mark:                                               | N/A                                                              |                                                                  |