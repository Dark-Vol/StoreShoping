---
# E-commerce API

This project is a server-side API for an e-commerce platform, built using Node.js and Express. The API manages various entities such as users, items, carts, orders, transactions, and more. The API follows RESTful conventions for resource-based routing.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [File Structure](#file-structure)
- [API Documentation](#api-documentation)
  - [Users](#users)
  - [Items](#items)
  - [Carts](#carts)
  - [Orders](#orders)
  - [Transactions](#transactions)
  - [Order Statuses](#order-statuses)
- [How to Contribute](#how-to-contribute)
- [License](#license)

## Technologies Used

- **Node.js**: JavaScript runtime used to run the server.
- **Express.js**: Web framework for routing and handling HTTP requests.
- **Sequelize**: ORM for database interaction.
- **PostgreSQL/MySQL/SQLite**: Supported relational databases.
- **dotenv**: For managing environment variables.
- **body-parser**: Middleware for parsing incoming JSON request bodies.

## Getting Started

To run this project locally, follow the instructions below:

### Prerequisites

1. Install [Node.js](https://nodejs.org/en/) (version >=14).
2. Set up a relational database like PostgreSQL, MySQL, or SQLite.
3. Install [Git](https://git-scm.com/) to clone the repository.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nikita-Vavilov/ecommerce-api.git
   cd ecommerce-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file at the project root:
   ```bash
   DB_HOST=your-database-host
   DB_USER=your-database-username
   DB_PASS=your-database-password
   DB_NAME=your-database-name
   ```

4. Run database migrations:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. The server will be running on `http://localhost:3000`.

## File Structure

The project file structure is as follows:

```
server/
├── config/
│   └── db.js                  # Database configuration
├── controllers/               # Controller logic for handling requests
│   ├── cartItemsControllers.js
│   ├── cartsControllers.js
│   ├── categoriesControllers.js
│   ├── countriesControllers.js
│   ├── instrumentsControllers.js
│   ├── itemsControllers.js
│   ├── manufacturesControllers.js
│   ├── orderItemsControllers.js
│   ├── orderStatusesControllers.js
│   ├── ordersControllers.js
│   ├── transactionsControllers.js
│   └── usersControllers.js
├── models/
│   └── models.js              # Sequelize models
├── node_modules/              # Installed dependencies
├── routes/                    # Express routes for each resource
│   ├── cartItemsRouter.js
│   ├── cartsRouter.js
│   ├── categoriesRouter.js
│   ├── countriesRouter.js
│   ├── instrumentsRouter.js
│   ├── itemsRouter.js
│   ├── manufacturesRouter.js
│   ├── orderItemsRouter.js
│   ├── orderStatusesRouter.js
│   ├── ordersRouter.js
│   ├── transactionsRouter.js
│   └── usersRouter.js
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Dependency tree lockfile
├── README.md                  # Project documentation
└── server.js                  # Entry point to the API
```

## API Documentation

### Users

- **GET** `/api/users` – Get all users.
- **GET** `/api/users/:id` – Get a specific user by ID.
- **POST** `/api/users` – Create a new user.
- **PUT** `/api/users/:id` – Update a specific user by ID.
- **DELETE** `/api/users/:id` – Delete a specific user by ID.

### Items

- **GET** `/api/items` – Get all items.
- **GET** `/api/items/:id` – Get a specific item by ID.
- **POST** `/api/items` – Create a new item.
- **PUT** `/api/items/:id` – Update a specific item by ID.
- **DELETE** `/api/items/:id` – Delete a specific item by ID.

### Carts

- **GET** `/api/carts` – Get all carts.
- **GET** `/api/carts/:id` – Get a specific cart by ID.
- **POST** `/api/carts` – Create a new cart.
- **PUT** `/api/carts/:id` – Update a specific cart by ID.
- **DELETE** `/api/carts/:id` – Delete a specific cart by ID.

### Orders

- **GET** `/api/orders` – Get all orders.
- **GET** `/api/orders/:id` – Get a specific order by ID.
- **POST** `/api/orders` – Create a new order.
- **PUT** `/api/orders/:id` – Update a specific order by ID.
- **DELETE** `/api/orders/:id` – Delete a specific order by ID.

### Transactions

- **GET** `/api/transactions` – Get all transactions.
- **GET** `/api/transactions/:id` – Get a specific transaction by ID.
- **POST** `/api/transactions` – Create a new transaction.
- **PUT** `/api/transactions/:id` – Update a specific transaction by ID.
- **DELETE** `/api/transactions/:id` – Delete a specific transaction by ID.

### Order Statuses

- **GET** `/api/order-statuses` – Get all order statuses.
- **GET** `/api/order-statuses/:id` – Get a specific order status by ID.
- **POST** `/api/order-statuses` – Create a new order status.
- **PUT** `/api/order-statuses/:id` – Update a specific order status by ID.
- **DELETE** `/api/order-statuses/:id` – Delete a specific order status by ID.

---

## How to Contribute

If you want to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push the branch (`git push origin feature-branch-name`).
5. Create a pull request.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---