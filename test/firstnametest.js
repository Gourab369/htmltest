const {Builder, By, Key} = require("selenium-webdriver");
//const assert = require("assert");
const { strict, strictEqual } = require("assert");
var should = require("chai").should() // only for should use .should() not needed for assert and expect from chai

//describe block
describe("Input Text Box: First name", function(){

//it block
    it("Objective: Successfully error trigger, \n\tInput type: Numeric, \n\tAction: Button click", async function(){
        //launch browser
        let driver = await new Builder().forBrowser("chrome").build();

        //navigate to location
        await driver.get("D:/webdev/practice/userRegForm.html"); 

        //add a todo //what to do
        await driver.findElement(By.id("fname")).sendKeys("90", Key.RETURN);
        await driver.findElement(By.id("submitbutt")).click();

        //assert
        let fieldText = await driver.findElement(By.id("errfname")).getText().then(function(value){
            return value
        });

        //assert using node assertions
        //assert.strictEqual(todotext,"Learning selenium");

        //assert using chai assertions
        fieldText.should.equal("Alphabets Only");

        //close the browser
        await driver.quit();
    });

    //special character verification
    var specialchar="~`!@#$%^&*()_+=-{}[],./\\;':\"|<>?"
    for(let i=0;i<specialchar.length;i++){
        //it block
        it(`Objective: Successfully error trigger, \nInput type: special character ${specialchar[i]}, \nAction: Button click`, async function(){
            //launch browser
            let driver = await new Builder().forBrowser("chrome").build();
    
            //navigate to location
            await driver.get("D:/webdev/practice/userRegForm.html"); 
    
            //add a todo //what to do
            await driver.findElement(By.id("fname")).sendKeys(`${specialchar[i]}`, Key.RETURN);
            await driver.findElement(By.id("submitbutt")).click();
    
            //assert
            let fieldText = await driver.findElement(By.id("errfname")).getText().then(function(value){
                return value
            });
    
            //assert using node assertions
            //assert.strictEqual(todotext,"Learning selenium");
    
            //assert using chai assertions
            fieldText.should.equal("Alphabets Only");
    
            //close the browser
            await driver.quit();
        });
    }


});

//async function example(){


//};
//example() //when using mocha no need to call  by this