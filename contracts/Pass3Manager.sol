// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

contract Pass3Manager {
    struct Pair {
        string user;
        string password;
    }
    mapping(address => mapping(string => Pair)) private credentials;

    function save_pair(Pair memory _pair, string memory url) public {
        credentials[msg.sender][url] = _pair;
    }


    function get_creds(string memory url) public view returns (Pair memory) {
        return credentials[msg.sender][url];
    }
    
}
