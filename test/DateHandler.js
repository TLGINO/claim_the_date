const { expect } = require("chai");

describe("Date contract", function () {
  it("temp", async function () {
    // const [owner] = await ethers.getSigners();

    const contract = await ethers.deployContract("DateHandler");
    let res = await contract.test();
    console.log(res);
    expect(true);
  });
});
