const PredictionMarket = artifacts.require('PredictionMarket.sol')

const SIDE = {
    BIDEN: 0,
    TRUMP: 1
};

module.exports = async function(deployer, _netork, addresses){
    const[admin, oracle, gambler1, gambler2, gambler3 , gambler4, _] =addresses;
    await deployer.deploy(PredictionMarket, oracle);
    const predictionMarket = await PredictionMarket.deployed();
    await predictionMarket.placeBet(
        SIDE.BIDEN,
        {from: gambler1, value: web3.utils.toWei('1')}
    )
    await predictionMarket.placeBet(
        SIDE.BIDEN,
        {from: gambler2, value: web3.utils.toWei('1')}
    )
    await predictionMarket.placeBet(
        SIDE.BIDEN,
        {from: gambler3, value: web3.utils.toWei('2')}
    )
    await predictionMarket.placeBet(
        SIDE.TRUMP,
        {from: gambler4, value: web3.utils.toWei('1')}
    )
}