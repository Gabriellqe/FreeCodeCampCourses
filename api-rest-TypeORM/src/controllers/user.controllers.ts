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

export const updateUserById = async (req: Request, res: Response) => {};

export const deleteUserById = async (req: Request, res: Response) => {};
