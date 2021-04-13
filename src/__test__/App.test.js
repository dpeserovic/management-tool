import puppeteer from 'puppeteer'

const load = false;
const time = 120;
const app = 'http://localhost:3000';

describe(
    '/ (Register form)',
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
  

    test ("Render register page", async () => {

        await page.click('button.btn-secondary');
        let loginPageRender = await page.$eval('h1', (h1) => h1.textContent);
        expect(loginPageRender).toBe('Register');

    });

    test ("Register invalid input fields", async () => {

        await page.click('input#id--7');
        await page.click('input#email--8');
        await page.click('input#password--9');
        await page.click('input#confirmPassword--10');
        await page.click('input#name--11');
        await page.click('input#address--12');
        await page.click('input#city--13');
        await page.click('input#email--3');
        await page.click('input#password--4');
        await page.click('input#confirmPassword--5');
        await page.click('input#companyId--6');
        await page.click('input#email--3');

        let keyInputError = await page.$eval('p#id--7-helper-text', (p) => p.textContent);
        expect(keyInputError).toBe('The Key field is required.');

        let emailInputError = await page.$eval('p#email--8-helper-text', (p) => p.textContent);
        expect(emailInputError).toBe('The E-mail field is required.');

        let passInputError = await page.$eval('p#password--9-helper-text', (p) => p.textContent);
        expect(passInputError).toBe('The Password field is required.');

        let confirmPassInputError = await page.$eval('p#confirmPassword--10-helper-text', (p) => p.textContent);
        expect(confirmPassInputError).toBe('The Confirm password field is required.');

        let imeKompanijeInputError = await page.$eval('p#name--11-helper-text', (p) => p.textContent);
        expect(imeKompanijeInputError).toBe('The Name field is required.');

        let adresaKompanijeInputError = await page.$eval('p#address--12-helper-text', (p) => p.textContent);
        expect(adresaKompanijeInputError).toBe('The Address field is required.');

        let gradKompanijeInputError = await page.$eval('p#city--13-helper-text', (p) => p.textContent);
        expect(gradKompanijeInputError).toBe('The City field is required.');

        let emailUserInputError = await page.$eval('p#email--3-helper-text', (p) => p.textContent);
        expect(emailUserInputError).toBe('The E-mail field is required.');

        let passUserInputError = await page.$eval('p#password--4-helper-text', (p) => p.textContent);
        expect(passUserInputError).toBe('The Password field is required.');

        let confPassUserInputError = await page.$eval('p#confirmPassword--5-helper-text', (p) => p.textContent);
        expect(confPassUserInputError).toBe('The Confirm password field is required.');

        let userCompIdInputError = await page.$eval('p#companyId--6-helper-text', (p) => p.textContent);
        expect(userCompIdInputError).toBe('The Company key field is required.');

    }, 13400);


    test ("Company key to long", async () =>{

        await page.click('input#id--7');
        await page.type('input#id--7', 'random123');
        await page.click('input#email--3');

        let keyInputError = await page.$eval('p#id--7-helper-text', (p) => p.textContent);
        expect(keyInputError).toBe('The Key may not be greater than 5 characters.');

    }, 6500);


    test ("Invalid company email", async () =>{

        await page.click('input#email--8');
        await page.type('input#email--8', 'companyEmail');
        await page.click('input#email--3');

        let keyInputError = await page.$eval('p#email--8-helper-text', (p) => p.textContent);
        expect(keyInputError).toBe('The E-mail format is invalid.');

    }, 6500);

    test ("Invalid company password", async () =>{

        await page.click('input#password--9');
        await page.type('input#password--9', '123');
        await page.click('input#email--3');

        let passInputError = await page.$eval('p#password--9-helper-text', (p) => p.textContent);
        expect(passInputError).toBe('The Password must be at least 8 characters.');
        await page.click('input#password--9');
        await page.keyboard.down('Control');
        await page.keyboard.press('KeyA');
        await page.keyboard.up('Control');
        await page.keyboard.press('Backspace');

    }, 6500);

    test ("Company password does not match", async () =>{

        await page.click('input#password--9');
        await page.type('input#password--9', '123123123123');
        await page.click('input#confirmPassword--10');
        await page.type('input#confirmPassword--10', '123123');
        await page.click('input#email--3');

        let confInputError = await page.$eval('p#confirmPassword--10-helper-text', (p) => p.textContent);
        expect(confInputError).toBe('The Confirm password and Password fields must match.');

    }, 10000);

    test ("Invalid user email", async () =>{

        await page.click('input#email--3');
        await page.type('input#email--3', 'usrEmail');
        await page.click('input#password--4');

        let emailInputError = await page.$eval('p#email--3-helper-text', (p) => p.textContent);
        expect(emailInputError).toBe('The E-mail format is invalid.');

    }, 6500);

    test ("Invalid user password", async () =>{

        await page.click('input#password--4');
        await page.type('input#password--4', '123');
        await page.click('input#email--3');

        let confInputError = await page.$eval('p#password--4-helper-text', (p) => p.textContent);
        expect(confInputError).toBe('The Password must be at least 8 characters.');
        await page.click('input#password--4');
        await page.keyboard.down('Control');
        await page.keyboard.press('KeyA');
        await page.keyboard.up('Control');
        await page.keyboard.press('Backspace');

    }, 6500);

    test ("User password does not match", async () =>{

        await page.click('input#password--4');
        await page.type('input#password--4', '123123123123');
        await page.click('input#confirmPassword--5');
        await page.type('input#confirmPassword--5', '123123');
        await page.click('input#email--3');

        let passInputError = await page.$eval('p#confirmPassword--5-helper-text', (p) => p.textContent);
        expect(passInputError).toBe('The Confirm password and Password fields must match.');


    }, 9000);

    test ("User password does not match", async () =>{

        await page.click('input#companyId--6');
        await page.type('input#companyId--6', 'random345');
        await page.click('input#confirmPassword--5');

        let passInputError = await page.$eval('p#companyId--6-helper-text', (p) => p.textContent);
        expect(passInputError).toBe('The Company key may not be greater than 5 characters.');


    }, 9000);

});

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

    }, 9000);


    test ("Login successful", async () =>{

        await page.click('input#email--1');
        await page.type('input#email--1', 'testkomp@test.com');
        await page.click('input#password--2');
        await page.type('input#password--2', '123123123');
        await page.click('button.btn-dark');

        let loginValid = await page.$eval('h1', (h1) => h1.textContent);
        expect(loginValid).toBe('Create category');

    }, 10500)

});
