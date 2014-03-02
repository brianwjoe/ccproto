
/*
 * GET search page.
 */

exports.search = function(req, res){

  // get zip code from parameters
  var requestedZip = req.zip;
  console.log(requestedZip);

  // pass zip code and title to page
  res.render('search', { title: 'Cordcutter', zip:'92620' , localaverageprice:'47.95'});
};