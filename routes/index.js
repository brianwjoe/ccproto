
/*
 * GET home page.
 */

// need a click listner


exports.index = function(req, res){
  res.render('index', { title: 'Cordcutter' });
};

