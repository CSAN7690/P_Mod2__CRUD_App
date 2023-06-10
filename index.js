const { readJSONFile, writeJSONFile, } = require("./src/helpers")

const { index, show, create, destroy, edit } = require("./src/animalsController")

const inform = console.log;
// inform("tada! 🎉") //

// console.log("Our Process Object: ", process)
// console.log("List of Arguments for this process.argv: ", process.argv)

function run() {

    inform("Welcome to Our Animals App! 🦜✨\n\n")

    let animals = readJSONFile("data", "animals.json")
    console.log("Here is the Date Read:", animals)


    const action = process.argv[2]; // What "action" did the User type in?
    const animal = process.argv[3];

    let writeFileSync = false; // Have we done an Action that will "write" to Our JSON File


    switch (action) {

        case "index":
            const animalsView = index(animals);
            inform(animalsView);
            break;

        case "show":
            const animalView = show(animals, animal);
            inform(animalView);
            break;

        case "create":
            updatedAnimals = create(animals, animal);
            writeToFile = true;
            break;

        case "update":
            updatedAnimals = edit(animals, animal, process.argv[4]);
            writeToFile = true;
            break;

        case "destroy":
            updatedAnimals = destroy(animals, animal);
            writeToFile = true;
            break;

        case "score":
            const score = animals.reduce((acc, curr) => acc + curr.points, 0);
            inform("Current score", score);
            break;


        default:
            inform("Bird is the word :)");
    }


}

run()