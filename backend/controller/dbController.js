const tableModel = require('../model/db');

async function getTableData(req, res) {
  try {
    const data = await tableModel.getTableData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getTableData,
};