const { expect } = require("chai");
const { ethers, hardhat } = require("hardhat");
describe("Deploy Gas Challenge Contract", () => {
  let gas_contract;

  beforeEach(async () => {
    const GasChallenge = await ethers.getContractFactory("gasChallenge");
    gas_contract = await GasChallenge.deploy();
    await gas_contract.deployed();
  });

  describe("Compute Gas", () => {
    it("Should return lower gas", async () => {
      await gas_contract.notOptimizedFunction();
      await gas_contract.optimizedFunction();
    });
  });

  describe("Check Sum Of Array", () => {
    it("Should return 0", async () => {
      await gas_contract.optimizedFunction();
      const sum = await gas_contract.getSumOfArray();
      expect(sum).to.equal(0);
    });
  });
});
