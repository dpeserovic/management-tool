
import puppeteer from 'puppeteer'

const load = false;
const time = 70;
const app = 'http://localhost:3000';

describe(
    '/ (Login form)',
    () => {
      let page;
      beforeAll(async () => {
          
        const browser = await puppeteer.launch({
        headless: load,
        slowMo: time,
        defaultViewport: null
    });
        page = await browser.newPage();
        await page.goto(app);
      });

    test ("Render login page", async () => {

        let loginPageRender = await page.$eval('h1', (h1) => h1.textContent);
        expect(loginPageRender).toBe('Login');

    });

    test ("Login invalid email and password", async () => {

        await page.click('input#email--1');
        await page.click('input#password--2');
        
        await page.click('input#email--1');

        let emailInputError = await page.$eval('p#email--1-helper-text', (input) => input.textContent);
        expect(emailInputError).toBe('The E-mail field is required.');

        let passwordInputError = await page.$eval('p#password--2-helper-text', (input) => input.textContent);
        expect(passwordInputError).toBe('The Password field is required.');

    });


    test ("Invalid email fromat and password to short", async () => {

        await page.click('input#email--1');
        await page.type('input#email--1', 'email');
        await page.click('input#password--2');
        await page.type('input#password--2', 'pass1');
        await page.click('input#email--1');

        let emailInputError = await page.$eval('p#email--1-helper-text', (input) => input.textContent);
        expect(emailInputError).toBe('The E-mail format is invalid.');


        let passwordInputError = await page.$eval('p#password--2-helper-text', (input) => input.textContent);
        expect(passwordInputError).toBe('The Password must be at least 8 characters.');

    }, 9000);


    test ("Login successful", async () =>{

        await page.click('input#email--1');
        await page.keyboard.down('Control');
        await page.keyboard.press('KeyA');
        await page.keyboard.up('Control');
        await page.keyboard.press('Backspace');

        await page.click('input#password--2');
        await page.keyboard.down('Control');
        await page.keyboard.press('KeyA');
        await page.keyboard.up('Control');
        await page.keyboard.press('Backspace');

        await page.click('input#email--1');
        await page.type('input#email--1', 'kompanija@test.com');
        await page.click('input#password--2');
        await page.type('input#password--2', 'password123');
        
        const [button] = await page.$x("//button[contains(., 'Log in')]");
        if (button) {
        await button.click();
        }

        let loginValid = await page.$eval('h1', (h1) => h1.textContent);
        expect(loginValid).toBe('Create category');

    }, 10500)

});
