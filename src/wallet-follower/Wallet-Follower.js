import React, { Component } from 'react';
import classes from './Wallet-Follower.css';
console.log(classes);

export class WalletFollower extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const url = window.funwallet.getWalletFollowerURL();

    return (
      <iframe
        style={{ width: 'inherit' }}
        id="fun-wallet-follower"
        src={url}
        onLoad={this.followerLoaded}
        is-fun-wallet="true"
        is-follower="true"
        frameBorder="0"
      ></iframe>
    );
  }

  async followerLoaded() {
    await window.funwallet.sdk.registerFollowerInstance();
  }
}

export default WalletFollower;
