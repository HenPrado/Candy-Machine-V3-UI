import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Devnet) as WalletAdapterNetwork;
// const network = WalletAdapterNetwork.Devnet;
export const rpcHost =
  process.env.NEXT_PUBLIC_RPC_HOST || clusterApiUrl(network);

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "BoTegn3mBw4N7za92gh4a1Vw8TsfsFqN3DHpnVgspkLT"
);
export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined; // undefined means default

// "qasJ6jhgtngKk2QnEPdDjuFH8NMoM58W8TxPBXAChPY"
// "3zwFR3spiwbSSMtvVKG2bRT6ttqFoC3MHCafGP8ZrdLz"
// "DAA8yRLu7acVs3kxaTyCjoEjNWGinLaCKVhDY29ASNua"

export const whitelistedWallets = [
  "Ca4nThDNqMu97hQB8d8BqyWpgiXZ4cc8Ce5VZpBJyiap",
  "CadTASoC6RhoVdeAdtwPosxP98ckA5wfqeAVzXHAWv6o",
  "CaKgtPNk9dovmAoRpLdMAzMEVnWrbmCSgtPCJsnNWSR1",
  "CanXVuPs1sADQUvww5AH6MwLUX2aj56jqZCn6mLVG5mt",
  "CaoMfrdfCW1mEyceAni89bBhtrMUzSKBv8UyWbuwNrc2",
  "CaRKVg46wjWauuoNTPqsuwU867gUnHoPFcw7KoX8uTYt",
  "CaTnRpFfieRE8yRJNvdZaNQh33KhwFRjjV4WCFP6E73a",
  "CayisaNwAcMmBHvoUznHo92rzdxMUDj7BdYFyU32KXgg",
  "CazxpNFm3bmZe5pyeqh9RAWJeYSN9qEKzN4shSLZZHQd",
];
