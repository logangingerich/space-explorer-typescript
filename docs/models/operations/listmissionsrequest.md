# ListMissionsRequest

## Example Usage

```typescript
import { ListMissionsRequest } from "space-explorer/models/operations";

let value: ListMissionsRequest = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `status`                                               | [operations.Status](../../models/operations/status.md) | :heavy_minus_sign:                                     | Filter missions by status                              |
| `page`                                                 | *number*                                               | :heavy_minus_sign:                                     | Page number for pagination                             |
| `pageSize`                                             | *number*                                               | :heavy_minus_sign:                                     | Number of items per page                               |