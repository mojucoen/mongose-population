const express = require('express')
const router = express.Router()


router.get('/people', function(req, res) {
        Person.find({}).then(function(people) {
            res.send(people)
        })
    })
    //////////////EXR1///////////////
router.post('/person/:fname/:lname/:age', function(req, res) {
        const fname = req.params.fname
        const lname = req.params.lname
        const age = req.params.age

        console.log(fname, lname, age)
        let p2 = new Person({ firstName: fname, lastName: lname, age: age })
        p2.save()

    })
    ////////////////////EXR2////////////////
router.put('/person/:id', function(req, res) {
        const ID = req.params.id

        console.log(ID)
        Person.findByIdAndUpdate(ID, { age: 80 }, { new: true }).then(function(person) {
            console.log(person)
            res.send(person)

        })
    })
    ///////////EXR3/////////////
router.delete('/apocalypse', function(req, res) {
    const ID = req.params.id

    console.log(ID)
    Person.remove({}, callback)
})



module.exports = router