const { Builder, By } = require('selenium-webdriver');
require('geckodriver'); // or another driver if you prefer a different browser

describe('BMI Calculator E2E Tests', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('should calculate BMI correctly', async () => {

    // Test navigation to hosted application
    await driver.get('https://bmi-calc-theta.vercel.app/');

    // Test input of height-ft field
    await driver.findElement(By.id('ft')).sendKeys('5');

    // Test input of height-in field
    await driver.findElement(By.id('in')).sendKeys('10');

    // Test input of weight field
    await driver.findElement(By.id('weight')).sendKeys('160');

    // Test button click
    await driver.findElement(By.css('button')).click();

    // Test output of BMI, ensure BMI is calculated properly
    const bmi = await driver.findElement(By.id('bmi')).getText();
    expect(bmi).toBe('23.510');

    // Test output of category, ensure category is determined properly
    const category = await driver.findElement(By.id('category')).getText();
    expect(category).toBe('Normal weight');
  });
});