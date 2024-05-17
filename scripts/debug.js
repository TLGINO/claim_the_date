async function main() {
  let contract = await ethers.deployContract("Auction");
  await contract.claimDate();
  await contract.claimDate();

  //   console.log("HERE", result);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
