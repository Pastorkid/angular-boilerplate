import { waitForAngular } from 'testcafe-angular-selectors';
import { Selector, test } from 'testcafe';
// import { LANGUAGES } from 'i18n-l10n-flags';

const screenshotMode = process.env.TEST_MODE || 'tested';



fixture `App tests`
    .page('http://localhost:4200')
    .beforeEach(async () => {
        await waitForAngular();
    });
test('Click appVersion', async t => {
    const appVersion = Selector('app-app-version'); 
    await t
        .expect(appVersion.exists).ok();

    const savePath = `${t.browser.alias.replace(/[^a-z0-9]/gi, '_')}/${screenshotMode}.png`;
    const screenshotDir = `Click_appVersion/${savePath}`;
    await t.takeElementScreenshot('app-app-version',screenshotDir);
});
