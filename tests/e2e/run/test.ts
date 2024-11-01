import { waitForAngular } from 'testcafe-angular-selectors';
import { Selector, test } from 'testcafe';

const screenshotMode = process.env.TEST_MODE || 'tested';

fixture `App tests`
    .page('http://localhost:4200')
    .beforeEach(async () => {
        await waitForAngular();
    });
test('testElementScreenshot', async t => {
    const appRoot = Selector('app-root'); 
    await t
        .expect(appRoot.exists).ok();

    const savePath = `${t.browser.alias.replace(/[^a-z0-9]/gi, '_')}/${screenshotMode}.png`;
    const screenshotDir = `testElementScreenshot/${savePath}`;
    // Time to strip everything but the element screenshot!
    await t.takeElementScreenshot('app-app-version',screenshotDir);
});
