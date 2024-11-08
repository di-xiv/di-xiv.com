# tBC Gallery Database

## D1 DB operations

```sh
npx wrangler d1 delete di-xiv-gallery --y && npx wrangler d1 create di-xiv-gallery && npx wrangler d1 execute di-xiv-gallery --remote --file=master.sql --y
```

```sh
wrangler d1 execute tbc-cw-gallery-dev --remote --file=*.sql
```

```sh
wrangler d1 execute tbc-cw-gallery-dev --remote --command="INSERT INTO VALUES ;" --y
```
