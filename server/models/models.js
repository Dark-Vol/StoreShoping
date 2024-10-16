const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    customer_name: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false },
    password: { type: DataTypes.STRING(255), allowNull: false },
    confirmation_code: { type: DataTypes.STRING(100) },
    confirmation_time: { type: DataTypes.DATE },
    country_id: { type: DataTypes.INTEGER, allowNull: false }
});

// Модель Country
const Country = sequelize.define('Country', {
    country_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    country_name: { type: DataTypes.STRING(255), allowNull: false }
});

// Модель Manufacture
const Manufacture = sequelize.define('Manufacture', {
    manufacture_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    manufacture_name: { type: DataTypes.STRING(255), allowNull: false },
    contact_info: { type: DataTypes.STRING(255) },
    website: { type: DataTypes.STRING(255) },
    country_id: { type: DataTypes.INTEGER, allowNull: false }
});

// Модель Category
const Category = sequelize.define('Category', {
    category_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category_name: { type: DataTypes.STRING(255), allowNull: false }
});

// Модель Instrument
const Instrument = sequelize.define('Instrument', {
    instrument_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    instrument_name: { type: DataTypes.STRING(255), allowNull: false },
    category_id: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.STRING(255) },
    manufacture_id: { type: DataTypes.INTEGER, allowNull: false }
});

// Модель Item
const Item = sequelize.define('Item', {
    item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    instrument_id: { type: DataTypes.INTEGER, allowNull: false },
    serial_number: { type: DataTypes.STRING(255), allowNull: false },
    description: { type: DataTypes.TEXT },
    year_of_production: { type: DataTypes.INTEGER },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    country_id: { type: DataTypes.INTEGER, allowNull: false },
    characteristics: { type: DataTypes.STRING(255) }
});

// Модель Cart
const Cart = sequelize.define('Cart', {
    cart_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    session_id: { type: DataTypes.STRING(100) },
    status: { type: DataTypes.SMALLINT, allowNull: false },
    token: { type: DataTypes.STRING(100) },
    firstName: { type: DataTypes.STRING(50) },
    middleName: { type: DataTypes.STRING(50) },
    lastName: { type: DataTypes.STRING(50) },
    mobile: { type: DataTypes.STRING(20) },
    email: { type: DataTypes.STRING(50) },
    city: { type: DataTypes.STRING(50) },
    province: { type: DataTypes.STRING(50) },
    country: { type: DataTypes.STRING(50) },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    content: { type: DataTypes.TEXT }
});

// Модель Cart_Item
const CartItem = sequelize.define('Cart_Item', {
    cart_item_id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    instrument_id: { type: DataTypes.BIGINT, allowNull: false },
    cart_id: { type: DataTypes.BIGINT, allowNull: false },
    price: { type: DataTypes.FLOAT },
    discount: { type: DataTypes.FLOAT },
    active: { type: DataTypes.TINYINT },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    content: { type: DataTypes.TEXT }
});

// Модель User_order
const UserOrder = sequelize.define('User_order', {
    customer_order_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    order_item: { type: DataTypes.DATE },
    delivery_address: { type: DataTypes.STRING(255) },
    preferred_delivery_term: { type: DataTypes.DATE },
    order_status_id: { type: DataTypes.INTEGER, allowNull: false },
    time_paid: { type: DataTypes.DATE },
    time_canceled: { type: DataTypes.DATE },
    time_sent: { type: DataTypes.DATE },
    time_delivered: { type: DataTypes.DATE },
    total_price: { type: DataTypes.DECIMAL(10, 2) },
    discount: { type: DataTypes.DECIMAL(10, 2) },
    final_price: { type: DataTypes.DECIMAL(10, 2) },
    active: { type: DataTypes.TINYINT }
});

// Модель Order_status
const OrderStatus = sequelize.define('Order_status', {
    order_status_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status_name: { type: DataTypes.STRING(255), allowNull: false }
});

// Модель Order_item
const OrderItem = sequelize.define('Order_item', {
    order_item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    customer_order_id: { type: DataTypes.INTEGER, allowNull: false },
    item_id: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2) },
    discount: { type: DataTypes.FLOAT },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE }
});

// Модель Transaction
const Transaction = sequelize.define('Transaction', {
    transaction_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.BIGINT, allowNull: false },
    order_item_id: { type: DataTypes.BIGINT, allowNull: false },
    code: { type: DataTypes.STRING(100) },
    payee: { type: DataTypes.SMALLINT },
    payer: { type: DataTypes.SMALLINT },
    status: { type: DataTypes.SMALLINT },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    content: { type: DataTypes.TEXT }
});

module.exports = {
    User,
    Country,
    Manufacture,
    Category,
    Instrument,
    Item,
    Cart,
    CartItem,
    UserOrder,
    OrderStatus,
    OrderItem,
    Transaction
};