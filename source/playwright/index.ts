import playwrightTypes from 'playwright-core/types/types';

export type PlaywrightChromiumBrowser = playwrightTypes.BrowserType<playwrightTypes.ChromiumBrowser>

export function getPlaywright(): PlaywrightChromiumBrowser {
  return require('playwright-core').chromium
}