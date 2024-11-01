const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    // user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    customer_name: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false },
    password: { type: DataTypes.STRING(255), allowNull: false },
    confirmation_code: { type: DataTypes.STRING(100) },
    confirmation_time: { type: DataTypes.DATE },
    // country_id: { type: DataTypes.INTEGER, allowNull: false }
});

// Модель Country
const Country = sequelize.define('Country', {
    // country_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    country_name: { type: DataTypes.STRING(255), allowNull: false }
});

// Модель Manufacture
const Manufacture = sequelize.define('Manufacture', {
    // manufacture_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    manufacture_name: { type: DataTypes.STRING(255), allowNull: false },
    contact_info: { type: DataTypes.STRING(255) },
    website: { type: DataTypes.STRING(255) },
    // country_id: { type: DataTypes.INTEGER, allowNull: false }
});

// Модель Category
const Category = sequelize.define('Category', {
    // category_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category_name: { type: DataTypes.STRING(255), allowNull: false }
});

// Модель Instrument
const Instrument = sequelize.define('Instrument', {
    // instrument_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    instrument_name: { type: DataTypes.STRING(255), allowNull: false },
    // category_id: { type: DataTypes.INTEGER, allowNull: false },
    description: { type: DataTypes.STRING(255) },
    // manufacture_id: { type: DataTypes.INTEGER, allowNull: false }
});

// Модель Item
const Item = sequelize.define('Item', {
    // item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // instrument_id: { type: DataTypes.INTEGER, allowNull: false },
    serial_number: { type: DataTypes.STRING(255), allowNull: false },
    description: { type: DataTypes.TEXT },
    year_of_production: { type: DataTypes.INTEGER },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    // country_id: { type: DataTypes.INTEGER, allowNull: false },
    characteristics: { type: DataTypes.STRING(255) }
});

// Модель Cart
const Cart = sequelize.define('Cart', {
    // cart_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // user_id: { type: DataTypes.INTEGER, allowNull: false },
    // session_id: { type: DataTypes.STRING(100) },
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
    // cart_item_id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    // instrument_id: { type: DataTypes.BIGINT, allowNull: false },
    // cart_id: { type: DataTypes.BIGINT, allowNull: false },
    price: { type: DataTypes.FLOAT },
    discount: { type: DataTypes.FLOAT },
    active: { type: DataTypes.TINYINT },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    content: { type: DataTypes.TEXT }
});

// Модель User_order
const UserOrder = sequelize.define('User_order', {
    // customer_order_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // user_id: { type: DataTypes.INTEGER, allowNull: false },
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

const UserOrders = sequelize.define('UserOrders', {
    role: { type: DataTypes.STRING(100) }
});

const Orders = sequelize.define('Order', {
    // order_id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    // user_id: { type: DataTypes.BIGINT, allowNull: false },
    status: { type: DataTypes.STRING(50), allowNull: false },
    total_amount: { type: DataTypes.FLOAT, allowNull: false },
    discount: { type: DataTypes.FLOAT },
    createdAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    shipping_address: { type: DataTypes.STRING(255), allowNull: true },
    payment_method: { type: DataTypes.STRING(50), allowNull: true },
    content: { type: DataTypes.TEXT }
});

// Модель Order_status
const OrderStatus = sequelize.define('Order_status', {
    // order_status_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status_name: { type: DataTypes.STRING(255), allowNull: false }
});

// Модель Order_item
const OrderItem = sequelize.define('OrderItem', {
    // order_item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // customer_order_id: { type: DataTypes.INTEGER, allowNull: false },  // Consistent naming
    // item_id: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2) },
    discount: { type: DataTypes.FLOAT },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

// Модель Transaction
const Transaction = sequelize.define('Transaction', {
    // transaction_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    // user_id: { type: DataTypes.BIGINT, allowNull: false },
    // order_item_id: { type: DataTypes.BIGINT, allowNull: false },
    code: { type: DataTypes.STRING(100) },
    payee: { type: DataTypes.SMALLINT },
    payer: { type: DataTypes.SMALLINT },
    status: { type: DataTypes.SMALLINT },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    content: { type: DataTypes.TEXT }
});

const Photo = sequelize.define("Photo", {
    path: {type:DataTypes.STRING, allowNull: false, unique:true}
})

const Account = sequelize.define("Account", {
    email: {type: DataTypes.STRING(20), allowNull: false, unique:true},
    password: {type: DataTypes.STRING(20), allowNull: false},
}) 

const Profile = sequelize.define('Profile', {
    name: {type: DataTypes.STRING(20), allowNull: false},
    age: {type: DataTypes.INTEGER, allowNull: false},
    city: {type: DataTypes.STRING(20), allowNull: false},
})

User.belongsTo(Country, { foreignKey: 'country_id' });
Country.hasMany(User, { foreignKey: 'country_id' });

Item.belongsTo(Country, { foreignKey: 'country_id' });
Country.hasMany(Item, { foreignKey: 'country_id' });

Item.belongsTo(Manufacture, { foreignKey: 'manufacture_id' });
Manufacture.hasMany(Item, { foreignKey: 'manufacture_id' });

Item.belongsTo(Instrument, { foreignKey: 'instrument_id' });
Instrument.hasMany(Item, { foreignKey: 'instrument_id' });

Instrument.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Instrument, { foreignKey: 'category_id' });

Cart.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Cart, { foreignKey: 'user_id' });

CartItem.belongsTo(Cart, { foreignKey: 'cart_id' });
Cart.hasMany(CartItem, { foreignKey: 'cart_id' });

CartItem.belongsTo(Instrument, { foreignKey: 'instrument_id' });
Instrument.hasMany(CartItem, { foreignKey: 'instrument_id' });

UserOrder.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(UserOrder, { foreignKey: 'user_id' });

UserOrder.belongsTo(OrderStatus, { foreignKey: 'order_status_id' });
OrderStatus.hasMany(UserOrder, { foreignKey: 'order_status_id' });

OrderItem.belongsTo(UserOrder, { foreignKey: 'customer_order_id' });
UserOrder.hasMany(OrderItem, { foreignKey: 'customer_order_id' });

OrderItem.belongsTo(Item, { foreignKey: 'item_id' });
Item.hasMany(OrderItem, { foreignKey: 'item_id' });

Transaction.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Transaction, { foreignKey: 'user_id' });

Transaction.belongsTo(OrderItem, { foreignKey: 'order_item_id' });
OrderItem.hasMany(Transaction, { foreignKey: 'order_item_id' });

User.belongsToMany(Orders, { through: UserOrders, foreignKey: 'user_id' });
Orders.belongsToMany(User, { through: UserOrders, foreignKey: 'order_id' });

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
    Orders,
    OrderStatus,
    OrderItem,
    Transaction,
    UserOrders,
    Photo,
    Account,
    Profile
};