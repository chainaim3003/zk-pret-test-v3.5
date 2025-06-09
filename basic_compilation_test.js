// Test if the basic compilation issue is fixed
import { Mina, PrivateKey, AccountUpdate } from 'o1js';
import { GLEIFComplianceVerifier } from './build/contracts/GLEIFComplianceVerifier.js';

async function testBasicCompilation() {
    console.log('Testing basic contract compilation...');
    
    try {
        // Set up test environment with proofs disabled for faster compilation
        const Local = await Mina.LocalBlockchain({ proofsEnabled: false });
        Mina.setActiveInstance(Local);
        
        const deployerAccount = Local.testAccounts[0];
        const deployerKey = deployerAccount.key;
        
        const zkAppKey = PrivateKey.random();
        const zkAppAddress = zkAppKey.toPublicKey();
        
        console.log('✅ Test environment set up');
        
        // Try to compile the contract
        console.log('🔄 Starting compilation...');
        await GLEIFComplianceVerifier.compile();
        console.log('✅ Contract compiled successfully!');
        
        // Create contract instance
        const zkApp = new GLEIFComplianceVerifier(zkAppAddress);
        console.log('✅ Contract instance created');
        
        // Try to deploy
        console.log('🔄 Attempting deployment...');
        const deployTxn = await Mina.transaction(deployerAccount, async () => {
            AccountUpdate.fundNewAccount(deployerAccount);
            await zkApp.deploy();
        });
        await deployTxn.sign([deployerKey, zkAppKey]).send();
        console.log('✅ Contract deployed successfully!');
        
        // Test admin initialization
        console.log('🔄 Testing admin initialization...');
        const initAdminTxn = await Mina.transaction(deployerAccount, async () => {
            await zkApp.initializeAdmin(deployerAccount);
        });
        await initAdminTxn.sign([deployerKey]).send();
        console.log('✅ Admin initialized successfully!');
        
        console.log('🎉 All basic tests passed! The compilation issue is fixed.');
        
    } catch (error) {
        console.error('❌ Test failed:', error.message);
        console.error('Stack:', error.stack);
        
        if (error.message.includes('toConstant()')) {
            console.log('\n💡 Still has the toConstant() issue - need further fixes.');
        } else if (error.message.includes('verification key')) {
            console.log('\n💡 Different compilation issue - may need to investigate.');
        } else {
            console.log('\n💡 New issue encountered.');
        }
    }
}

testBasicCompilation().catch(console.error);
