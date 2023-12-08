# OrderManager: Simplifying Order Processes

The OrderManager is a comprehensive platform that streamlines order placement, efficiently displays these orders for kitchen staff, and provides an intuitive interface for clients to track their order's progress.

## Overview

Within the OrderManager, creating an order is seamless. Users can effortlessly filter products by category, name, or ID, optimizing the browsing experience. Each product can be finely customized with extras and notes, forming a detailed item within the order. A convenient preview of the order is available, allowing for a final review before confirming. Upon confirmation, users can easily select the client's name and payment method to complete the transaction. The order seamlessly transitions to the kitchen's view and is simultaneously visible on the client's screen. As the kitchen marks the order as ready, the client's screen promptly updates to notify the customer.

[Access the Deployment Here](https://devio-test-frontend.vercel.app/)

## Technologies Utilized

* **React with JavaScript:** Employs a modern and straightforward approach, selectively updating only components affected by new information, ensuring a smooth and responsive user interface.
* **Vite as a Bundler:** Enhances development speed and optimizes application compilation, streamlining the entire development process for increased efficiency.
* **Epson ePOS SDK Version 2.27.0:** Utilized to connect and communicate with an Epson thermal printer, allowing for the printing of receipts for paid orders, ensuring a seamless transaction process.
* **Chakra UI:** Incorporates modern pre-programmed components that facilitate development and enhance the overall user experience, ensuring a visually appealing and user-friendly interface.


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