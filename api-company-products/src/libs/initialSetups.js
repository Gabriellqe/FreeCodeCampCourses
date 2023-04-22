import RoleModel from "../models/Role.js";
import UserModel from "../models/User.js";
import { ADMIN_EMAIL, ADMIN_USERNAME, ADMIN_PASSWORD } from "../config.js";

export const createRoles = async () => {
  try {
    const count = await RoleModel.estimatedDocumentCount();

    if (count > 0) return;
    const values = await Promise.all([
      new RoleModel({ name: "user" }).save(),
      new RoleModel({ name: "moderator" }).save(),
      new RoleModel({ name: "admin" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  // check for an existing admin user
  const userFound = await UserModel.findOne({ email: ADMIN_EMAIL });
  if (userFound) return;

  // get roles _id
  const roles = await RoleModel.find({ name: { $in: ["admin", "moderator"] } });

  // create a new admin user
  const newUser = await UserModel.create({
    username: ADMIN_USERNAME,
    email: ADMIN_EMAIL,
    password: ADMIN_PASSWORD,
    roles: roles.map((role) => role._id),
  });

  console.log(`new user created: ${newUser.email}`);
};

createRoles();
createAdmin();
