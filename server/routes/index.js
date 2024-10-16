const Router = require('express');
const usersRouter = require('./usersRouter');
const countriesRouter = require('./usersRouter');
const manufacturesRouter = require('./manufacturesRouter');
const categoriesRouter = require('./categoriesRouter');
const instrumentsRouter = require('./instrumentsRouter');
const itemsRouter = require('./itemsRouter');
const cartsRouter = require('./cartsRouter');
const cartItemsRouter = require('./cartItemsRouter');
const ordersRouter = require('./ordersRouter');
const orderStatusesRouter = require('./orderStatusesRouter');
const orderItemsRouter = require('./orderItemsRouter');
const transactionsRouter = require('./transactionsRouter');

const router = new Router();

// Маршруты для пользователей
router.use('/users', usersRouter);

// Маршруты для стран
router.use('/countries', countriesRouter);

// Маршруты для производителей
router.use('/manufactures', manufacturesRouter);

// Маршруты для категорий
router.use('/categories', categoriesRouter);

// Маршруты для инструментов
router.use('/instruments', instrumentsRouter);

// Маршруты для предметов
router.use('/items', itemsRouter);

// Маршруты для корзин
router.use('/carts', cartsRouter);

// Маршруты для предметов в корзинах
router.use('/cart-items', cartItemsRouter);

// Маршруты для заказов пользователей
router.use('/orders', ordersRouter);

// Маршруты для статусов заказов
router.use('/order-statuses', orderStatusesRouter);

// Маршруты для товаров в заказах
router.use('/order-items', orderItemsRouter);

// Маршруты для транзакций
router.use('/transactions', transactionsRouter);

module.exports = router;
