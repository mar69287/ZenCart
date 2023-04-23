const Order = require('../../models/order')

module.exports = {
    index,
    create
}

async function index(req, res) {
    const userId = req.user._id;
    const orders = await Order.find({ user: userId });
    res.json(orders);
}

async function create(req, res) {
  const { cartData, cartTotal } = req.body;
  const userId = req.user._id;
  const total = Number(cartTotal.toFixed(2));

  const lineItems = cartData.map(item => ({
    productId: item.id,
    title: item.title,
    price: item.price,
    image: item.image,
    qty: Number(item.quantity)
  }));

  const order = new Order({
    user: userId,
    total: total,
    lineItems
  });

  try {
    const savedOrder = await order.save();
    res.json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

