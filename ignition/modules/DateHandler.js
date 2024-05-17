const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const DateModule = buildModule("DateModule", (m) => {
  const date = m.contract("DateHandler");

  return { date };
});

module.exports = DateModule;
