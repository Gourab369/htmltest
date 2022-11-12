const {Builder, By, Key} = require("selenium-webdriver");
//const assert = require("assert");
const { strict, strictEqual } = require("assert");
var should = require("chai").should() // only for should use .should() not needed for assert and expect from chai

//describe block
describe("Input Text Box: Work Experience", function(){

    //xp verification
    //it block
    it("Objective: Succesfull Error trigger,\n\tInput: values < 1\n\tAction: Button click", async function(){
        //launch browser
        let driver = await new Builder().forBrowser("chrome").build();


        //navigate to location of your page
        await driver.get("D:/webdev/practice/userRegForm.html");

        //condition to check
        await driver.findElement(By.id("fname")).sendKeys("asdasd", Key.RETURN);
        await driver.findElement(By.id("lname")).sendKeys("asdasd", Key.RETURN);
        await driver.findElement(By.id("gender")).sendKeys("male", Key.RETURN);
        await driver.findElement(By.id("email")).sendKeys("asd@gasd.com", Key.RETURN);
        await driver.findElement(By.id("phone")).sendKeys(9876878787, Key.RETURN);
        await driver.findElement(By.id("education")).sendKeys("10", Key.RETURN);
        await driver.findElement(By.id("workxp")).sendKeys(0, Key.RETURN);
        await driver.findElement(By.id("submitbutt")).click();

        //assert
        let fieldText = await driver.findElement(By.id("errxp")).getText().then(function(value){
            return value;
        });

        //assert using chai assertions
        fieldText.should.equal("not Eligible, should have atleast 1 year of experience");

        //close the browser
        await driver.quit();
        
    });


});

//async function example(){


//};
//example() //when using mocha no need to call  by this
