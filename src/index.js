const express = require('express');
const cors = require('cors');
const path = require('path');
const expenseRoutes = require('./routes/expense');
const statsRoutes = require('./routes/stats');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/expenses', expenseRoutes);
app.use('/api/stats', statsRoutes);

// Health check
app.get('/', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Money Tracker API',
        version: '1.0.0',
        endpoints: {
            expenses: '/api/expenses',
            stats: '/api/stats'
        }
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Đã xảy ra lỗi!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
