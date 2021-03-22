describe('dApp shop test', () => {
    const shopAccountAddress = '3NB9x5yHw3PcQmpPL44aQvsKaWNocFJb4zQ'

    it('Can not by item if payment amout is higher than item price', async () => {
        const tx = invokeScript({
            dApp: shopAccountAddress,
            call: {
                "function": "purchase",
                "args": []
            },
            payment: [
                {
                    amount:1000,
                    assetId: null
                }
            ],
            fee: 900000
        })

        await broadcast(tx)
            .catch( err =>  {
                expect("Error while executing account-script: Purchase amount cannot be higher than item price").to.equal(err.message)
            })
    })

    it('Can not by item if payment amout is less than item price', async () => {
        const tx = invokeScript({
            dApp: shopAccountAddress,
            call: {
                "function": "purchase",
                "args": []
            },
            payment: [
                {
                    amount:1,
                    assetId: null
                }
            ],
            fee: 900000
        })

        await broadcast(tx)
            .catch( err =>  {
                expect("Error while executing account-script: Purchase amount cannot be less than item price").to.equal(err.message)
            })
    })

    it('Can buy item if price is equals item price', async () => {
        const tx = invokeScript({
            dApp: shopAccountAddress,
            call: {
                "function": "purchase",
                "args": []
            },
            payment: [
                {
                    amount:333,
                    assetId: null
                }
            ],
            fee: 900000
        })

        await broadcast(tx)
        await waitForTx(tx.id)
    })
})