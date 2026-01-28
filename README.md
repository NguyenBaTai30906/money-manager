# Money Manager

A personal expense tracker API. Built with Node.js and Express, using a layered architecture (routes/controllers/services).

## Features

- CRUD expenses
- Filter by category and date range
- Stats: total, breakdown by category
- Built-in GUI for testing

## Tech Stack

- Node.js
- Express.js
- Architecture: Routes → Controllers → Services

## Run

```bash
npm install
npm run dev
```

- GUI: http://localhost:3000
- API: http://localhost:3000/api/expenses

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/expenses | Get all expenses |
| POST | /api/expenses | Add new expense |
| DELETE | /api/expenses/:id | Delete expense |
| GET | /api/stats/summary | Get summary stats |

## Project Structure

```
src/
├── routes/       # API endpoints
├── controllers/  # Request handlers
├── services/     # Business logic
└── index.js      # Entry point
```

---
Author: [Nguyen Ba Tai](https://github.com/NguyenBaTai30906)
