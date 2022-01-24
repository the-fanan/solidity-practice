<template>
  <div>
    <h1>Welcome To Flock Token Marketplace</h1>
    <h3>Accounts on this block chain network</h3>
    <ul>
      <li v-for="(accountAddress, index) in accounts" :key="index">{{ accountAddress }}</li>
    </ul>

    <h5>Token: {{ token }}</h5>
    <h5>Rate: {{ rate }}</h5>
    <h5>Current User Address: {{ userAddress }}</h5>
    <button @click="connectWallet" v-if="userAddress === 0">Connect Wallet</button>
  </div>
</template>

<script>
import Web3 from 'web3';
import FungibleTokenSaleBuild from '@/build/contracts/FungibleTokenSale.json';
import FungibleTokenBuild from '@/build/contracts/FungibleToken.json';
import FungibleTokenKycBuild from '@/build/contracts/FungibleTokenKyc.json';

export default {
  data() {
    return {
      web3: null,
      userAddress: 0,
      accounts: [],
      networkId: null,
      tokenContract: null,
      tokenKycContract: null,
      tokenSaleContract: null,
      token: null,
      rate: 0,
    };
  },
  async mounted()
  {
    this.web3 = new Web3(new Web3.providers.HttpProvider(process.env.BLOCKCHAIN_HTTP_PROVIDER_URI))
    this.web3.eth.getAccounts().then(response => {
      this.accounts = response;
    });

    if (typeof window.ethereum !== 'undefined') {
      
    }

    this.networkId = await this.web3.eth.net.getId();

    const tokenNetwork = FungibleTokenBuild.networks[this.networkId];
    this.tokenContract = new this.web3.eth.Contract(FungibleTokenBuild.abi, tokenNetwork && tokenNetwork.address);
    this.tokenContract.methods.totalSupply().call().then(response => {
      console.log(`Total Supply: ${response}`);
    });

    const tokenKycNetwork = FungibleTokenKycBuild.networks[this.networkId];
    this.tokenKycContract = new this.web3.eth.Contract(FungibleTokenKycBuild.abi, tokenKycNetwork && tokenKycNetwork.address);

    const tokenSaleNetwork = FungibleTokenSaleBuild.networks[this.networkId];
    this.tokenSaleContract = new this.web3.eth.Contract(FungibleTokenSaleBuild.abi, tokenSaleNetwork && tokenSaleNetwork.address);
    this.tokenSaleContract.methods.weiRaised().call().then(response => {
      console.log(`Wei Raised: ${response}`);
    });

    this.tokenSaleContract.methods.token().call().then(response => {
      this.token = response;
    });
    this.tokenSaleContract.methods.rate().call().then(response => {
      this.rate = response;
    });

    this.tokenContract.methods.balanceOf(tokenSaleNetwork.address).call().then(response => {
      console.log(`Token sale contract token balance: ${response}`);
    });

    this.tokenContract.methods.balanceOf(tokenNetwork.address).call().then(response => {
      console.log(`Token Contract token balance: ${response}`);
    });

    this.tokenContract.methods.balanceOf("0x877fdbd2499ad917619909d9082c417d791d4436").call().then(response => {
      console.log(`User token balance: ${response}`);
    });

    this.web3.eth.getBalance("0x877fdbd2499ad917619909d9082c417d791d4436").then(response => {
      const balance = response;
      console.log(`Wallet Balance: ${this.web3.utils.fromWei(balance, 'ether')}`);
    });
    
  },
  methods: {
    async connectWallet() {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      this.userAddress = accounts[0];
    },
    creditOtherAccount()
    {
      const BN = this.web3.utils.BN;
      const amount = new BN(5); // Willing to send 2 ethers
      const amountToSend = this.web3.utils.toWei(amount, "ether"); // Convert to wei value
      var send = this.web3.eth.sendTransaction({ from: this.userAddress, to: '0x877FDbD2499aD917619909d9082C417D791d4436', value: amountToSend });
    }
  }
}
</script>
