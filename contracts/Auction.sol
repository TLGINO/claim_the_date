pragma solidity ^0.8.0;

import "./DateHandler.sol";
contract Auction is DateHandler{

    // maps a day to a price
    mapping(uint256 => uint256) public dateToPrice;
    mapping(uint256 => address) public dateToOwner;



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
        dateToPrice[_date] = _price;
        dateToOwner[_date] = msg.sender;
    }

    function buyDate(uint256 _date) payable public {
        // Buy a date

        require(dateToPrice[_date] != 0, "Can only bid on an available date.");
        require(msg.value > dateToPrice[_date], "Insufficent funds sent to buy date.");

        
        // send funds to seller
        address currentOwner = dateToOwner[_date];
        payable(currentOwner).transfer(msg.value);

        // remove seller ownership
        uint256 length = ownerAddrToDay[currentOwner].length;
        for (uint256 i = 0; i < length; i++){
            if (ownerAddrToDay[currentOwner][i] == _date) {
                if (i < length -1){
                    // replace with last date if not last position
                    ownerAddrToDay[currentOwner][i]= ownerAddrToDay[currentOwner][length -1];
                }
                // if is last position or was val to remove was already replaced, remove
                ownerAddrToDay[currentOwner].pop();
            }
        }

        // set buyer ownership
        ownerAddrToDay[msg.sender].push(_date); // change date ownership
    }
    function test() public pure returns (string memory) {
        return "hello";
    }
}