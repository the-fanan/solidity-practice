const SmartContract = artifacts.require("SmartContract");

module.exports = async function (deployer, network, accounts) {
  // deployment steps
  await deployer.deploy(SmartContract);
};