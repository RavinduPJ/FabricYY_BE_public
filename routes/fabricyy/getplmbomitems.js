const { pool } = require('../dbconfig');
const moment = require('moment');

module.exports = async (req, res) => {

  const var_fabyyid = req.params.fabyyid;

  var sqlqry =`SELECT plm_items.*,(SELECT cw_name FROM plm_colorways WHERE plm_colorways.fabyy_id = plm_items.fabyy_id AND plm_colorways.cw_order = plm_items.gmt_color_order) as gmt_color FROM plm_items WHERE fabyy_id='${var_fabyyid}' ORDER BY plm_fab_type,plm_placement,gmt_color;`;

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

};