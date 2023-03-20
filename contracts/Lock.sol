// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Pass3Manager {
    struct Pair {
        string user;
        string password;
    }
    mapping(address => Pair) private credentials;

    function save_pair(Pair memory _pair) public {
        credentials[msg.sender] = _pair;
    }
}
