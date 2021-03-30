describe('Token operations', () => {
    const seedPhrase = ''
    const assetId = "9gW9JdmZosgxWZ1HQeHPBdoWArAHsgegNvfGGT4PJVwY"

    it('Issue token', async () => {
        const myTokenParams =  {
            name: "Kys'",
            quantity: 100,
            decimals: 0,
            reissuable: true,
            script: "base64:BAQAAAAHJG1hdGNoMAUAAAACdHgDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAD0J1cm5UcmFuc2FjdGlvbgQAAAABYgUAAAAHJG1hdGNoMAMJAAAAAAAAAggFAAAAAWIAAAAGc2VuZGVyCQEAAAARQGV4dHJOYXRpdmUoMTA2MikAAAABAgAAACMzTjdyM2dDODVTc1JUQ0s4R0FWVTZ4azNmeVFaaXBRV2JqQQkAAGYAAAACCAUAAAACdHgAAAAJdGltZXN0YW1wCQAAZAAAAAIIBQAAAAlsYXN0QmxvY2sAAAAJdGltZXN0YW1wAAAAAAAAAAA8BwMJAAABAAAAAgUAAAAHJG1hdGNoMAIAAAASUmVpc3N1ZVRyYW5zYWN0aW9uBAAAAAFyBQAAAAckbWF0Y2gwAwkAAAAAAAACCAUAAAABcgAAAAZzZW5kZXIJAQAAABFAZXh0ck5hdGl2ZSgxMDYyKQAAAAECAAAAIzNON3IzZ0M4NVNzUlRDSzhHQVZVNnhrM2Z5UVppcFFXYmpBCQAAZgAAAAIIBQAAAAJ0eAAAAAl0aW1lc3RhbXAJAABkAAAAAggFAAAACWxhc3RCbG9jawAAAAl0aW1lc3RhbXAAAAAAAAAAADwHAwkAAAEAAAACBQAAAAckbWF0Y2gwAgAAABNFeGNoYW5nZVRyYW5zYWN0aW9uBAAAAAJleAUAAAAHJG1hdGNoMAMJAQAAAAIhPQAAAAIICAgFAAAAAmV4AAAACGJ1eU9yZGVyAAAACWFzc2V0UGFpcgAAAApwcmljZUFzc2V0BQAAAAR1bml0BwMJAQAAAAIhPQAAAAIICAgFAAAAAmV4AAAACXNlbGxPcmRlcgAAAAlhc3NldFBhaXIAAAAKcHJpY2VBc3NldAUAAAAEdW5pdAcGB2Nbr90=",
            description: "token for home work in week 5",
            fee: 100400000
        }

        const signedIssueTx = issue(myTokenParams, seedPhrase);
        let tx = await broadcast(signedIssueTx);
        await waitForTx(tx.id);

        console.log('Token was successfully issued: ' + tx.id);
    })

    it('Reissue token', async () => {
        const reissueParams = {
            quantity: 100,
            fee: 100000000,
            assetId: assetId,
            reissuable: true
        }

        const signedReissueTx = reissue(reissueParams, seedPhrase);
        let tx =  await broadcast(signedReissueTx);
        await waitForTx(tx.id);

        console.log('Token was successfully reissued: ' + tx.id);
    })

    it('set asset script for allow only invoke script transactions', async () => {
        const scriptParams =  {
            assetId: assetId,
            script: "base64:BAQAAAAHJG1hdGNoMAUAAAACdHgDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAF0ludm9rZVNjcmlwdFRyYW5zYWN0aW9uBAAAAAFpBQAAAAckbWF0Y2gwBgdBwOuq",
        }

        const signedSetScriptTx = setAssetScript(scriptParams, seedPhrase);
        let tx = await broadcast(signedSetScriptTx);
        await waitForTx(tx.id);

        console.log('Script is successfully added: ' + tx.id);
    })

})
