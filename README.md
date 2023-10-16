# cookbook.v2

Iteration on cookbook, a tool of personal project recipes to eliminate boilerplate and reduce time to start developing ideas.

### Current Recipes

- **html**
  - _default_ - local css stylesheet
  - _tailwind-css_ - tailwind css CDN

### Usage

```bash
cook

  --name="{PROJECT NAME}"     # optional, bypasses first prompt for project name
  --no-greeting               # optional, skips greeting text

```

### Dev Setup

Built using `nvm` and `pnpm`. To develop locally:

```bash
nvm use && pnpm

pnpm start # run entry script locally
```

Production build + global install controls coming soon!
