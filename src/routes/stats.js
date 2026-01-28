const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');

// GET /api/stats/summary - Tổng kết chi tiêu
router.get('/summary', statsController.getSummary);

// GET /api/stats/by-category - Thống kê theo danh mục
router.get('/by-category', statsController.getByCategory);

// GET /api/stats/by-date - Thống kê theo ngày
router.get('/by-date', statsController.getByDate);

module.exports = router;
