
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

    test ("Login error", async () =>{

      await page.click('input#email--1');
      await page.type('input#email--1', 'kompanija@test.com');
      await page.click('input#password--2');
      await page.type('input#password--2', 'passw211');

      const [button] = await page.$x("//button[contains(., 'Log in')]");
      if (button) {
      await button.click();
      }

      let invalidLogin = await page.$eval('div.Toastify__toast-body', (div) => div.textContent);
      expect(invalidLogin).toBe('Error');

  }, 10500);

    test ("Login successful", async () =>{

        await page.click('input#email--1');
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

