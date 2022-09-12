//Import createPandoraExpressSDK from SDK
const { createPandoraExpressSDK } = require("pandora-express");
const pandoraSDK = createPandoraExpressSDK();

//Connecting with Metamask wallet.
const init = async () => {
  //check if metamask is present
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
    console.log("Connected");
  } else {
    alert("Metamask not found");
  }
};
mintNft = async () => {
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await pandoraSDK.erc721.nft.mint(web3, chainId, accounts[0], itemURI.value, [
    [accounts[0], 100],
  ]);
};
dropNft = async () => {
  const accounts = await web3.eth.getAccounts();
  const chainId = await web3.eth.net.getId();
  console.log(chainId);
  await pandoraSDK.erc721.order.transferNFT(
    web3,
    chainId,
    accounts[0],
    dropItemToAddress.value,
    dropItemTokenId.value
  );
};
const itemURI = document.getElementById("txtCreateItemURI");

const createItemButton = document.getElementById("btnCreateItem");
createItemButton.onclick = mintNft;

const dropItemToAddress = document.getElementById("txtDropItemToAddress");
const dropItemTokenId = document.getElementById("numDropItemTokenId");

const dropItemButton = document.getElementById("btnDropItem");
dropItemButton.onclick = dropNft;

init();
