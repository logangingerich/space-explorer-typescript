# ListMissionsResponse

## Example Usage

```typescript
import { ListMissionsResponse } from "space-explorer/models/operations";

let value: ListMissionsResponse = {
  headers: {
    "key": [
      "<value>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `headers`                                                                                  | Record<string, *string*[]>                                                                 | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `result`                                                                                   | [operations.ListMissionsResponseBody](../../models/operations/listmissionsresponsebody.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |