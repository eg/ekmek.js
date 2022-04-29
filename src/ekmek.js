const Ekmek = function (e) {

    let weight = parseInt(e.weight),
        calorie = parseInt(e.calorie),
        crusting = e.crusting,
        bakeTime,
        heat,
        yeast,
        water,
        flour,
        salt

    // Calculate ingredients
    if (weight) {
        yeast = weight * 0.12
        salt = weight * 0.02
        flour = weight * 0.50
        water = weight * 0.36
        weight = yeast + flour + water + salt;
        calorie = weight * 2.892
    }
    // Weight does not exist
    else {
        console.log("Please enter a weight");
    }

    var ekmek = {
        yeast: parseInt(yeast) + " g",
        flour: parseInt(flour) + " g",
        water: parseInt(water) + " g",
        salt: parseInt(salt) + " g",
        total: parseInt(weight) + " g",
        calorie: parseInt(calorie) + " kcal",
    }
    return ekmek;
}

var test = new Ekmek(
    {
        weight: 350
    }
)
