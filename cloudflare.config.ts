import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    "name": "super-agent-intro",
    "compatibilityDate": "2026-10-23",
    "observability": {
      "enabled": true
    }
  }
});
