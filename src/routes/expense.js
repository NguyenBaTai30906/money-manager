const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// GET /api/expenses - Lấy tất cả chi tiêu
router.get('/', expenseController.getAll);

// GET /api/expenses/:id - Lấy chi tiết 1 khoản
router.get('/:id', expenseController.getById);

// POST /api/expenses - Thêm chi tiêu mới
router.post('/', expenseController.create);

// PUT /api/expenses/:id - Cập nhật chi tiêu
router.put('/:id', expenseController.update);

// DELETE /api/expenses/:id - Xóa chi tiêu
router.delete('/:id', expenseController.remove);

module.exports = router;
