import User from "../model/userSchema.js";

export const getUsers = async (request, response) => {
  try {
    let user = await User.find();
    response.status(202).json(user);
  } catch (error) {
    response.status(404).json({ msg: error.msg });
  }
};

export const getAddUsers = async (request, response) => {
  const user = request.body;
  const newUser = User(user);
  try {
    await newUser.save();
    response.status(202).json(newUser);
  } catch (error) {
    response.status(404).json({ msg: error.msg });
  }
};

export const getUsersId = async (request, response) => {
  const id = request.params.id;
  try {
    const user = await User.findById(id);
    response.status(202).json(user);
  } catch (error) {
    response.status(404).json({ msg: error.msg });
  }
};

export const editUser = async (request, response) => {
  const id = request.body;
  const edituser = new User(id);
  try {
    await User.updateOne({ _id: request.params.id }, edituser);
    response.status(202).json(edituser);
  } catch (error) {
    response.status(404).json({ msg: error.msg });
  }
};
export const deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ _id: request.params.id });
    response.status(202).json("User Deleted ");
  } catch (error) {
    response.status(404).json({ msg: error.msg });
  }
};
