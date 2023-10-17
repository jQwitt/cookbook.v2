# cookbook.v2

<img width="544" alt="cookbook" src="https://github.com/jQwitt/cookbook.v2/assets/10406506/5ace7ff4-c0ed-4451-b6b7-12b45d5fd294">

A CLI to quickly clone personal project recipes and eliminate boilerplate - reducing time to deployment.

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
