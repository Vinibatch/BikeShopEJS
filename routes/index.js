var express = require('express');
var router = express.Router();


var databike = [{
  nom: "Model BIKO45",
  photo: "/images/bike-1.jpg",
  prix: "679",
},
{
  nom: "Model Z00K7",
  photo: "/images/bike-2.jpg",
  prix: "799",
},
{
  nom: "Model LIK089",
  photo: "/images/bike-3.jpg",
  prix: "839",
},
{
  nom: "Model GEWO",
  photo: "/images/bike-4.jpg",
  prix: "1206",
},
{
  nom: "Model TITAN5",
  photo: "/images/bike-5.jpg",
  prix: "989",
},
{
  nom: "Model AMIG39",
  photo: "/images/bike-6.jpg",
  prix: "599",
}
];


var dataCardBike = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.dataCardBike==undefined){
    req.session.dataCardBike=[];
  }
  res.render('index', {databike} );
});

router.post('/shop', function(req, res, next) {

  req.sessions.dataCardBike.push (
    {
    nom : req.body.bikeNomFromFront,
    prix  :  req.body.bikePrixFromFront, 
    photo : req.body.bikePhotoFromFront, 
    quantity : req.body.bikeQuantityFromFront
  });

  res.render('shop', {dataCardBike:req.session.dataCardBike});
});


router.get('/delete-shop', function (req,res,next) {
  req.session.dataCardBike.slice(req.query.position,1);
  res.render("shop", {dataCardBike:req.session.dataCardBike});
});



module.exports = router;
