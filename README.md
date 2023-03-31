"Mate Store "Ecommerce

This is a React-based ecommerce store that uses a Firestore database to manage product data and customer orders. The project includes three main collections in Firestore: products, cart, and orders.

Features

    Browse products and add them to your shopping cart
    View your cart and update quantities or remove items
    Checkout and place an order, which is stored in the orders collection

Technologies

The following technologies were used to build this project:

    React (v18.2.0)
    Firebase (v9.18.0)
    Chakra UI (v2.5.1)
    Emotion (v11.10.6)
    Material UI (v5.11.9)
    Formik (v2.2.9)
    Framer Motion (v10.3.1)
    React Icons (v4.8.0)
    React Router (v6.8.2)
    Yup (v1.0.2)

Detailed dependencies:

    "@chakra-ui/icons": "^2.0.17" - This package contains a collection of icons for the Chakra UI React library.

    "@chakra-ui/react": "^2.5.1" - This is a popular React component library that provides a set of customizable UI components.

    "@emotion/react": "^11.10.6" - This is a React library for styling components using CSS-in-JS.

    "@emotion/styled": "^11.10.6" - This is another library that enables writing styled components with CSS-in-JS.

    "@mui/icons-material": "^5.11.11" - This package includes a set of material design icons that can be used in React applications with the MUI (Material UI) library.

    "@mui/material": "^5.11.9" - This is a React component library that provides customizable UI components following the material design guidelines.

    "firebase": "^9.18.0" - This is the official JavaScript SDK for Firebase, which is a platform for building web and mobile applications.

    "formik": "^2.2.9" - This is a popular library for building forms in React applications, providing form validation and error messages.

    "framer-motion": "^10.3.1" - This is a library for adding animations and motion effects to React components.

    "react": "^18.2.0" - This is the core library for building React applications.

    "react-dom": "^18.2.0" - This package provides the integration between React and the DOM.

    "react-icons": "^4.8.0" - This is a library that provides a set of icons for React applications.

    "react-router-dom": "^6.8.2" - This is a library for adding routing capabilities to React applications.

    "uuid": "^9.0.0" - This is a library for generating unique identifiers (UUIDs) in JavaScript.

    "yup": "^1.0.2" - This is a library for schema validation, used for validating form data in React applications.

Getting Started

To run this project locally, follow these steps:

    Clone this repository to your local machine
    Install the project dependencies by running npm install or yarn install
    Create a Firebase project and enable Firestore and Authentication
    Copy the Firebase config object into a new file at src/db/firebase-config.js
    Seed the products collection in Firestore with some sample product data
    Run the project locally with npm start or yarn start

Firestore Collections

This project uses three Firestore collections to manage product data and customer orders:

Products

The products collection stores information about each product, including the product title, description, category, rating, price, and image URL.

Cart

The cart collection stores the items in a customer's shopping cart. Each cart item includes all the same product fields and quantity of each item

Orders

The orders collection stores information about customer orders, including the order id, date, total price, a list of items with quantity included in the order and customer data (email, full name, phone)
Contributing

Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. All contributions are welcome!
