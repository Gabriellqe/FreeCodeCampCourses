import { Request, Response } from "express";
import { User } from "../entities/User";

export const createUser = async (req: Request, res: Response) => {
  const { firstname, lastname, active } = req.body;
  try {
    const newUser = new User();
    newUser.firstname = firstname;
    newUser.lastname = lastname;
    newUser.active = active;

    await newUser.save();
    console.log("User created successfully");
    res.json(newUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    console.log("Users returned successfully");
    res.json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {};

export const updateUserById = async (req: Request, res: Response) => {
  const { firstname, lastname, active } = req.body;
  try {
    const user = await User.findOneBy({ id: parseInt(req.params.id) });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.update(user.id, {
      firstname: firstname,
      lastname: lastname,
      active: active,
    });

    console.log("User updated successfully");
    res.json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findOneBy({ id: parseInt(req.params.id) });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.delete({ id: parseInt(req.params.id) });
    console.log("User deleted successfully");
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json(error);
  }
};
