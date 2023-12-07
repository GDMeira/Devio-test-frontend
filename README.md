# OrderManager

The OrderManager provides a platform to place orders, display these orders for kitchen staff, and presents screens for both ready and in-progress orders to clients.

## About

In the OrderManager, you can easily create an order, filter products by category, name, or ID. Each product can be customized with extras and notes to form an item that comprises the order. A preview of the order is displayed, and upon finalizing the order, you can select the client's name and payment method to complete it. This order is then visible in the kitchen and on the client's screen. Once the kitchen marks the order as ready, the client's screen updates to notify the customer.

[Deploy Link](https://devio-test-frontend.vercel.app/)


## Technologies

React, Vite, TS.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Populate `.env` file based on `.env.example`. `VITE_API_URL` should point to your API server (driven.t-back)

4. Run the back-end in a development environment:

```bash
npm run start
```

## Building and starting for production

```bash
npm run build
npm start
```

## What to do when add new ENV VARIABLES

- Add them to `.env.example` file
- Add them to your local `.env` file
