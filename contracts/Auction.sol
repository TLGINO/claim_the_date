pragma solidity ^0.8.0;

import "./DateHandler.sol";
contract Auction is DateHandler{

    // maps a day to a price
    mapping(uint256 => uint256) public dayToPrice;
    mapping(uint256 => address) public dayToOwner;



    function sellDate(uint256 _date, uint256 _price) public {
        // Sell a date for a price.
        // Note: the seller can change the price whenever by calling this function again.
        require(_price > 0, "Price needs to be set to more than 0.");

        bool senderHasDate = false;
        for (uint256 i = 0; i < ownerAddrToDay[msg.sender].length; i++){
            if (ownerAddrToDay[msg.sender][i] == _date){
                senderHasDate = true;
                break;
            }
        }
        require(senderHasDate, "Only the sender can sell this date.");
        dayToPrice[_date] = _price;
        dayToOwner[_date] = msg.sender;
    }

    function buyDate(uint256 _date) payable public {
        // Buy a date

        require(dayToPrice[_date] != 0, "Can only bid on an available date.");
        require(msg.value > dayToPrice[_date], "Insufficent funds sent to buy date.");

        address currentOwner = dayToOwner[_date];
        // [TODO] remove from current owner, proving to be more difficult than planned - arrays in solidity suck

        address payable to = payable(dayToOwner[_date]);
        to.transfer(msg.value); // send funds

        ownerAddrToDay[msg.sender].push(_date); // change date ownership
        

    }

}