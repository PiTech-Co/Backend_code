const router = require('express').Router();
const Residence = require('../model/Residence');
const Business = require('../model/Business');
const Household = require('../model/Household');
const User = require('../model/User');




router.post('/adduser', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
       
    });
    try{
        const savedUser = await user.save(); 
        res.send(savedUser);
    }
    catch(err){
        res.status(400).send(err);
    }
});


router.post('/residence', async (req, res) => {
    const residence = new Residence({
        name: req.body.name,
        address: req.body.address,
        resident_type: req.body.resident_type,
        nationality: req.body.nationality
       
    });
    try{
        const savedResidence = await residence.save(); 
        res.send(savedResidence);
    }
    catch(err){
        res.status(400).send(err);
    }
});


router.post('/business', async (req, res) => {
    const business = new Business({
        business_name: req.body.business_name,
        address: req.body.address,
        business_type: req.body.business_type,
        owner: req.body.owner
       
    });
    try{
        const savedBusiness = await business.save(); 
        res.send(savedBusiness);
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.post('/household', async (req, res) => {
    const household = new Household({
        household_no: req.body.household_no,
        address: req.body.address,
        family_head: req.body.family_head
       
    });
    try{
        const savedHousehold = await household.save(); 
        res.send(savedHousehold);
    }
    catch(err){
        res.status(400).send(err);
    }
});



//log in
router.post('/login', async (req,res) => {
    const user = await User.findOne({username: req.body.username});
    if(!user) return res.status(400).send('Username is wrong');
    const validLogin = await User.findOne({password: req.body.password})
    if(!validLogin) return res.status(400).send('password is wrong');

    res.send('Welcome');
})


module.exports = router;

