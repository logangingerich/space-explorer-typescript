# NewMission

## Example Usage

```typescript
import { NewMission } from "space-explorer/models/components";

let value: NewMission = {
  name: "<value>",
  status: "ongoing",
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
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [components.NewMissionStatus](../../models/components/newmissionstatus.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `launchDate`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `crew`                                                                                        | [components.Astronaut](../../models/components/astronaut.md)[]                                | :heavy_minus_sign:                                                                            | N/A                                                                                           |