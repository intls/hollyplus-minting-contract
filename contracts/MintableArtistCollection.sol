// SPDX-License-Identifier: GPL-v3


/**

╔╗      ╔╗ ╔╗          ╔╗         
║║      ║║ ║║          ║║         
║╚═╗╔══╗║║ ║║ ╔╗ ╔╗╔══╗║║ ╔╗╔╗╔══╗
║╔╗║║╔╗║║║ ║║ ║║ ║║║╔╗║║║ ║║║║║══╣
║║║║║╚╝║║╚╗║╚╗║╚═╝║║╚╝║║╚╗║╚╝║╠══║
╚╝╚╝╚══╝╚═╝╚═╝╚═╗╔╝║╔═╝╚═╝╚══╝╚══╝
              ╔═╝║ ║║             
              ╚══╝ ╚╝             



*/

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./ERC2981.sol";


/**
 * ERC721 token contract, including:
 *
 *  - ability for holders to burn (destroy) their tokens
 *  - a minter role that allows for token minting (creation)
 *  - integration into royalty standards
 *
 * This contract uses {AccessControl} to lock permissioned functions using the
 * different roles - head to its documentation for details.
 *
 * The account that deploys the contract will be granted the minter and admin
 * roles, as well as the default admin role.
 */
contract MintableArtistCollection is
    Context,
    AccessControl,
    ERC721Enumerable,
    ERC2981,
    ERC721Burnable
{
    using Counters for Counters.Counter;
    event URIBaseUpdated(string);
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    Counters.Counter private _tokenIdTracker;
    string private _ipfsGatewayURL;
    struct TokenInfo {
        string metadataCID;
        string contentCID;
    }
    mapping(uint256 => TokenInfo) private tokenInfo;

    /**
     * @dev Grants `DEFAULT_ADMIN_ROLE`, `MINTER_ROLE` and `PAUSER_ROLE` to the
     * account that deploys the contract.
     *
     * Token URIs will be autogenerated based on `baseURI` and their token IDs.
     * See {ERC721-tokenURI}.
     */
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        _ipfsGatewayURL = "ipfs://";

        // start at token 1 not 0
        _tokenIdTracker.increment();

        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(MINTER_ROLE, _msgSender());
    }

    function setIPFSBaseURI(string memory newURI)
        public
        onlyRole(DEFAULT_ADMIN_ROLE)
    {
        _ipfsGatewayURL = newURI;
        emit URIBaseUpdated(newURI);
    }

    function getIPFSCIDs(uint256 tokenId) public view returns (string memory, string memory) {
        TokenInfo memory tokenData = tokenInfo[tokenId];
        return (tokenData.metadataCID, tokenData.contentCID);
    }

    /**
     * @dev Creates a new token for `to`. Its token ID will be automatically
     * assigned (and available on the emitted {IERC721-Transfer} event), and the token
     * URI autogenerated based on the base URI passed at construction.
     *
     * See {ERC721-_mint}.
     *
     * Requirements:
     *
     * - the caller must have the `MINTER_ROLE`.
     */
    function mint(
        address to,
        string memory metadataCID,
        string memory contentCID,
        address royaltyReciever,
        uint256 royaltyBPS
    ) public onlyRole(MINTER_ROLE) {
        // We cannot just use balanceOf to create the new tokenId because tokens
        // can be burned (destroyed), so we need a separate counter.
        _mint(to, _tokenIdTracker.current());
        tokenInfo[_tokenIdTracker.current()] = TokenInfo({
            metadataCID: metadataCID,
            contentCID: contentCID
        });
        _setRoyaltyForToken((_tokenIdTracker.current()), royaltyReciever, royaltyBPS);
        _tokenIdTracker.increment();
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        return
            string(abi.encodePacked(_ipfsGatewayURL, tokenInfo[tokenId].metadataCID));
    }

    // Needed to call multiple supers.
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    // Needed to call multiple supers.
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(AccessControl, ERC721, ERC721Enumerable, ERC2981)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}