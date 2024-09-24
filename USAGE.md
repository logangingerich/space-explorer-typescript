<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->