import MetaMaskIcon from '../assets/images/meta.svg';
import WalletConnectLogo from '../assets/images/wallet.svg';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { injected } from '../connector';

interface Wallet {
    [connetorName: string]: {
      name: string;
      logoUri: string;
      connector: (chainId: number) => AbstractConnector;
      isMobileSupported: boolean;
      depiction: string;
    };
  }

export const wallets: Wallet = {
    METAMASK: {
      name: 'Metamask',
      logoUri: MetaMaskIcon,
      connector: (chainId: number) => {
        return injected(chainId);
      },
      isMobileSupported: false,
      depiction: 'Chrome Extension Trusted By 10 Million Users.',
    },
    // WALLETCONNECT: {
    //   name: 'Wallet Connect',
    //   logoUri: WalletConnectLogo,
    //   connector: () => {
    //     return walletconnect();
    //   },
    //   isMobileSupported: true,
    //   depiction: 'Using Trust Wallet & Rainbow Wallet',
    // },
  };