# UpdateMission

Fields to update in a mission

## Example Usage

```typescript
import { UpdateMission } from "space-explorer/models/components";

let value: UpdateMission = {
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

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.UpdateMissionStatus](../../models/components/updatemissionstatus.md)              | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `launchDate`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `crew`                                                                                        | [components.Astronaut](../../models/components/astronaut.md)[]                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |