import { isSIT, isUAT  } from './local.configs';

const { TEST_ENV } = process.env;

const env = isSIT ? 'sit' : isUAT ? 'uat' : 'PROD_URLs';

const host = isSIT ? 'https://test-sra.smartosc.com/login-v1' : isUAT ? 'https://uat-sra.hn.smartosc.com/login-v1' : `https://uat-sra.hn.smartosc.com/login-v1`;
const hostapi = isSIT ? 'https://test-api-sra.smartosc.com' : isUAT ? 'https://uat-sra-api.hn.smartosc.com' : `https://uat-sra-api.hn.smartosc.com`;


const urls = {
  baseUrl: host,
  apiUrl: hostapi,
};

export default urls;
