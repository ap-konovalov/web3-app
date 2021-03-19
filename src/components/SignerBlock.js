import React from 'react';
import {Signer} from '@waves/signer';
import {ProviderWeb} from '@waves.exchange/provider-web';

const signer = new Signer({
    NODE_URL: 'https://nodes-testnet.wavesnodes.com'
});
signer.setProvider(new ProviderWeb('https://testnet.waves.exchange/signer/'))

async function auth() {
    try {
        const user = await signer.login();
    } catch (e) {
        console.error('login rejected')
    }
}

export function SignerBlock() {
    return (
        <section className="signer_buttons">
            <input className="btn btn-primary" type="submit" value="Auth with WavesSigner" onClick={auth}/>
        </section>
    );
}