async function main() {
  let contract = await ethers.deployContract("Auction");
  await contract.claimDate();
  let datesOwned = await contract.getDatesOwned();
  console.log(datesOwned);

  await contract.sellDate(datesOwned[0], 1);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
