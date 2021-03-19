const chromium = require('../build/');

exports.handler = async (event, context) => {
  let browser = null;

  try {
    const pwChromium = await chromium.playwright();
    const browser = await pwChromium.launch({
      executablePath: await chromium.executablePath,
      args: chromium.args,
    })
    const context = await browser.newContext();

    const page = await context.newPage();
    await page.goto(event.url);
    const data = await page.screenshot();
    if (data.length === 0) {
      throw new Error(`Screenshot is empty`);
    }
    console.log('Page title: ', await page.title());
  } catch (error) {
    throw error;
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
};