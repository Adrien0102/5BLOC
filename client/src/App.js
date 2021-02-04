import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  addToSimpleStorage() {
    if (this.state.simpleStorageInstance && this.state.accounts) {
      const value = this.storageAmountInput.value;
      this.state.simpleStorageInstance.set(value, {from: this.state.accounts[0]})
        .then((result) => {
          return this.state.simpleStorageInstance.get.call(this.state.accounts[0])
        }).then((result) => {
          this.setState(prevState => ({
            ...prevState,
            storageValue: result.c[0]
          }));
        }).catch((err) => {
          console.log('error');
          console.log(err);
        });
    } else {
      this.setState(prevState => ({
        ...prevState,
        error: new Error('simple storage instance not loaded')
      }))
    }
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <div>The stored value is: {this.state.storageValue}</div>
        <form className="pure-form pure-form-stacked">
        <fieldset>
          <label htmlFor="storage">Storage Amount</label>
          <input id="storage" type="number" ref={c => { this.storageAmountInput = c }} />
          <button
            className="pure-button"
            onClick={(e) => {
              e.preventDefault();
              this.addToSimpleStorage()
            }}
          >
            Set Storage
          </button>
        </fieldset>
      </form>
      </div>
    );
  }
}

export default App;
