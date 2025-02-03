const mongoose = require("mongoose");
const OrderModel = require("../models/order.model.js");
const UserModel = require("../models/user.model.js");

async function CreateOrderController(req, res) {
  const userId = req.UserId;
  const { Items, address, totalAmount } = req.body;
  try {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res
        .status(400)
        .send({ message: "Invalid User Id", success: false });
    }
    const checkUser = await UserModel.findOne({ _id: userId });
    if (!checkUser) {
      return res
        .status(400)
        .send({ message: "Users not present pls Signup", success: false });
    }
    if (!Items) {
      return res
        .status(400)
        .send({ message: "Items not present", success: false });
    }
    const order = await OrderModel.create({
      user: userId,
      orderItems: Items,
      shippingAddress: address,
      totalAmount: totalAmount,
    });
    return res
      .status(201)
      .send({ message: "Data Successfully fetched", success: true, order });
  } catch (er) {
    return res.status(500).send({ message: er.message, success: false });
  }
}

async function GetUserOrdersController(req, res) {
  const userId = req.UserId;
  try {
    if (!mongoose.Types.ObjectId.isValid) {
      return res
        .status(400)
        .send({ message: "Invalid user Id", success: false });
    }
    const checkUser = await UserModel.findOne({ _id: userId });
    if (!checkUser) {
      return res
        .status(400)
        .send({ message: "Please sign up", success: false });
    }
    const orders = OrderModel.find({ user: userId });
    return res.status(200).send({
      message: "Data successfully fetched",
      success: false,
      orders: orders,
    });
  } catch (er) {
    return res.status(500).send({
      message: "Internal server error",
      success: false,
      error: er.message,
    });
  }
}

module.exports = {
  CreateOrderController,
  GetUserOrdersController,
};
