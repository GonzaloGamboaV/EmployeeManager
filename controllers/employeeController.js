const {Employee} = require('../models')

module.exports.displayEmployees = async function(req, res){
    const emplyees = await Employee.findAll();
    res.render('index', {employees})
}