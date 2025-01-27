import { InjectedConnector as MetaMask } from "@web3-react/injected-connector";
import { NetworkConnector as Network } from "@web3-react/network-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { LedgerConnector } from "@web3-react/ledger-connector";
import { TrezorConnector } from "@web3-react/trezor-connector";
import { FrameConnector } from "@web3-react/frame-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";
import { MagicConnector } from "@web3-react/magic-connector";
import { PortisConnector } from "@web3-react/portis-connector";
import { TorusConnector } from "@web3-react/torus-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS: { [chainId: number]: string } = {
  // 1: process.env.REACT_APP_RPC_URL_1 as string,
  // 4: process.env.NEXT_PUBLIC_REACT_APP_RPC_URL_4 as string,
  // 42: process.env.REACT_APP_RPC_URL_42 as string,
  137: process.env.REACT_APP_RPC_URL_137 as string,
};

export const injected = new MetaMask({
  supportedChainIds: [4, 1337, 137, 31337],
});

export const network = new Network({
  urls: { 137: RPC_URLS[137] },
  defaultChainId: 137,
});

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[137] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
  supportedChainIds: [1, 42, 137],
});

export const walletlink = new WalletLinkConnector({
  url: process.env.REACT_APP_RPC_URL_137 as string,
  appName: "opolis",
});

export const ledger = new LedgerConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
});

export const trezor = new TrezorConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: "dummy@abc.xyz",
  manifestAppUrl: "http://localhost:1234",
});

export const frame = new FrameConnector({ supportedChainIds: [1] });

export const fortmatic = new FortmaticConnector({
  apiKey: process.env.WALLET_FORTMATIC_API as string,
  chainId: 42,
});

export const magic = new MagicConnector({
  apiKey: process.env.WALLET_MAGIC_API as string,
  chainId: 4,
  email: "hello@example.org",
});

export const portis = new PortisConnector({
  dAppId: process.env.REACT_APP_PORTIS_ID as string,
  networks: [1, 100],
});

export const torus = new TorusConnector({ chainId: 1 });
