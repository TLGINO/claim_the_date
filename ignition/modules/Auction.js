const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const AuctionModule = buildModule("AuctionModule", (m) => {
  const auction = m.contract("Auction");

  return { auction };
});

module.exports = AuctionModule;
