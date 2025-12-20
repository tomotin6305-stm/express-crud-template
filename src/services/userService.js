const UserRepository = require('../repositories/userRepository');

exports.getAllUsers = () => {
  return UserRepository.findAll();
};

exports.getUserById = (id) => {
  const user = UserRepository.findById(id);
  if (!user) {
    const err = new Error("User not found");
    err.status = 404;
    throw err;
  }
  return user;
};

exports.createUser = (data) => {
  return UserRepository.create(data);
};

exports.updateUser = (id, data) => {
  return UserRepository.update(id, data);
};

exports.deleteUser = (id) => {
  return UserRepository.remove(id);
};
