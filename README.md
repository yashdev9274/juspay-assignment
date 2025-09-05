# Juspay Assignment

This is a Next.js application that displays an e-commerce dashboard based on the [figma file](https://www.figma.com/design/ZzpFsCT86yRXvRpGR5UodD/UI-Developer-Assignment?node-id=4-2468&p=f&t=YCyiOOpvOUWWfiiE-0).

## Getting Started

First, install the dependencies:


```bash
git clone git@github.com:yashdev9274/juspay-assignment.git

cd juspay-assignment
```

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Server will run at 3000 port.

## Features

* Sidebars

*   Dashboard with key metrics
*   Search table content on /top-selling-products route, either click on top selling products
   
*   Charts:
    *   Projections vs. Actuals
    *   Revenue Chart
    *   Total Sales Chart
*   Revenue by Location map
*   Top Selling Products table

## Technologies Used

*   [Next.js](https://nextjs.org/)
*   [React](https://reactjs.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Radix UI](https://www.radix-ui.com/)
*   [@visx](https://airbnb.io/visx/) for charts

## Folder Structure

```
.
├── app
│   ├── page.tsx
│   └── layout.tsx
├── components
│   ├── charts
│   ├── layout
│   └── ui
├── lib
│   ├── mock-data.ts
│   └── utils.ts
├── public
└── ...
```