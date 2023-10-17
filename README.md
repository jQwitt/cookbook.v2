# cookbook.v2

<img width="544" alt="cookbook" src="https://github.com/jQwitt/cookbook.v2/assets/10406506/5ace7ff4-c0ed-4451-b6b7-12b45d5fd294">

A CLI to quickly clone personal project recipes and eliminate boilerplate - reducing time to deployment.

### Supported Recipes

##### Client

- **html**
  - _default_ - local css stylesheet
  - _tailwind-css_ - tailwind css CDN
- **htmx**
  - _quick_ - tailwind / postcss, typescript with hot reload, KOA backend, prisma integrated

##### Server

- **express**
  - _default_ - basic JS express server
  - _typescript_ - typescript enabled express server with hot reload

### Usage

```bash
cook

  --name="{PROJECT NAME}"     # optional, bypasses first prompt for project name
  --no-greeting               # optional, skips greeting text

```

To install for global usage on unix systems:

```bash
# add to you ~/.zshrc
alias prep-kitchen="unalias cook && cd /Volumes/SSD/projects/cookbook.v2 && nvm use && pnpm prep && cd ~"

# open new terminal shell
prep-kitchen && cook
```

Occasionally repetitive runs of this command may cause issues, which can be solved by unaliasing `cook`:

```bash
unalias cook
```

### Dev Setup

Built using `nvm` and `pnpm`. To develop locally:

```bash
nvm use && pnpm

pnpm start # run entry script locally
```

Tests and coverage supplied by jest:

```bash
nvm use && pnpm test
```

Production build + global install controls coming soon!
