// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage{
  using Counters for Counters.Counter;

  Counters.Counter private token_id;
  address contractAddress; 

  constructor(address marketAddress) ERC721("Meta Token","MET"){
    contractAddress = marketAddress;
  }

// most projects store their metadata off-chain simply due to the current storage limitations of the Ethereum blockchain. The ERC721 standard, therefore, includes a method called  tokenURI that developers can implement to tell applications where to find the metadata for a given item.
  function createNFT(string memory tokenURI) public returns (uint){
     token_id.increment();
     uint newtoken_id = token_id;  //set new tokenID
     _mint(msg.sender, newtoken_id); //mint nft
     _setTokenURI(newtoken_id,tokenURI); //set the tokenURI
     setApprovalForAll(contractAddress,true);  //Give approval to contract to transact this token b/w users
     return newtoken_id; //to have access to this token from client side like to sell.
  }
}

