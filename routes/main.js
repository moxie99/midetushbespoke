const express = require('express');

const router = express.Router();

const data = {
        title: "MideTush Bespoke",
        phone: "+2348163555438",
        email: "midetush@gmail.com",
        address: "1st Floor, Edoline Complex, beside Richbam Towers, Along U.I-Ojoo Road, Ibadan, Oyo State.",
        vision: "Striving towards creative innovation whilst providing top notch products and services to our customers home and abroad.",
        mission1: "Aspiring to develop and maintain higher standards of fashion in the industry", 
        mission2: "Offering elegant and exclusive designs ranging from menswear to womenswear and kidswear to our customers",
        mission3: "Creating a team of enthusiastic and fulfilled workforce thus providing guaranteed customer satisfaction" 
    }


router.get('/', (req, res, next) => {

    res.render("home", data);

})

router.get('/about', (req, res, next) => {

    res.render('about', data);
})

router.get('/services', (req, res, next) => {

    res.render('service', data);
})

router.get('/testimonials', (req, res, next) => {
    res.render('testimonials', data)
})
router.get('/contact', (req, res, next) => {
    res.render('contact', data)
})

router.get('/suitsAndTuxedos', (req, res, next) => {
    res.render('suitsAndTuxedos', data)
})

router.get('/agbadacollections', (req, res, next) => {
    res.render('agbada', data)
})

router.get('/kaftan', (req, res, next) => {
    res.render('kaftan', data)
})

router.get('/shirts', (req, res, next) => {
    res.render('shirts', data)
})

router.get('/females', (req, res, next) => {
    res.render('females', data)
})

router.get('/footwears', (req, res, next) => {
    res.render('footwears', data)
})

router.get('/accessories', (req, res, next) => {
    res.render('accessories', data)
})


module.exports = router