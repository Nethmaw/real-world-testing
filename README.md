# ![RealWorld Example App](logo.png)

> ### NextJS + tRPC + Prisma codebase containing real world examples (CRUD, auth, advanced patterns, etc.) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

### [Demo](https://demo.realworld.io/)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)

This codebase was created to demonstrate a fully fledged fullstack application built with **NextJS + tRPC + Prisma** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **NextJS + tRPC + Prisma** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

# How it works

This project uses NextJS and its pages router to serve a React frontend. The backend utilizes tRPC, which usually does not expose a usable REST API, which is required by the RealWorld specs, therefor [trpc-openai](https://github.com/prosepilot/trpc-openapi) is used to create a REST API and also generate a Swagger UI.

The database is managed by Prisma; for simplicity’s sake it uses a sqlite database, but it can be easily changed to any other database supported by Prisma.

# Project Structure

- `prisma` - The Prisma schema and sqlite database
- `public` - Static assets
- `src` - The NextJS application
  - `components` - React components used in the pages
  - `pages` - NextJS pages & api route setup
  - `server` - Setup for the database and tRPC router
  - `styles` - Official RealWorld css styles

# Getting started

Install all the dependencies, this will also set up the prisma sqlite database.

```bash
cd real-world-testing
npm install
```

To run the application in development mode:

```bash
npm run dev
```

# API Testing

1. Install [ThunderClient](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) for VSCode.

2. Open the `ConduitAPI.environment.json` file and fill in the following three blank `value` fields.
    - Username - a username for the application, different from one used in the GUI
    - Email - an api testing email, different from GUI user
    - Password - a password for the api user
3.  Save.
   
4.  Open the ThunderClient panel inside VSCode and go to 'Env'
5.  Click on the hamburger menu next to the `filter environment` search box and click Import.
6.  Find and open `ConduitAPI.environment.json` in the root folder.

7.  Open the Collections tab inside the ThunderClient panel.
8.  Click on the similar hamburger menu and click Import.
9.  Find and open `ConduitAPI.collection.json` in the root folder.

10. Open the `ConduitAPI > Auth > Register` endpoint and click 'Send'
11. Open the `ConduitAPI > Auth > Login` endpoint and click 'Send'
12. Select and copy the token string from the response pane. Do not select the `"` marks at either end.
13. Open the Env panel and then ConduitAPI.
14. Paste into the `token` value and click 'Save'
