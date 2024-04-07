function convert_to_inches(usr_height_ft, usr_height_in) {
    // Convert feet to inches and add the remaining inches
    let total_inches = (parseInt(usr_height_ft) * 12) + parseInt(usr_height_in);

    // Return the total inches
    return total_inches;
}

function metric_conversion_weight(usr_weight) {
    // Convert pounds to kilograms
    let num_kg = parseInt(usr_weight) * 0.45;

    // Return the weight in kilograms
    return num_kg;
}

function metric_conversion_height(usr_height) {
    // Convert inches to meters
    let num_meters = parseInt(usr_height) * 0.025;

    // Return the height in meters
    return num_meters;
}

function meters_squared(usr_height) {
    // Square the height in meters
    return usr_height ** 2;
}

function bmi_conversion(usr_height, usr_weight) {
    // Convert height to meters
    let usr_weight_kg = metric_conversion_weight(usr_weight);

    // Convert weight to kilograms
    let usr_height_meters = metric_conversion_height(usr_height);

    // Square the height in meters
    usr_height_meters = meters_squared(usr_height_meters);

    // Calculate the BMI
    let bmi = usr_weight_kg / usr_height_meters;

    // Return the BMI
    return bmi;
}

function bmi_category(bmi) {
    // Determine the BMI category
    // Underweight: BMI < 18.5
    if (bmi < 18.5) {
        return "Underweight";

    }

    // Normal weight: 18.5 <= BMI < 25
    else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } 
    
    // Overweight: 25 <= BMI < 30
    else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } 
    
    // Obese: BMI >= 30
    else {
        return "Obese";
    }
}

function main() {
    // Get the user's height in feet and inches
    let usr_height_ft = document.getElementById("ft").value;
    let usr_height_in = document.getElementById("in").value;

    // Convert the user's height to inches
    let usr_height = convert_to_inches(usr_height_ft, usr_height_in);

    // Get the user's weight in pounds
    let usr_weight = document.getElementById("weight").value;

    // Calculate the BMI
    let bmi = bmi_conversion(usr_height, usr_weight);

    // Determine the BMI category
    let category = bmi_category(bmi);

    // Display the BMI and category
    document.getElementById("bmi").innerHTML = bmi.toFixed(3);
    document.getElementById("category").innerHTML = category;
}

module.exports = {
    convert_to_inches: convert_to_inches,
    metric_conversion_weight: metric_conversion_weight,
    metric_conversion_height: metric_conversion_height,
    meters_squared: meters_squared,
    bmi_conversion: bmi_conversion,
    bmi_category: bmi_category
};