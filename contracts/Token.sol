pragma solidity >=0.6.0 <0.8.0;
// pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// ERC721 Doc => https://eips.ethereum.org/EIPS/eip-721

contract HouseItem is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    // mapping(string => uint8) hashes;

    constructor() public ERC721("DrHouse", "DRH") {}

    /**
    - address variable is the person’s wallet address who will receive the NFT
    - tokenURI variable should refer to a link to the JSON metadata for the asset.
    Metadata: 
    Title: Free tires with a purchase of a frame 
    Name: Free tires with a purchase of a frame 
    Description: This card can be redeemed at bobs bike store for free tires
    whenever you purchase a complete frame as well. 
    Transfer the token to the address listed on bobsbikestore.com 
    to redeem with your order 
    URL: Link to redeem 
    Image: Image of coupon 
    …. You can add up to 20 extra fields so whatever information you want can go here
    */
    function generateToken(address supplier, string memory tokenURI)
        public
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(supplier, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}

// function totalSupply() public view returns (uint256);
// function balanceOf(address tokenOwner) public view returns (uint);
// function allowance(address tokenOwner, address spender)
// public view returns (uint);
// function transfer(address to, uint tokens) public returns (bool);
// function approve(address spender, uint tokens)  public returns (bool);
// function transferFrom(address from, address to, uint tokens) public returns (bool);
