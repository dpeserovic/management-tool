
import puppeteer from 'puppeteer'

const load = false;
const time = 50;
const app = 'http://localhost:3000';

describe(
    '(Register company/user)',
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

    test ("Register company", async () => {

        await page.click('input#id--7');
        await page.type('input#id--7','qwe21');

        await page.click('input#email--8');
        await page.type('input#email--8','kompanija@test.com');

        await page.click('input#password--9');
        await page.type('input#password--9','password123');

        await page.click('input#confirmPassword--10');
        await page.type('input#confirmPassword--10','password123');

        await page.click('input#name--11');
        await page.type('input#name--11','TestnaTvrtka');

        await page.click('input#address--12');
        await page.type('input#address--12','Adresa kompanije 12');

        await page.click('input#city--13');
        await page.type('input#city--13','Grad kompanije');

        const [button] = await page.$x("//button[contains(., 'Create Company')]");
        if (button) {
        await button.click();
        }


    }, 20000);

    test ("Register user", async () => {

        await page.click('input#email--3');
        await page.type('input#email--3','user@test.com');

        await page.click('input#password--4');
        await page.type('input#password--4','password321');

        await page.click('input#confirmPassword--5');
        await page.type('input#confirmPassword--5','password321');

        await page.click('input#companyId--6');
        await page.type('input#companyId--6','qwe21');

        const [button] = await page.$x("//button[contains(., 'Create User')]");
        if (button) {
        await button.click();
        }

    }, 13400);
});


import puppeteer from 'puppeteer'

const load = false;
const time = 50;
const app = 'http://localhost:3000';

describe(
    '(Register company/user)',
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

    test ("Register company", async () => {

        await page.click('input#id--7');
        await page.type('input#id--7','qwe21');

        await page.click('input#email--8');
        await page.type('input#email--8','kompanija@test.com');

        await page.click('input#password--9');
        await page.type('input#password--9','password123');

        await page.click('input#confirmPassword--10');
        await page.type('input#confirmPassword--10','password123');

        await page.click('input#name--11');
        await page.type('input#name--11','TestnaTvrtka');

        await page.click('input#address--12');
        await page.type('input#address--12','Adresa kompanije 12');

        await page.click('input#city--13');
        await page.type('input#city--13','Grad kompanije');

        const [button] = await page.$x("//button[contains(., 'Create Company')]");
        if (button) {
        await button.click();
        }


    }, 20000);

    test ("Register user", async () => {

        await page.click('input#email--3');
        await page.type('input#email--3','user@test.com');

        await page.click('input#password--4');
        await page.type('input#password--4','password321');

        await page.click('input#confirmPassword--5');
        await page.type('input#confirmPassword--5','password321');

        await page.click('input#companyId--6');
        await page.type('input#companyId--6','qwe21');

        const [button] = await page.$x("//button[contains(., 'Create User')]");
        if (button) {
        await button.click();
        }

    }, 13400);
});

