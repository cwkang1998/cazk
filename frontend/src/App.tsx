
import Home from './pages/Home';
import Mint from './pages/Verify';
import Header from './comp/Header/Header';

import React, { Suspense, useEffect } from 'react';
import {  Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Verify from './pages/Verify';
const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: 'process.env.ALCHEMY_ID' }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

const App = () => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {/* <ConnectButton /> */}
        <Suspense fallback={null}>
          <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/proof" element={<Home />}>
            </Route>
            <Route path="/verify" element={<Verify />}>
            </Route>
            <Route path="/" element={<Navigate to="/proof" />} />
            
          </Routes>
          </BrowserRouter>
        </Suspense>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
