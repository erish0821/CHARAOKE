const oracledb = require("oracledb");
const dbConfig = require("../config/db.config.js");


oracledb.autoCommit = true;
oracledb.initOracleClient()

export class OracleDB {
  constructor(){
    connectionAttributes = {
      user          : dbConfig.user,
      password      : dbConfig.password,
      connectString : dbConfig.connectString
    }
  }

  getConnection() {
    return oracledb.getConnection(this.connectionAttributes)
  }

  execute(query, params) {
    let options = {
      outFormat: oracledb.OUT_FORMAT_OBJECT, // query result format
    };
    this.execute(query, params, options);
  }

}
