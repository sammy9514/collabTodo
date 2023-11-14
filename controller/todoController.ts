import { Request, Response } from "express";
import doModel from "../model/todoModel";

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { todo } = req.body;

    const data = await doModel.create({ todo });

    res.status(200).json({
      message: "done",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
    });
  }
};

export const viewTodo = async (req: Request, res: Response) => {
  try {
    const data = await doModel.find();

    res.status(200).json({
      message: "done",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
    });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;
    const data = await doModel.findByIdAndUpdate(todoId);

    res.status(200).json({
      message: "done",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
    });
  }
};

export const deleteOneTodo = async (req: Request, res: Response) => {
  try {
    const { todoId } = req.params;
    const data = await doModel.findByIdAndDelete(todoId);

    res.status(200).json({
      message: "done",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
    });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const data = await doModel.deleteMany();

    res.status(200).json({
      message: "done",
      data: data,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed",
    });
  }
};
