import Planet from "./planet"
import {convert} from "./planet_operations"

let planets = [
    new Planet("Mercúrio", 0.39),
    new Planet("Vênus", 0.72),
    new Planet("Terra", 1),
    new Planet("Marte", 1.52),
    new Planet("Júpter", 5.2),
    new Planet("Saturno", 9.53),
    new Planet("Urano", 19.1),
    new Planet("Netuno", 30)
]
planets.forEach(planet => {
    let distanceFromSun = convert(planet.auToSun).toFixed(2)
    console.log(`${planet.name} - ${planet.auToSun}AU - ${distanceFromSun}km`)
})