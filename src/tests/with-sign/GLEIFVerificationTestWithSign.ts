import * as dotenv from 'dotenv';
dotenv.config();

import { getGLEIFVerificationWithSignUtils } from './GLEIFVerificationTestWithSignUtils.js';

async function main() {
    // Get company name from command line
    const companyName = process.argv[2];
    //let typeOfNet = process.argv[3];
    console.log('Company Name:', companyName);
    let proof = await getGLEIFVerificationWithSignUtils(companyName);
    //console.log('Proof:', proof);
}

main().catch(err => {
    console.error('Error:', err);
});