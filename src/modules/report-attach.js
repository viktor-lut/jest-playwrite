const { addAttach } = require('jest-html-reporters/helper');
const fse = require('fs-extra');
const path = require('path');

class reportAttach {
    constructor(pages) {
        this.page = pages;
    }

    async attachScr() {
        try {
            const testName = await expect.getState().currentTestName.replace(/[^a-z0-9.-]+/gi, '_')
            const filePath = path.resolve(__dirname, `../screenshots/${testName}.png`)
            const data = await this.page.screenshot({ path: filePath, fullPage: true });

            if (fse.pathExistsSync(filePath)) {
                await addAttach({ attach: data, description: testName })
            }
        } catch(err) {
            console.log('ERROR => ', err);
        }
    }

}

module.exports = (page) => new reportAttach(page);