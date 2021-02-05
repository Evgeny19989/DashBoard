module.exports.overview = function (req,res){
    res.status(200).json({
        overview:true
    })
}

module.exports.analytic = function (req,res){
    res.status(200).json({
        analytic:true
    })
}