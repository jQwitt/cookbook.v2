# {name}

Description

### Setup

```bash
# install dependencies for correct node version
nvm use && pnpm i

# setup prisma and ensure database connection
npx prisma migrate dev --name init
```

### Development

This project is configured to leverage `nvm` and `pnpm`.

```bash
# configure your database connection url in the `.env` file
npx prisma db seed # optional

# auto reload tailwind classes
pnpm tw:watch

# in a new terminal, run the application
nvm use && pnpm dev
```

#### Resources

