---
# Musical Instruments Store API

This is a backend server for managing a musical instruments store, providing functionality to manage users, orders, carts, items, transactions, and more. 
It is built using **Node.js**, **Express**, and **Sequelize** as the ORM for interacting with a **MySQL** database.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Database Configuration](#database-configuration)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Items](#items)
  - [Carts](#carts)
  - [Orders](#orders)
- [Development Tools](#development-tools)

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **Sequelize**: ORM for MySQL database management.
- **MySQL**: Relational database system.
- **Postman**: API testing and development tool.
- **XAMPP**: Local web server for Windows.
- **MySQL2**: MySQL database connector for Node.js.
- **Nodemon**: Development utility for automatically restarting the server

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

## Development Tools

- **Nodemon**: Automatically restarts the server when code changes are detected.
- **Postman**: Used to test API endpoints.
- **OpenServer**: For local server setup.
- **MySQL Workbench**: Database management tool.

## Dependencies

The following dependencies are used in this project:

- **express**: Web framework for Node.js.
- **sequelize**: ORM for SQL databases.
- **mysql2**: MySQL connector for Node.js.
- **cors**: Middleware for handling CORS (Cross-Origin Resource Sharing).
- **nodemon**: Development tool for automatically restarting the server.

---

## How to Contribute

If you want to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push the branch (`git push origin feature-branch-name`).
5. Create a pull request.

### Scripts
- `npm start`: Start the server.
- `npm run dev`: Start the server with Nodemon for development.

## License

This `README.md` file provides a structured overview of the project, making it easier for others to understand how to set it up and use the API endpoints.

---
