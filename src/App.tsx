import { useMemo } from "react";
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    getPhantomWallet,
} from '@solana/wallet-adapter-wallets';
import { ReactNotifications } from 'react-notifications-component'
import { clusterApiUrl } from '@solana/web3.js';
import {WalletConnect} from './wallet'
import Page from './pages/Page'
import './bootstrap.min.css';
import '@solana/wallet-adapter-react-ui/styles.css';
import 'react-notifications-component/dist/theme.css'
export default function App(){
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [getPhantomWallet()], []);
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div>
            <WalletConnect />
          </div>
          <ReactNotifications />
          <Page/>  
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );  
}