// data layer, co the thay bang db that

// In-memory storage (demo)
let expenses = [];
let idCounter = 1;

// get all
exports.getAll = async ({ category, from, to }) => {
    let result = [...expenses];

    // filter category
    if (category) {
        result = result.filter(e => e.category === category);
    }

    // filter date
    if (from) {
        result = result.filter(e => e.date >= from);
    }
    if (to) {
        result = result.filter(e => e.date <= to);
    }

    return result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
};

// get by id
exports.getById = async (id) => {
    return expenses.find(e => e.id === id);
};

// create
exports.create = async ({ amount, category, note }) => {
    const expense = {
        id: String(idCounter++),
        amount: parseFloat(amount),
        category,
        note: note || '',
        date: new Date().toISOString().split('T')[0],
        createdAt: new Date().toISOString()
    };

    expenses.push(expense);
    return expense;
};

// update
exports.update = async (id, data) => {
    const index = expenses.findIndex(e => e.id === id);
    if (index === -1) return null;

    expenses[index] = {
        ...expenses[index],
        ...data,
        amount: data.amount ? parseFloat(data.amount) : expenses[index].amount,
        updatedAt: new Date().toISOString()
    };

    return expenses[index];
};

// delete
exports.remove = async (id) => {
    const index = expenses.findIndex(e => e.id === id);
    if (index === -1) return false;

    expenses.splice(index, 1);
    return true;
};
