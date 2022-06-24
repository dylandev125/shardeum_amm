import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { shardeumRPC } from '../constants/chain';

export const injected = (chainId : number) => {
    return new InjectedConnector({
      supportedChainIds: [chainId],
    });
};

// export const walletconnect = () => {
//   return new WalletConnectConnector({
//     rpc: {
//       3: shardeumRPC
//     },
//     bridge: "https://relay.bridge.walletconnect.org",
//     qrcode: true,
//     supportedChainIds: [3],
//   });
// };
