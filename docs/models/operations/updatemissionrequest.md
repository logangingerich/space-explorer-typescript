# UpdateMissionRequest

## Example Usage

```typescript
import { UpdateMissionRequest } from "space-explorer/models/operations";

let value: UpdateMissionRequest = {
  missionId: "mission_12345",
  updateMission: {
    crew: [
      {
        id: "astro_67890",
        name: "Jane Doe",
        role: "Commander",
      },
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `missionId`                                                          | *string*                                                             | :heavy_check_mark:                                                   | ID of the mission                                                    | mission_12345                                                        |
| `updateMission`                                                      | [components.UpdateMission](../../models/components/updatemission.md) | :heavy_check_mark:                                                   | Updated mission object                                               |                                                                      |