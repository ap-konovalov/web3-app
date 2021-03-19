import React from 'react';
import {Signer} from '@waves/signer';
import {ProviderWeb} from '@waves.exchange/provider-web';

const signer = new Signer({
    NODE_URL: 'https://nodes-testnet.wavesnodes.com'
});
signer.setProvider(new ProviderWeb('https://testnet.waves.exchange/signer/'))

let address = 'not authorized'

async function auth() {
    try {
        const user = await signer.login();
        address = user.address;
    } catch (e) {
        console.error('login rejected')
    } finally {
        document.querySelector(".address").innerHTML = "Your address is: " + address
    }
}

export function SignerBlock() {
    return (
        <section className="signer_buttons">
            <br/>
            <input className="btn btn-primary" type="submit" value="Auth with WavesSigner" onClick={auth}/>
            <p class="address"></p>
        </section>
    );
}