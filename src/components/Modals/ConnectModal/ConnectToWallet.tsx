import { BaseWallet } from '@polkadot-onboard/core';
import { memo } from 'react';
import { ModalBody, ModalHeader } from 'react-bootstrap';
import { styled } from 'styled-components';

import IconButton from '@buttons/IconButton.tsx';

import { CssFontSemiBoldL } from '@helpers/reusableStyles.ts';

import CrossIcon from '@images/icons/cross.svg';

import Wallet from './Wallet.tsx';
import { SLabel } from '@helpers/styledComponents.ts';

// import { WalletConnect } from '@modals/ConnectedWallets/WalletConnect.tsx';
// import { ConnectWallet } from '@modals/ConnectedWallets/web3-wallet.tsx';
// import { BitcoinWallet } from '@modals/ConnectedWallets/BitcoinWallet.tsx';
// import ConnectLedger from '@modals/ConnectedWallets/ConnectLedger.tsx';
// import { Web3Wallet } from '@pages/MyAssets/walletconnect-monorepo-2.0/packages/web3wallet/src/client.ts';

const SModalTitle = styled(SLabel)`
  ${CssFontSemiBoldL}
  color: ${({ theme }) => theme.textAndIconsPrimary};
`;

const SButtons = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ConnectToWalletProps {
  handleClose: () => void;
  wallets: BaseWallet[];
  changeStep: () => void;
}
const ConnectToWallet = ({ handleClose , wallets, changeStep }: ConnectToWalletProps) => (
  <>
  {console.log(wallets)}
    <ModalHeader className='border-0'>
      <SModalTitle>Wallet Connect</SModalTitle>
      <IconButton icon={<CrossIcon />} action={handleClose} />
    </ModalHeader>
    <ModalBody>
      {/* {wallets.map((wallet: Web3Wallet | typeof ConnectWallet) => ( */}
      {wallets.map((wallet: BaseWallet, i) => (
        <>
        <Wallet key={i} wallet={wallet} changeStep={changeStep} />
        </>
      ))}
      <SButtons>
      {/* <ConnectWallet /> */}
      {/* <WalletConnect /> */}
      </SButtons>
    </ModalBody>
  </>
);

export default memo(ConnectToWallet);
