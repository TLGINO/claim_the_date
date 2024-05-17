#!/bin/sh

npx hardhat compile
npx hardhat test


npx hardhat ignition deploy ./ignition/modules/DateHandler.js --network localhost
# yarn hardhat node



