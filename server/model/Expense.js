const mongoose = require('mongoose')
const Schema = mongoose.Schema

const saveDB = function() {

    const SolarSystemSchema = new Schema({
        planets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
        starName: String,
    })

    const PlanetSchema = new Schema({
        name: String,
        system: { type: Schema.Types.ObjectId, ref: 'SolarSystem' },
        visitors: [{ type: Schema.Types.ObjectId, ref: 'Visitor' }] //reference to a Critic document
    })

    const VisitorSchema = new Schema({
        name: String,
        homePlanet: { type: Schema.Types.ObjectId, ref: 'Planet' }, //reference to an array of Review documents
        visitedPlanets: [{ type: Schema.Types.ObjectId, ref: 'Planet' }],
    })
    const SolarSystem = mongoose.model("SolarSystem", SolarSystemSchema)
    const Planet = mongoose.model("Planet", PlanetSchema)
    const Visitor = mongoose.model("Visitor", VisitorSchema)

    let S1 = new SolarSystem({
        planets: [],
        starName: "sun",
    })

    let P1 = new Planet({
        name: "Earth",
        system: S1,
        visitors: []
    })

    let V1 = new Visitor({
        name: "tom",
        homePlanet: P1,
        visitedPlanets: []
    })



    S1.planets.push(P1)
    P1.visitors.push(V1)
    V1.visitedPlanets.push(P1)

    // S1.save()
    // P1.save()
    // V1.save()
    // SolarSystem.find({}, function(err, books) {
    //     console.log(books)
    // })

    //Find a visitor’s list of visited planets

    // Visitor.findOne({})
    //     .populate('visitedPlanets homePlanet')
    //     .exec()
    //     .then(planet => {
    //         console.log(planet)
    //     })

    // Visitor.findOne({}).then(planet => {
    //     console.log(planet)
    // })

    //Find all the visitors on a planet
    // Planet.findOne({}).populate('visitors').exec().then(vistiors => console.log(vistiors))

    //Find all the visitors in a system (subdocuments!)
    // SolarSystem.findOne({})
    //     .populate({
    //         path: 'planets',
    //         populate: {
    //             path: 'visitors',
    //         }
    //     })
    //     .exec()
    //     .then(system => {
    //         console.log(system);
    //     })
}
module.exports = saveDB