
import puppeteer from 'puppeteer'

const load = false;
const time = 50;
const app = 'http://localhost:3000';

describe(
    '/ (User dashboard form))',
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

    test ("User login successful", async () =>{

        await page.click('input#email--1');
        await page.type('input#email--1', 'user@test.com');
        await page.click('input#password--2');
        await page.type('input#password--2', 'password321');

        const [button] = await page.$x("//button[contains(., 'Log in')]");
        if (button) {
        await button.click();
        }

        let loginValid = await page.$eval('h1', (h1) => h1.textContent);
        expect(loginValid).toBe('My backpack');

    }, 10500);

    test ("User dashboard render", async () =>{

        let myBackpack = await page.$eval('#root > div > ul > li:nth-child(1) > h1', (h1) => h1.textContent);
        expect(myBackpack).toBe('My backpack');

        let virtualWarehouse = await page.$eval('#root > div > ul > li:nth-child(2) > h1', (h1) => h1.textContent);
        expect(virtualWarehouse).toBe('Virtual warehouse');

        let myProfile = await page.$eval('#root > div > ul > li:nth-child(3) > h1', (h1) => h1.textContent);
        expect(myProfile).toBe('My profile');

        let logOut = await page.$eval('#root > div > ul > li:nth-child(4) > h1', (h1) => h1.textContent);
        expect(logOut).toBe('Log out');

    })

    test ("Profile render", async () =>{

        const [buttonProfile] = await page.$x("//button[contains(., 'My profile')]");
        if (buttonProfile) {
        await buttonProfile.click();
        }

        let myProfile = await page.$eval('#root > div > h1', (h1) => h1.textContent);
        expect(myProfile).toBe('My profile');

        let IdItem = await page.$eval('#root > div > ul > li:nth-child(1) > h3', (h3) => h3.textContent);
        expect(IdItem).toContain('8');

        let emailItem = await page.$eval('#root > div > ul > li:nth-child(2) > h3', (h3) => h3.textContent);
        expect(emailItem).toContain('user@test.com');

        let companyKeyItem = await page.$eval('#root > div > ul > li:nth-child(3) > h3', (h3) => h3.textContent);
        expect(companyKeyItem).toContain('qwe21');

        const [buttonBack] = await page.$x("//button[contains(., 'Back')]");
        if (buttonBack) {
        await buttonBack.click();
        }

    }, 10500)

    afterAll(async () => {await browser.close();});

});
