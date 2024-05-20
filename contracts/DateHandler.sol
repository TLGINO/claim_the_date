pragma solidity ^0.8.0;

import "hardhat/console.sol";
contract DateHandler{

    mapping(address => uint256[]) public ownerAddrToDay;
    uint256 lastDateClaimed = block.timestamp;

    function claimDate() public {
        uint256 currentDay = block.timestamp / 86400; // (60*60*24);
        require(currentDay != lastDateClaimed, "Someone has already claimed today's date.");
        lastDateClaimed = currentDay;
        ownerAddrToDay[msg.sender].push(currentDay);
    }

    function getDatesOwned() public view returns (uint256[] memory) {
        return ownerAddrToDay[msg.sender];
    }
    
    function getDatesForAddress(address _of) public view returns (uint256[] memory) {
        return ownerAddrToDay[_of];
    }

    


}