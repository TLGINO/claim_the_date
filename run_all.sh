#!/bin/sh

npx hardhat compile
npx hardhat test


npx hardhat ignition deploy ./ignition/modules/DateHandler.js --network localhost
npx hardhat ignition deploy ./ignition/modules/Auction.js --network localhost
# yarn hardhat node



