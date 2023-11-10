const { TEST_ENV, TIMEOUT, HEADLESS, TEST_CI } = process.env;

export const isSIT = TEST_ENV === 'SIT';
export const isUAT = TEST_ENV === 'UAT';
export const isProd = TEST_ENV === 'PROD';
export const TEST_TIMEOUT = typeof TIMEOUT === 'string' ? parseInt(TIMEOUT, 10) : 60000;
export const isHeadless = HEADLESS === 'true';
export const isCI = TEST_CI === 'true';
export const ENABLE_SCREENSHOT = isCI ? 'off' : 'only-on-failure';
export const WORKERS = isCI ? 3 : 3;
export const TEST_RETRIES = isCI ? 1 : 0;
export const PAGE_INTERACTION_TIME = 3000;
export const TRACE = isCI ? 'off' : 'retain-on-failure';