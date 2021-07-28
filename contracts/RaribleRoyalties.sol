// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract RaribleRoyalites is IRaribleRoyalites {
    /*
     * bytes4(keccak256('getRoyalties(LibAsset.AssetType)')) == 0x44c74bcc
     */
    bytes4 constant _INTERFACE_ID_ROYALTIES = 0x44c74bcc;
}