# Mission

## Example Usage

```typescript
import { Mission } from "space-explorer/models/components";

let value: Mission = {
  id: "mission_12345",
  name: "Mars Exploration",
  status: "ongoing",
  launchDate: new Date("2024-07-16T19:20:30+01:00"),
  crew: [
    {
      id: "astro_67890",
      name: "Jane Doe",
      role: "Commander",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | mission_12345                                                                                 |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | Mars Exploration                                                                              |
| `status`                                                                                      | [components.Status](../../models/components/status.md)                                        | :heavy_check_mark:                                                                            | N/A                                                                                           | ongoing                                                                                       |
| `launchDate`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           | 2024-07-16T19:20:30+01:00                                                                     |
| `crew`                                                                                        | [components.Astronaut](../../models/components/astronaut.md)[]                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |