import ContractABICache from "./contractAbiCache";

(async function () {
  const address = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d";
  const contractAbiCache = new ContractABICache();
  const abi = await contractAbiCache.get(address);
  console.log(abi);
})();
