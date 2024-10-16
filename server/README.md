---

# E-commerce API
This project is a server-side API for an e-commerce platform, built using Node.js and Express. The API manages different entities like users, items, carts, orders, transactions, and more. The API follows RESTful conventions, where each resource is represented by a specific route and controlled via corresponding HTTP methods (GET, POST, PUT, DELETE).

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
- **Express.js**: Web framework used for routing and handling HTTP requests.
- **Sequelize**: ORM used to interact with the database.
- **PostgreSQL/MySQL/SQLite**: Relational databases supported (choose one for deployment).
- **dotenv**: Used to manage environment variables.
- **body-parser**: Middleware to parse incoming JSON data from requests.

## Getting Started
To get started with this project locally, follow the steps below:

### Prerequisites
1. Install [Node.js](https://nodejs.org/en/) (version >=14).
2. Install a relational database (PostgreSQL, MySQL, or SQLite).
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

3. Set up environment variables by creating a `.env` file at the root of the project:
   ```bash
   DB_HOST=your-database-host
   DB_USER=your-database-username
   DB_PASS=your-database-password
   DB_NAME=your-database-name
   ```

4. Run the database migrations to create the necessary tables:
   ```bash
   npx sequelize-cli db:migrate
   ```

5. Start the server:
   ```bash
   npm start
   ```

6. The server will be running at `http://localhost:3000`.

## File Structure
Here's a brief overview of the project structure:

```
├── controllers          # Contains controller logic for handling requests
│   ├── cartsControllers.js
│   ├── itemsControllers.js
│   ├── ordersControllers.js
│   └── ...
├── models               # Sequelize models that define the database structure
│   ├── Cart.js
│   ├── Item.js
│   ├── Order.js
│   └── ...
├── routes               # Express routes for each resource
│   ├── cartsRouter.js
│   ├── itemsRouter.js
│   ├── ordersRouter.js
│   └── ...
├── migrations           # Database migrations
├── src
│   ├── utils            # Utility functions and helpers
│   └── config           # Configuration for the database and other services
└── server.js            # Entry point to the API
```

## API Documentation

### Users

- **GET** `/api/users` – Retrieves all users.
- **GET** `/api/users/:id` – Retrieves a specific user by ID.
- **POST** `/api/users` – Creates a new user.
- **PUT** `/api/users/:id` – Updates a specific user by ID.
- **PUT** `/api/users` – Updates a user based on query parameters.
- **DELETE** `/api/users/:id` – Deletes a specific user by ID.

### Items

- **GET** `/api/items` – Retrieves all items.
- **GET** `/api/items/:id` – Retrieves a specific item by ID.
- **POST** `/api/items` – Creates a new item.
- **PUT** `/api/items/:id` – Updates a specific item by ID.
- **DELETE** `/api/items/:id` – Deletes a specific item by ID.

### Carts

- **GET** `/api/carts` – Retrieves all carts.
- **GET** `/api/carts/:id` – Retrieves a specific cart by ID.
- **POST** `/api/carts` – Creates a new cart.
- **PUT** `/api/carts/:id` – Updates a specific cart by ID.
- **DELETE** `/api/carts/:id` – Deletes a specific cart by ID.

### Orders

- **GET** `/api/orders` – Retrieves all orders.
- **GET** `/api/orders/:id` – Retrieves a specific order by ID.
- **POST** `/api/orders` – Creates a new order.
- **PUT** `/api/orders/:id` – Updates a specific order by ID.
- **DELETE** `/api/orders/:id` – Deletes a specific order by ID.

### Transactions

- **GET** `/api/transactions` – Retrieves all transactions.
- **GET** `/api/transactions/:id` – Retrieves a specific transaction by ID.
- **POST** `/api/transactions` – Creates a new transaction.
- **PUT** `/api/transactions/:id` – Updates a specific transaction by ID.
- **DELETE** `/api/transactions/:id` – Deletes a specific transaction by ID.

### Order Statuses

- **GET** `/api/order-statuses` – Retrieves all order statuses.
- **GET** `/api/order-statuses/:id` – Retrieves a specific order status by ID.
- **POST** `/api/order-statuses` – Creates a new order status.
- **PUT** `/api/order-statuses/:id` – Updates a specific order status by ID.
- **DELETE** `/api/order-statuses/:id` – Deletes a specific order status by ID.

---

## How to Contribute

If you wish to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-branch-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch-name`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---