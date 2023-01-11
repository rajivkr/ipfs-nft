import { Alchemy, Network } from 'alchemy-sdk';

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: 'U8dccNpxYm6NTWss-nJuHgvYfA6NHW-C', // Replace with your Alchemy API Key.
  network: Network.MATIC_MUMBAI, // Replace with your network.
};

const alchemy = new Alchemy(settings);

// Access standard Ethers.js JSON-RPC node request
alchemy.core.getBlockNumber().then(console.log);

// Access Alchemy Enhanced API requests
alchemy.core
  .getTokenBalances('0x648c9535eAA85D8a6859E82A5C47aFd93D8D3663')
  .then(console.log);

const getNFTs = async () => {
  // Print total NFT count returned in the response:
  const nftsForOwner = await alchemy.nft.getNftsForOwner(
    '0x648c9535eAA85D8a6859E82A5C47aFd93D8D3663'
  );
  console.log('number of NFTs found:', nftsForOwner.totalCount);
};

getNFTs().then(() => {
  console.log('...');
});
