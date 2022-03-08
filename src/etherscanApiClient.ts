import { EtherscanProvider } from "@ethersproject/providers";
import { JsonFragment } from "@ethersproject/abi";

/** Returns a smart contract ABI */
export default class EtherscanApiClient {
  etherscanProvider: EtherscanProvider;

  constructor() {
    this.etherscanProvider = new EtherscanProvider(
      { name: "homestead", chainId: 1 },
      "ETHERSCAN_API_KEY"
    );
  }

  async abi(contractAddress: string): Promise<ReadonlyArray<JsonFragment>> {
    console.log(
      "Fetching Etherscan contract ABI for address=" + contractAddress
    );
    const contract = await this.etherscanProvider.fetch("contract", {
      action: "getabi",
      address: contractAddress,
    });
    return JSON.parse(contract);
  }
}
