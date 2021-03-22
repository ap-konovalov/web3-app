describe('invoke transaction with differet proofs scope', () => {
    const sashaSeed = 'paste sasha seed'
    const valentinSeed = 'paste valentin seed'

    it('When send transaction with two signatures then it is successfull', async () => {
        const transferSignedWithOnePartie = transfer({
            amount: 1,
            recipient: '3N7iaKnAUMcsxqvLCtHgogyxyBLKx8xDztP',
            fee: 500000
        }, sashaSeed)

        const transferSignedWithTwoParties = transfer(transferSignedWithOnePartie, valentinSeed)
        await broadcast(transferSignedWithTwoParties)
        await waitForTx(transferSignedWithTwoParties.id)
    })

    it('When send transaction with one signatures then it is failed', async () => {
        const transferSignedWithOnePartie = transfer({
            amount: 1,
            recipient: '3N7iaKnAUMcsxqvLCtHgogyxyBLKx8xDztP',
            fee: 500000
        }, sashaSeed)

        await broadcast(transferSignedWithOnePartie)
            .catch(err => {
                expect("Transaction is not allowed by account-script").to.equal(err.message)
            })
    })
})