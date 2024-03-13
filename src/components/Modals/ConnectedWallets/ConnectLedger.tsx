import React, { useCallback, useState } from 'react';
import { Button } from '@material-ui/core';
import { useWalletConnect } from '@walletconnect/react';
import { styled } from 'styled-components';

const ConnectButton = styled(Button)`
  /* Add your styled-components styles here */
`;

const WalletConnectButton: React.FC = () => {
  const { connect, connected, accounts } = useWalletConnect();
  const [connecting, setConnecting] = useState(false);

  const handleConnectWallet = useCallback(async () => {
    setConnecting(true);

    try {
      if (!connected) {
        await connect();
      }

      // Access the connected accounts
      console.log('Connected Accounts:', accounts);

      // Additional logic to use the connected accounts as needed

      setConnecting(false);
    } catch (error) {
      console.error('Error connecting wallet:', error);
      setConnecting(false);
    }
  }, [connect, connected, accounts]);

  return (
    <ConnectButton
      variant="contained"
      color="primary"
      onClick={handleConnectWallet}
      disabled={connecting || connected}
    >
      {connecting ? 'Connecting...' : connected ? 'Connected' : 'Connect Wallet'}
    </ConnectButton>
  );
};

export default WalletConnectButton;
