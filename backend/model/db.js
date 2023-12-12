const oracledb = require('oracledb');
const config = require('./config')

async function getTableData() {
  let connection;
  try {
    oracledb.initOracleClient({ libDir: "../instantclient_11_2" });
    connection = await oracledb.getConnection(config);
    const result = await connection.execute('select * from songs');
    return result.rows;
  } catch (error) {
    throw error;
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        throw error;
      }
    }
  }
}

module.exports = {
  getTableData,
};