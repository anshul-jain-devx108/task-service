const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController"); // Ensure this path is correct
const authMiddleware = require("../middlewares/authMiddleware");

router.use(authMiddleware);

router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTask); // This might be undefined
router.delete("/:id", taskController.deleteTask);
router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTaskById);

module.exports = router;
