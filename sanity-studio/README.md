# Basera Living — Studio (optional)

This folder is **not part of the website**. It is here so that, if you ever want a
hosted admin panel where someone non-technical can add products and upload
photographs, you can set one up in five minutes without adding a single
dependency to the site.

Keeping the Studio out of the website is deliberate: it pulls in around 500
packages of its own, and there is no reason for your storefront to carry that
weight or to fight over React versions with it.

## If you want the admin panel

From the **parent** folder (not inside the website):

```bash
npm create sanity@latest -- --template clean --create-project "Basera Living" --dataset production
```

Follow the prompts, then:

1. Copy the four files in `schemas/` from this folder (drop the `.txt` suffix —
   it is only there so the website's build ignores them) into the new Studio's `schemaTypes/` folder.
2. Register them in the Studio's `schemaTypes/index.ts`.
3. `npm run dev` → the Studio runs on http://localhost:3333
4. `npx sanity deploy` → it is hosted free at `yourname.sanity.studio`

Then, in the **website** folder:

```bash
cp .env.example .env.local
# paste the Project ID into NEXT_PUBLIC_SANITY_PROJECT_ID
```

In sanity.io/manage, under **API → CORS origins**, add `http://localhost:3000`
and your live domain.

That is it. `lib/content.ts` picks the Studio up automatically.

## Admin vs editors

The account that creates the project is the administrator. Add colleagues as
**editors** from sanity.io/manage — they get the same Studio, can add and edit
products, and cannot touch schemas, billing or user access.

No auth code to write, no passwords to store.

## If you never want it

Do nothing. Leave `NEXT_PUBLIC_SANITY_PROJECT_ID` blank and the site runs from
the typed arrays in `lib/products.ts`, `lib/woods.ts` and `lib/portfolio.ts`.
Everything works. You edit a file and push.
