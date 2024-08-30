// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTContract is ERC721, ERC721Burnable, Ownable {
    uint256 public nextTokenId;
    string private _baseTokenURI;

    
    constructor(string memory baseTokenURI) ERC721("EduchainNFT", "ENFT") Ownable(msg.sender) {
    _baseTokenURI = baseTokenURI;
    }


    function mint(address to) external onlyOwner {
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string memory baseTokenURI) external onlyOwner {
        _baseTokenURI = baseTokenURI;
    }
}
