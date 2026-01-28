// xu ly CRUD expense

const expenseService = require('../services/expenseService');

// lay tat ca
exports.getAll = async (req, res) => {
    try {
        const { category, from, to } = req.query;
        const expenses = await expenseService.getAll({ category, from, to });
        res.json({ success: true, count: expenses.length, data: expenses });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// get by id
exports.getById = async (req, res) => {
    try {
        const expense = await expenseService.getById(req.params.id);
        if (!expense) {
            return res.status(404).json({ success: false, error: 'Không tìm thấy' });
        }
        res.json({ success: true, data: expense });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// them moi
exports.create = async (req, res) => {
    try {
        const { amount, category, note } = req.body;

        // Validation
        if (!amount || !category) {
            return res.status(400).json({
                success: false,
                error: 'Thiếu amount hoặc category'
            });
        }

        const expense = await expenseService.create({ amount, category, note });
        res.status(201).json({ success: true, data: expense });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// cap nhat
exports.update = async (req, res) => {
    try {
        const expense = await expenseService.update(req.params.id, req.body);
        if (!expense) {
            return res.status(404).json({ success: false, error: 'Không tìm thấy' });
        }
        res.json({ success: true, data: expense });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// xoa
exports.remove = async (req, res) => {
    try {
        const deleted = await expenseService.remove(req.params.id);
        if (!deleted) {
            return res.status(404).json({ success: false, error: 'Không tìm thấy' });
        }
        res.json({ success: true, message: 'Đã xóa thành công' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
