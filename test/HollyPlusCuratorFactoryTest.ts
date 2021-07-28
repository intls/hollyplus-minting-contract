import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { deployments, ethers } from "hardhat";

import type { HollyPlusCuratorFactory, Weth, MintableArtistCollection } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("MintableArtistCollection", () => {
  let mintableArtistInstance: MintableArtistCollection;
  let signer: SignerWithAddress;
  let signerAddress: string;

  beforeEach(async () => {
    await deployments.fixture(["MintableArtistCollection"]);
    const deployment = await deployments.get("MintableArtistCollection");
    mintableArtistInstance = (await ethers.getContractAt(
      "MintableArtistCollection",
      deployment.address,
      signer
    )) as MintableArtistCollection;
    signer = (await ethers.getSigners())[0];
    signerAddress = await signer.getAddress();
  });

  describe("minting", () => {
    let signer1: SignerWithAddress;
    let signer1Address: string;
    beforeEach(async () => {
      signer1 = (await ethers.getSigners())[1];
      signer1Address = await signer1.getAddress();
    });

    it("creates a NFT", async () => {
      await mintableArtistInstance.mint(
        signer1Address,
        "CID_TEST_METADATA",
        "CID_TEST_CONTENT",
        signer1Address,
        1000 // 10% on resale
      );

      const owner = await mintableArtistInstance.ownerOf(1);
      expect(owner).to.be.equal(signer1Address);

      const tokenURI = await mintableArtistInstance.tokenURI(1);
      expect(tokenURI).to.equal("ipfs://CID_TEST_METADATA");
    });
    it("allows base url updates from owner", async () => {
      await mintableArtistInstance.mint(
        signer1Address,
        "CID_TEST_METADATA",
        "CID_TEST_CONTENT",
        signer1Address,
        1000 // 10% on resale
      );

      const owner = await mintableArtistInstance.ownerOf(1);
      expect(owner).to.be.equal(signer1Address);

      const tokenURI = await mintableArtistInstance.tokenURI(1);
      expect(tokenURI).to.equal("ipfs://CID_TEST_METADATA");

      expect(
        await mintableArtistInstance.setIPFSBaseURI("https://ipfs.io/ipfs/")
      ).to.emit(mintableArtistInstance, "URIBaseUpdated");
      expect(await mintableArtistInstance.tokenURI(1)).to.equal(
        "https://ipfs.io/ipfs/CID_TEST_METADATA"
      );
    });
    it("does not allow non-creators to mint an nft", async () => {
      await expect(
        mintableArtistInstance.connect(signer1).mint(
          signer1Address,
          "CID_TEST_METADATA",
          "CID_TEST_CONTENT",
          signer1Address,
          1000 // 10% on resale
        )
      ).to.be.revertedWith(
        `AccessControl: account ${signer1Address.toLowerCase()} is missing role 0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6`
      );
    });
  });
});
