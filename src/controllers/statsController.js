// thong ke

const expenseService = require('../services/expenseService');

// tong ket
exports.getSummary = async (req, res) => {
    try {
        const expenses = await expenseService.getAll({});

        const total = expenses.reduce((sum, e) => sum + e.amount, 0);
        const count = expenses.length;
        const average = count > 0 ? Math.round(total / count) : 0;

        res.json({
            success: true,
            data: {
                total,
                count,
                average,
                currency: 'VND'
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// theo category
exports.getByCategory = async (req, res) => {
    try {
        const expenses = await expenseService.getAll({});

        const byCategory = expenses.reduce((acc, e) => {
            if (!acc[e.category]) {
                acc[e.category] = { total: 0, count: 0 };
            }
            acc[e.category].total += e.amount;
            acc[e.category].count += 1;
            return acc;
        }, {});

        // convert to array de sort
        const result = Object.entries(byCategory)
            .map(([category, data]) => ({ category, ...data }))
            .sort((a, b) => b.total - a.total);

        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// theo ngay
exports.getByDate = async (req, res) => {
    try {
        const expenses = await expenseService.getAll({});

        const byDate = expenses.reduce((acc, e) => {
            const date = e.date;
            if (!acc[date]) {
                acc[date] = { total: 0, count: 0 };
            }
            acc[date].total += e.amount;
            acc[date].count += 1;
            return acc;
        }, {});

        const result = Object.entries(byDate)
            .map(([date, data]) => ({ date, ...data }))
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
