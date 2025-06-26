var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', (req,res) => {
  res.json([
    { id: 1, name: "PWA Sample Data" },
    { id: 2, name: "Another Item" }
  ])
});
module.exports = router;
