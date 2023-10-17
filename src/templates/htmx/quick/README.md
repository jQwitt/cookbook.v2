# {name}

Description

### Development

This project is configured to leverage `nvm` and `pnpm`.

```bash
# install dependencies for correct node version
nvm use && pnpm i

# configure your database connection url in the `.env` file
npx prisma db seed # optional

# auto reload tailwind classes
pnpm tw:watch

# in a new terminal, run the application
nvm use && pnpm dev
```

#### Resources

