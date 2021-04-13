
import puppeteer from 'puppeteer'

const load = false;
const time = 90;
const app = 'http://localhost:3000';

describe(
    '/ (Company dashboard form)',
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

    test ("Company login successful", async () =>{

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

    }, 10500);

    test ("Company dashboard render", async () =>{

        let createCategory = await page.$eval('#root > div > ul > li:nth-child(1) > h1', (h1) => h1.textContent);
        expect(createCategory).toBe('Create category');

        let addItem = await page.$eval('#root > div > ul > li:nth-child(2) > h1', (h1) => h1.textContent);
        expect(addItem).toBe('Add item');

        let virtualWarehouse = await page.$eval('#root > div > ul > li:nth-child(3) > h1', (h1) => h1.textContent);
        expect(virtualWarehouse).toBe('Virtual warehouse');

        let myProfile = await page.$eval('#root > div > ul > li:nth-child(4) > h1', (h1) => h1.textContent);
        expect(myProfile).toBe('My profile');

        let logOut = await page.$eval('#root > div > ul > li:nth-child(5) > h1', (h1) => h1.textContent);
        expect(logOut).toBe('Log out');

    }, 10500)

    test ("Create category render", async () =>{

        const [button] = await page.$x("//button[contains(., 'Create category')]");
        if (button) {
        await button.click();
        }

        let createCategory = await page.$eval('h1', (h1) => h1.textContent);
        expect(createCategory).toBe('Create category');

    }, 10500)

    test ("Create category", async () =>{

        await page.click('input#type--3');
        await page.type('input#type--3', 'testKategorija');

        const [buttonCreate] = await page.$x("//button[contains(., 'Create')]");
        if (buttonCreate) {
        await buttonCreate.click();
        }

        const [buttonBack] = await page.$x("//button[contains(., 'Back')]");
        if (buttonBack) {
        await buttonBack.click();
        }

    }, 10500)

    test ("Add item render", async () =>{

        const [buttonAdd] = await page.$x("//button[contains(.,'Add item')]");
        if (buttonAdd) {
        await buttonAdd.click();
        }

        let addItem = await page.$eval('h1', (h1) => h1.textContent);
        expect(addItem).toBe('Add item');

    }, 10500)

    test ("Add item", async () =>{

        await page.click('input#name--4');
        await page.type('input#name--4', 'noviItem');
        
        await page.select("select#categoryId--5", "2");

        const [buttonAdd] = await page.$x("//button[contains(., 'Add')]");
        if (buttonAdd) {
        await buttonAdd.click();
        }

        const [buttonBack] = await page.$x("//button[contains(., 'Back')]");
        if (buttonBack) {
        await buttonBack.click();
        }

    }, 10500)

    test ("Profile render", async () =>{

        const [buttonProfile] = await page.$x("//button[contains(., 'My profile')]");
        if (buttonProfile) {
        await buttonProfile.click();
        }

        let myProfile = await page.$eval('#root > div > h1', (h1) => h1.textContent);
        expect(myProfile).toBe('My profile');

        let keyItem = await page.$eval('#root > div > ul > li:nth-child(1) > h3', (h3) => h3.textContent);
        expect(keyItem).toContain('qwe21');

        let emailItem = await page.$eval('#root > div > ul > li:nth-child(2) > h3', (h3) => h3.textContent);
        expect(emailItem).toContain('kompanija@test.com');

        let imeItem = await page.$eval('#root > div > ul > li:nth-child(3) > h3', (h3) => h3.textContent);
        expect(imeItem).toContain('TestnaTvrtka');

        let adresaItem = await page.$eval('#root > div > ul > li:nth-child(4) > h3', (h3) => h3.textContent);
        expect(adresaItem).toContain('Adresa kompanije 12');

        let gradItem = await page.$eval('#root > div > ul > li:nth-child(5) > h3', (h3) => h3.textContent);
        expect(gradItem).toContain('Grad kompanije');

        const [buttonBack] = await page.$x("//button[contains(., 'Back')]");
        if (buttonBack) {
        await buttonBack.click();
        }

    }, 10500)

    afterAll(async () => {await browser.close();});

});
