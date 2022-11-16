const { pool } = require('../dbconfig');

module.exports = async (req, res) => {

  const var_fabyyid = req.params.fabyyid;

  var sqlqry =`SELECT temp_id,temp_name FROM sys_sizetemplate WHERE temp_active = 'true' AND cus_id IN (SELECT cus_id FROM fabricyy_master WHERE fabyy_id='${var_fabyyid}') ORDER BY temp_name;;`;

  pool.query(sqlqry, (error, results) => {
    if (error) {
      res.status(200).json({ Type: "ERROR", Msg: error.message })
      return;
    }
    else {
      res.status(200).json({ Type: "SUCCESS", Data: results.rows })
      return;
    }

  })

}