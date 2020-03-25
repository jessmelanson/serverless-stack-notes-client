const REGION = 'us-east-1';
const BUCKET = 'notes-training-app';
const API_GATEWAY_URL = 'https://zzwqlru611.execute-api.us-east-1.amazonaws.com/prod';
const USER_POOL_ID = 'us-east-1_xNf8vp4wW';
const IDENTITY_POOL_ID = 'us-east-1:55bd049c-aa4f-4241-b8e1-9d024da219cd';
const APP_CLIENT_ID = '3smc0hhn63cfs8ed5027a8bvc3';

export default {
  s3: {
    REGION,
    BUCKET
  },
  apiGateway: {
    REGION,
    URL: API_GATEWAY_URL
  },
  cognito: {
    REGION,
    USER_POOL_ID,
    IDENTITY_POOL_ID,
    APP_CLIENT_ID
  }
};
