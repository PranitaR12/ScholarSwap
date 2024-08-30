// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./Counters.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract MarketplaceContract is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;

    address payable public owner;
    uint256 public listingFee = 0.01 ether; // Example fee

    struct MarketItem {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;

    event MarketItemCreated(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    constructor() {
        owner = payable(msg.sender);
    }

    function listNFT(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) public payable nonReentrant {
        require(price > 0, "Price must be above zero");
        require(msg.value == listingFee, "Must pay listing fee");

        _itemIds.increment();
        uint256 itemId = _itemIds.current();

        idToMarketItem[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            payable(msg.sender),
            payable(address(0)),
            price,
            false
        );

        IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);

        emit MarketItemCreated(
            itemId,
            nftContract,
            tokenId,
            msg.sender,
            address(0),
            price,
            false
        );
    }

    function buyNFT(address nftContract, uint256 itemId) public payable nonReentrant {
        MarketItem storage item = idToMarketItem[itemId];
        require(msg.value == item.price, "Incorrect price");
        require(!item.sold, "Item already sold");

        item.seller.transfer(msg.value);
        IERC721(nftContract).transferFrom(address(this), msg.sender, item.tokenId);

        item.owner = payable(msg.sender);
        item.sold = true;
        _itemsSold.increment();
    }

    function getListingFee() public view returns (uint256) {
        return listingFee;
    }

    function getItem(uint256 itemId) public view returns (MarketItem memory) {
        return idToMarketItem[itemId];
    }
}