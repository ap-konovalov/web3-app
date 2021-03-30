describe('test for coupon scripts', () => {
    const couponAsssetId = 'DzU1EZZ2DfBHrdkkBym6XnMxdxXDGmgj1LdgHoXQX5Ku'

    it('Allow burn transactions only for issuer', async () => {
        const issuerSeed = "" //TODO: Add seed
        const tx = burn({
            assetId: couponAsssetId,
            amount: 1,
            fee: 900000
        },issuerSeed)

        await broadcast(tx)
        await waitForTx(tx.id)
        console.log("You burn 1 asset. Transaction id = " + tx.id)
    })

    it('Can not burn asset if you are not issuer', async () => {
        const notIssuerSeed = "" //TODO: Add seed
        const tx = burn({
            assetId: couponAsssetId,
            amount: 1,
            fee: 900000
        },notIssuerSeed)

        await broadcast(tx).catch( err => {
            expect("Transaction is not allowed by account-script").to.equal(err.message)
        })
    })

    it('Allow reissue transactions only for issuer', async () => {
        const issuerSeed = "" //TODO: Add seed
        const tx = reissue({
            quantity: 100,
            fee: 100000000,
            assetId: couponAsssetId,
            reissuable: true
        },issuerSeed)

        await broadcast(tx)
        await waitForTx(tx.id)
        console.log("You reissue 100 assets. Transaction id = " + tx.id)
    })

    it('Can not  reissue if you are not issuer', async () => {
        const notIssuerSeed = "" //TODO: Add seed
        const tx = reissue({
            quantity: 100,
            fee: 100000000,
            assetId: couponAsssetId,
            reissuable: true
        },notIssuerSeed)

        await broadcast(tx).catch( err => {
            expect("Transaction is not allowed by account-script").to.equal(err.message)
        })
    })
})
