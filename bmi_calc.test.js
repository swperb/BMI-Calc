const { convert_to_inches } = require('./bmi_calc.js');
const { metric_conversion_weight } = require('./bmi_calc.js');
const { metric_conversion_height } = require('./bmi_calc.js');
const { meters_squared } = require('./bmi_calc.js');
const { bmi_conversion } = require('./bmi_calc.js');
const { bmi_category } = require('./bmi_calc.js');


describe('BMI Calculator Tests', () => {
    test('Test 1: convert_to_inches', () => {
        expect(convert_to_inches(5, 10)).toBe(70);
        expect(convert_to_inches(5, 5)).toBe(65);
        expect(convert_to_inches(6, 0)).toBe(72);

        expect(convert_to_inches(0, 0)).toBe(0);
        expect(convert_to_inches(12, 0)).toBe(144);
    });

    test('Test 2: metric_conversion_weight', () => {
        expect(metric_conversion_weight(150)).toBe(67.5);
        expect(metric_conversion_weight(200)).toBe(90);
        expect(metric_conversion_weight(100)).toBe(45);

        expect(metric_conversion_weight(0)).toBe(0);
        expect(metric_conversion_weight(1000)).toBe(450);
    });

    test('Test 3: metric_conversion_height', () => {
        expect(metric_conversion_height(70)).toBe(1.75);
        expect(metric_conversion_height(65)).toBe(1.625);
        expect(metric_conversion_height(45)).toBe(1.125);

        expect(metric_conversion_height(0)).toBe(0);
        expect(metric_conversion_height(1000)).toBe(25);
    });

    test('Test 4: meters_squared', () => {
        expect(meters_squared(13)).toBe(169);
        expect(meters_squared(16.5)).toBe(272.25);
        expect(meters_squared(10)).toBe(100);

        expect(meters_squared(0)).toBe(0);
        expect(meters_squared(100)).toBe(10000);
    });

    test('Test 5: bmi_conversion', () => {
        expect(bmi_conversion(80, 130)).toBe(14.625);
        expect(bmi_conversion(60, 100)).toBe(20.0);
        expect(bmi_conversion(40, 75)).toBe(33.75);

        expect(bmi_conversion(10, 10)).toBe(72.0);
        expect(bmi_conversion(1000, 1000)).toBe(0.72);
    });

    test('Test 6: bmi_category', () => {
        expect(bmi_category(-1)).toBe("Underweight");
        expect(bmi_category(0)).toBe("Underweight");
        expect(bmi_category(10)).toBe("Underweight");
        expect(bmi_category(18.499)).toBe("Underweight");
        expect(bmi_category(18.5)).toBe("Normal weight");


        expect(bmi_category(18.499)).toBe("Underweight");
        expect(bmi_category(18.5)).toBe("Normal weight");
        expect(bmi_category(20)).toBe("Normal weight");
        expect(bmi_category(24.999)).toBe("Normal weight");
        expect(bmi_category(25)).toBe("Overweight");


        expect(bmi_category(24.999)).toBe("Normal weight"); 
        expect(bmi_category(25)).toBe("Overweight");
        expect(bmi_category(28)).toBe("Overweight");
        expect(bmi_category(29.999)).toBe("Overweight");
        expect(bmi_category(30)).toBe("Obese");


        expect(bmi_category(29.999)).toBe("Overweight");
        expect(bmi_category(30)).toBe("Obese");
        expect(bmi_category(35)).toBe("Obese");
        expect(bmi_category(39.999)).toBe("Obese");
        expect(bmi_category(40)).toBe("Obese");
    });
});