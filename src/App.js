import Web3Modal from 'web3modal'
import './App.css';
import {ethers} from 'ethers'
import WalletConnectProvider from "@walletconnect/web3-provider";


const providerOptions = {
  binancechainwallet: {
    package: true
  }
  // walletconnect: {
  //   package: WalletConnectProvider, // required
  //   options: {
  //     infuraId: {3: 'https://ropsten.infura.io/v3/fefnefnosfe'} // required
  //   }
  // }
}

function App() {

  async function connectWallet() {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions
      })
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance)
      console.log(web3ModalProvider)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Web3Modal Connect Wallet</h1>
        <button onClick={connectWallet}>Connect</button>
      </header>
    </div>
  );
}

export default App;
