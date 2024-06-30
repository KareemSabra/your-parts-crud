## Book Management CRUD App

Welcome to the Book Management CRUD (Create, Read, Update, Delete) application built with TypeScript and Next.js


## Live Demo
The app is hosted on Vercel and you can check it out following this link
[Book Management Demo](https://your-parts-crud.vercel.app/)


## Getting Started

First, clone this repo:

Then install node_modules using bun.sh

```bash
bun install
```

Then run the app locally using bun.sh

```bash
bun run dev
```

or use npm (not recommended)

```bash
npm install
```
```bash
npm run dev
```

Open [http://localhost:3060](http://localhost:3060) with your browser to see the result.

To edit the app port simply edit the 3060 port in package.json file in the next file

```bash
 "dev": "next dev -p 3060",
```

## ESLint and formatting

prettier and other ESLint rules were used to format the code using prettier run

```bash
 bun run format
```

to lint code run
```bash
 bun run lint
```


## Testing
To run unittests simply run the command 

```bash
 npm test
```

The unit test covers all the components used as well as the CRUD functionality of the app

## Libraries used 
```bash
"dependencies": {
    "axios": "^1.7.2",
    "formik": "^2.4.6",
    "next": "14.2.4",
    "next-themes": "^0.3.0",
    "react": "^18",
    "react-dom": "^18",
    "react-icons": "^5.2.1"
  },
  "devDependencies": {
    "@iconify/react": "^5.0.1",
    "@testing-library/react": "^16.0.0",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@typescript-eslint/eslint-plugin": "^7.14.1",
    "@typescript-eslint/parser": "^7.14.1",
    "@vitejs/plugin-react": "^4.3.1",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.4",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.3",
    "jsdom": "^24.1.0",
    "postcss": "^8",
    "prettier": "^3.3.2",
    "tailwindcss": "^3.4.1",
    "typescript": "^5",
    "vitest": "^1.6.0"
  }
```
