function convert_to_inches(usr_height_ft, usr_height_in) {

    let total_inches = (parseInt(usr_height_ft) * 12) + parseInt(usr_height_in);

    return total_inches;
}

function metric_conversion_weight(usr_weight) {
    let num_kg = parseInt(usr_weight) * 0.45;

    return num_kg;
}

function metric_conversion_height(usr_height) {
    let num_meters = parseInt(usr_height) * 0.025;

    return num_meters;
}

function meters_squared(usr_height) {
    return usr_height ** 2;
}

function bmi_conversion(usr_height, usr_weight) {
    let usr_weight_kg = metric_conversion_weight(usr_weight);

    let usr_height_meters = metric_conversion_height(usr_height);

    usr_height_meters = meters_squared(usr_height_meters);

    let bmi = usr_weight_kg / usr_height_meters;

    return bmi;
}

function bmi_category(bmi) {
    if (bmi < 18.5) {
        document.getElementById("bmi").innerHTML = bmi.toFixed(3);
        document.getElementById("category").innerHTML = "Underweight";
        return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        document.getElementById("bmi").innerHTML = bmi.toFixed(3);
        document.getElementById("category").innerHTML = "Normal weight";
        return "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById("bmi").innerHTML = bmi.toFixed(3);
        document.getElementById("category").innerHTML = "Overweight";
        return "Overweight";
    } else {
        document.getElementById("bmi").innerHTML = bmi.toFixed(3);
        document.getElementById("category").innerHTML = "Obese";
        return "Obese";
    }
}

function main() {
    let usr_height_ft = document.getElementById("ft").value;
    let usr_height_in = document.getElementById("in").value;

    let usr_height = convert_to_inches(usr_height_ft, usr_height_in);

    let usr_weight = document.getElementById("weight").value;

    let bmi = bmi_conversion(usr_height, usr_weight);

    bmi_category(bmi);
}