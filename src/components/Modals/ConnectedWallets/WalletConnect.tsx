import { WalletAggregator } from '@polkadot-onboard/core';
import { InjectedWalletProvider } from '@polkadot-onboard/injected-wallets';
import { WalletConnectProvider } from '@polkadot-onboard/wallet-connect';
import { PolkadotWalletsContextProvider } from '@polkadot-onboard/react';

const APP_NAME = 'Polkadot wallets example';

export const WalletConnect = () => {
    const walletConnectParams = {
        projectId: '4fae...',
        relayUrl: 'wss://relay.walletconnect.com',
        metadata: {
        name: 'Polkadot Demo',
        description: 'Polkadot Demo',
        url: '#',
        icons: ['https://walletconnect.com/walletconnect-logo.png'],
        },
    };
    const walletAggregator = new WalletAggregator([
            new InjectedWalletProvider({}, APP_NAME),
            new WalletConnectProvider(walletConnectParams, APP_NAME)
    ]);
    return (
        <PolkadotWalletsContextProvider walletAggregator={walletAggregator}>
        {/*
        all wallets are available inside this context to all children.

        const { wallets } = useWallets();

        each wallet provides a universal interface including a signer that can be used to sign messages and transactions:

        interface BaseWallet {
            ...
            signer: Signer | undefined; // signer is available after connect() is called.
            connect: () => Promise<void>;
            disconnect: () => Promise<void>;
            isConnected: () => boolean;
            getAccounts: () => Promise<Account[]>;
            ...
        }
        */}
        </PolkadotWalletsContextProvider>
    )
  };