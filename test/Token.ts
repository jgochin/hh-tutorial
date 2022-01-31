import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Contract, ContractFactory } from "ethers";

describe("Token contract", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const allSigners: SignerWithAddress[] = await ethers.getSigners();
        const owner: SignerWithAddress = allSigners[0]
        const Token: ContractFactory = await ethers.getContractFactory("Token");
        const hardhatToken: Contract = await Token.deploy();
        const ownerBalance: Number = await hardhatToken.balanceOf(owner.address);
       
        console.log(allSigners.map((signer: SignerWithAddress): string => signer.address))
        
        expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
    });
});