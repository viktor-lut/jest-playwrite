// const { chromium } = require('playwright');
// const playwright = require('playwright');
const attaching = require('../modules/report-attach')
const { HOST } = process.env

let page


describe('Check maim page', () => {
    afterEach(async () => {
        const attachin = await attaching(page)
        await attachin.attachScr()
    })

    beforeAll(async () => {
        page = await context.newPage()
        await context.clearCookies()
        await page.goto(HOST, { waitUntil: 'domcontentloaded'})
    })

    afterAll(async () => {
        await browser.close()
        await context.close()
    })

    it('1. Title is correct', async () => {
        await expect(await page.title()).toBe('Home Page | Amdaris')
    })

    // it('2. Cookie panel is visible', async () => {
    //     await page.waitForTimeout(1000)
    //     const locator = await page.$('#cookie-notice')
    //     await expect(locator).toBeVisible()
    // })
    //
    // it('3. Cookie panel is hidden after click on "Accept button"', async () => {
    //     await page.click('#cn-accept-cookie')
    //     await page.waitForTimeout(500)
    //     const locator = await page.$('#cookie-notice')
    //     await expect(locator).toBeVisible(false)
    // })

    it('4. Header section is visible', async () => {
        const locator = await page.$('//header')
        await expect(locator).toBeVisible()
    })

    it('5. First section text is correct', async () => {
        const locator = await page.$('h1.hero__title.hero__title--long')
        await expect(locator).toHaveText('imagine the impossible')
    })

    it('6. Header section haves phone text', async () => {
        const locator = await page.locator('//p[@class="header-text"]')
        await expect(await locator).toHaveText('Get in touch +44(0)117 935 3444')
    })

    it('7. Tittle Contact us section is visible', async () => {
        await page.locator("a.studies__col__cta").focus()
        await page.waitForTimeout(500)
        await expect(await page.isVisible("text='Contact Us'")).toBeTruthy()
    })

    it('77. Tittle Contact us section is visible', async () => {
        const locator = await page.locator('div.row > div.contact__number')
        await expect(await locator.innerText()).toEqual('Get in touch +44(0)117 935 3444')
    })

    it('8. Contact us section have four phones number', async () => {
        await expect(await page.locator('div.row > div.contact__number')).toHaveText(['Text 1', 'Text 2', 'Text 3'])
    })

    // it('8. Tittle Contact us section is visible', async () => {
    //     await page.locator("a.studies__col__cta").focus()
    //     await page.waitForTimeout(500)
    //     await expect(await page.isVisible("text='Contact Us'")).toBeTruthy()
    //     await expect(await page.isVisible("text='Send'")).toBeTruthy()
    // })
})