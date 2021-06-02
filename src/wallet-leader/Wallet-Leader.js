import React, { Component } from 'react';
import classes from './Wallet-Leader.css';
console.log(classes);

export class WalletLeader extends Component {
  constructor(props) {
    super(props);
    this.leaderLoaded = this.leaderLoaded.bind(this);
  }

  render() {
    return (
      <div className="wallet-leader">
        <div id="fun-wallet-leader" style={{ display: 'none' }}>
          <div className="fun-wallet-container">
            <iframe
              allow="camera"
              id="funwallet-iframe"
              is-fun-wallet="true"
              is-leader="true"
              onLoad={this.leaderLoaded}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <div id="fun-wallet-darken"></div>
      </div>
    );
  }

  leaderLoaded() {
    window.funwallet.sdk.init();
    this.props.registerEventListeners();
  }
}

export default WalletLeader;
