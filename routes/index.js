var express = require('express');
var router = express.Router();


var databike = [{
  nom: "Model BIKO45",
  photo: "/images/bike-1.jpg",
  prix: "679€",
},
{
  nom: "Model Z00K7",
  photo: "/images/bike-2.jpg",
  prix: "799€",
},
{
  nom: "Model LIK089",
  photo: "/images/bike-3.jpg",
  prix: "839€",
},
{
  nom: "Model GEWO",
  photo: "/images/bike-4.jpg",
  prix: "1206€",
},
{
  nom: "Model TITAN5",
  photo: "/images/bike-5.jpg",
  prix: "989€",
},
{
  nom: "Model AMIG39",
  photo: "/images/bike-6.jpg",
  prix: "599€",
}
];


var dataCardBike = [
  {name: 'Model BIKO45', price: 679, url: '/images/bike-1.jpg', quantity: 4},
  {name: 'Model ZOOK7', price: 799, url: '/images/bike-2.jpg', quantity: 5 }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { databike });

});

router.get('/shop', function(req, res, next) {
  res.render('shop', {dataCardBike}
  );
});


module.exports = router;
