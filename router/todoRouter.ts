import { Router } from "express";
import {
  createTodo,
  viewTodo,
  updateTodo,
  deleteOneTodo,
  deleteTodo,
} from "../controller/todoController";

const router: Router = Router();

router.route("/create-todo").post(createTodo);
router.route("/view-todo").get(viewTodo);
router.route("/update-todo/:todoId").get(updateTodo);
router.route("/delete-todo").get(deleteTodo);
router.route("/deleteOne-todo/:todoId").get(deleteOneTodo);

export default router;
