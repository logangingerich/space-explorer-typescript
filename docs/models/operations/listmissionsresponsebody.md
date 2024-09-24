# ListMissionsResponseBody

A list of missions

## Example Usage

```typescript
import { ListMissionsResponseBody } from "space-explorer/models/operations";

let value: ListMissionsResponseBody = {
  missions: [
    {
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
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `missions`                                                 | [components.Mission](../../models/components/mission.md)[] | :heavy_minus_sign:                                         | N/A                                                        |
| `page`                                                     | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |
| `pageSize`                                                 | *number*                                                   | :heavy_minus_sign:                                         | N/A                                                        |