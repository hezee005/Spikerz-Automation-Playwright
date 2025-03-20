 require('dotenv').config();



require('dotenv').config();

export const CREDENTIALS = {
    username: process.env.SPK_USERNAME || '',
    password: process.env.SPK_PASSWORD || '',
    gmailUsername: process.env.GMAIL_USERNAME || '',
    gmailPassword: process.env.GMAIL_PASSWORD || ''
};

