const ERC721_ADDRESS = "0xe3fF0115e61FAE4C1Ad54bcCDd96daAcf8Df4A3B";
const STAKING_ADDRESS = "0xFF25BF343f025Ade974BE02443f3ebA552030EaD";

const ABI_ERC721 = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseExtension",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "safeMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];

const ABI_STAKING = [
	{
		"inputs": [
			{
				"internalType": "contract ERC721_Mignons",
				"name": "_nft",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "NFTStaked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "NFTUnstaked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "stake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "tokenIds",
				"type": "uint256[]"
			}
		],
		"name": "unstakeMany",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "getStakingTime",
		"outputs": [
			{
				"internalType": "uint48",
				"name": "",
				"type": "uint48"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "staking",
		"outputs": [
			{
				"internalType": "uint24",
				"name": "tokenId",
				"type": "uint24"
			},
			{
				"internalType": "uint48",
				"name": "stakingStartTime",
				"type": "uint48"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "tokensIDsOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalStaked",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

window.ethereum.on("accountsChanged", () => {
    window.location.reload();
})

window.ethereum.on("chainChanged", () =>{
    window.location.reload();
})

window.ethereum.on("disconnect",()=> {
    window.location.reload();
})  

async function connectWallet()
{
    if(window.ethereum !== 'undefined')
    {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		let accounts = await provider.send("eth_requestAccounts", []);
		const signer = await provider.getSigner();
		let account = accounts[0];

        let bouton = document.getElementById("bouton");
        bouton.textContent = accounts[0];
        bouton.style.width = "140px";
		bouton.removeAttribute("onclick");

		displayNftAllOfOwner(account,provider);
		displayNftUnstakedOfowner(account,provider);
		displayNftStakedOfOwner(account,provider);
		displayOwnerInfo(account,provider);
	}
    else
    {
		document.getElementById("bouton").style.width = "140px";
		document.getElementById("bouton").textContent = "Please install metamask";
    }
}

//associer a chaque bloc nft son tokenID
async function displayNftAllOfOwner(account,provider)
{
	document.getElementById("txt_connect_your_wallet_inventory_1").remove();
	const erc721Contract = new ethers.Contract(ERC721_ADDRESS,ABI_ERC721,provider);
	let nbUnstaked = parseInt((await erc721Contract.balanceOf(account)).toString());

	for(let i=0; i<nbUnstaked;i++) 
    {
		let baseIPFS = "https://ipfs.io/ipfs/QmeMWVdBAR3Y61SwKJVLqhfsDMmtPMimqAa7LgDVAvxxR9/image";
        let currentTokenId = (await erc721Contract.tokenOfOwnerByIndex(account,i)).toString();
        
        let bloc_nft = document.createElement("div");
        bloc_nft.classList.add("nft_bloc");

        let nft_div_img = document.createElement("div");
        nft_div_img.classList.add("nft_div_img");

        let img = document.createElement("img");
        img.src = baseIPFS + currentTokenId.toString() +".jpg";

        let div_titre_nft = document.createElement("div")
        div_titre_nft.classList.add("div_titre_nft");
        
        let bande1 = document.createElement("div")
        bande1.classList.add("bande");

        let bande2 = document.createElement("div")
        bande1.classList.add("bande");

        let titreNFT = document.createElement("h3");
        titreNFT.textContent = "Minion #" + currentTokenId.toString();

        let p = document.createElement("p");
        p.classList.add("nft_description");
        p.textContent = "Description_NFT";

        let stake_btn = document.createElement("div");
        stake_btn.classList.add("stake_btn");
        stake_btn.textContent = "Stake";
		stake_btn.setAttribute("onclick","stakeItem("+currentTokenId+")");	

        //Ajout des éléments créés au DOM dans le bon ordre
        document.getElementById("inventory").append(bloc_nft);
        bloc_nft.append(nft_div_img);
        nft_div_img.append(img);
        bloc_nft.append(div_titre_nft);
        div_titre_nft.append(bande1);
        div_titre_nft.append(titreNFT);
        div_titre_nft.append(bande2);
        bloc_nft.append(p);
        bloc_nft.append(stake_btn);
    }

	const stakingContract = new ethers.Contract(STAKING_ADDRESS,ABI_STAKING,provider);
	let nbStaked = parseInt((await stakingContract.balanceOf(account)).toString());
	let tabIDs = await stakingContract.tokensIDsOfOwner(account);

	for(let i=0; i<nbStaked;i++) 
    {
		let baseIPFS = "https://ipfs.io/ipfs/QmeMWVdBAR3Y61SwKJVLqhfsDMmtPMimqAa7LgDVAvxxR9/image";
        let currentTokenId = tabIDs[i];
        
        let bloc_nft = document.createElement("div");
        bloc_nft.classList.add("nft_bloc");

        let nft_div_img = document.createElement("div");
        nft_div_img.classList.add("nft_div_img");

        let img = document.createElement("img");
        img.src = baseIPFS + currentTokenId.toString() +".jpg";

        let div_titre_nft = document.createElement("div");
        div_titre_nft.classList.add("div_titre_nft");
        
        let bande1 = document.createElement("div");
        bande1.classList.add("bande");

        let bande2 = document.createElement("div");
        bande1.classList.add("bande");

        let titreNFT = document.createElement("h3");
        titreNFT.textContent = "Minion #" + currentTokenId.toString();

        let p = document.createElement("p");
        p.classList.add("nft_description");
        p.textContent = "Description_NFT";

        let unstake_btn = document.createElement("div");
        unstake_btn.classList.add("unstake_btn");
        unstake_btn.textContent = "Unstake";
		unstake_btn.setAttribute("onclick","unstakeItem("+currentTokenId+")");	

        //Ajout des éléments créés au DOM dans le bon ordre
        document.getElementById("inventory").append(bloc_nft);
        bloc_nft.append(nft_div_img);
        nft_div_img.append(img);
        bloc_nft.append(div_titre_nft);
        div_titre_nft.append(bande1);
        div_titre_nft.append(titreNFT);
        div_titre_nft.append(bande2);
        bloc_nft.append(p);
		bloc_nft.append(unstake_btn);
    }
}
//associer a chaque bloc nft son tokenID
async function displayNftStakedOfOwner(account,provider)
{
	document.getElementById("txt_connect_your_wallet_inventory_2").remove();
	const stakingContract = new ethers.Contract(STAKING_ADDRESS,ABI_STAKING,provider);
	let nbStaked = parseInt((await stakingContract.balanceOf(account)).toString());
	let tabIDs = await stakingContract.tokensIDsOfOwner(account);

	for(let i=0; i<nbStaked;i++) 
    {
		let baseIPFS = "https://ipfs.io/ipfs/QmeMWVdBAR3Y61SwKJVLqhfsDMmtPMimqAa7LgDVAvxxR9/image";
        let currentTokenId = tabIDs[i];
        
        let bloc_nft = document.createElement("div");
        bloc_nft.classList.add("nft_bloc");

        let nft_div_img = document.createElement("div");
        nft_div_img.classList.add("nft_div_img");

        let img = document.createElement("img");
        img.src = baseIPFS + currentTokenId.toString() +".jpg";

        let div_titre_nft = document.createElement("div");
        div_titre_nft.classList.add("div_titre_nft");
        
        let bande1 = document.createElement("div");
        bande1.classList.add("bande");

        let bande2 = document.createElement("div");
        bande1.classList.add("bande");

        let titreNFT = document.createElement("h3");
        titreNFT.textContent = "Minion #" + currentTokenId.toString();

        let p = document.createElement("p");
        p.classList.add("nft_description");
        p.textContent = "Description_NFT";

        let unstake_btn = document.createElement("div");
        unstake_btn.classList.add("unstake_btn");
        unstake_btn.textContent = "Unstake";
		unstake_btn.setAttribute("onclick","unstakeItem("+currentTokenId+")");	

        //Ajout des éléments créés au DOM dans le bon ordre
        document.getElementById("inventory_2").append(bloc_nft);
        bloc_nft.append(nft_div_img);
        nft_div_img.append(img);
        bloc_nft.append(div_titre_nft);
        div_titre_nft.append(bande1);
        div_titre_nft.append(titreNFT);
        div_titre_nft.append(bande2);
        bloc_nft.append(p);
		bloc_nft.append(unstake_btn);
    }
}
//associer a chaque bloc nft son tokenID
async function displayNftUnstakedOfowner(account,provider)
{
	document.getElementById("txt_connect_your_wallet_inventory_3").remove();
	const erc721Contract = new ethers.Contract(ERC721_ADDRESS,ABI_ERC721,provider);
	let nbUnstaked = parseInt((await erc721Contract.balanceOf(account)).toString());

	for(let i=0; i<nbUnstaked;i++) 
    {
		let baseIPFS = "https://ipfs.io/ipfs/QmeMWVdBAR3Y61SwKJVLqhfsDMmtPMimqAa7LgDVAvxxR9/image";
        let currentTokenId = (await erc721Contract.tokenOfOwnerByIndex(account,i)).toString();
        
        let bloc_nft = document.createElement("div");
        bloc_nft.classList.add("nft_bloc");

        let nft_div_img = document.createElement("div");
        nft_div_img.classList.add("nft_div_img");

        let img = document.createElement("img");
        img.src = baseIPFS + currentTokenId.toString() +".jpg";

        let div_titre_nft = document.createElement("div")
        div_titre_nft.classList.add("div_titre_nft");
        
        let bande1 = document.createElement("div")
        bande1.classList.add("bande");

        let bande2 = document.createElement("div")
        bande1.classList.add("bande");

        let titreNFT = document.createElement("h3");
        titreNFT.textContent = "Minion #" + currentTokenId.toString();

        let p = document.createElement("p");
        p.classList.add("nft_description");
        p.textContent = "Description_NFT";

        let stake_btn = document.createElement("div");
        stake_btn.classList.add("stake_btn");
        stake_btn.textContent = "Stake";
		stake_btn.setAttribute("onclick","stakeItem("+currentTokenId+")");	

        //Ajout des éléments créés au DOM dans le bon ordre
        document.getElementById("inventory_3").append(bloc_nft);
        bloc_nft.append(nft_div_img);
        nft_div_img.append(img);
        bloc_nft.append(div_titre_nft);
        div_titre_nft.append(bande1);
        div_titre_nft.append(titreNFT);
        div_titre_nft.append(bande2);
        bloc_nft.append(p);
        bloc_nft.append(stake_btn);
    }
}

async function displayOwnerInfo(account,provider)
{
	const stakingContract = new ethers.Contract(STAKING_ADDRESS,ABI_STAKING,provider);  //obliger de convertir à cause de big number
	let StringNbStaked = (await stakingContract.balanceOf(account)).toString();	
	document.getElementById("nbStaked").textContent = StringNbStaked;

	let StringTotalTimeStaked = (await stakingContract.getStakingTime(account)).toString();	
	document.getElementById("totalTimeStaked").textContent = StringTotalTimeStaked;

	//Supprimer le txt "connect your wallet to see your info" et rend visible les infos
	document.getElementById("txt_connect_your_wallet_info").remove();
	document.getElementById("carroussel_info_bloc1").style.display = "flex";

	let xp = (parseInt(StringTotalTimeStaked)/500).toFixed(3);
	document.getElementById("xp").textContent = xp.toString() + "/10 000";
}

async function stakeItem(tokenID)
{
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = await provider.getSigner();
	const stakingContract = new ethers.Contract(STAKING_ADDRESS,ABI_STAKING,signer);
	await stakingContract.stake([tokenID]);
	// + message d'info comme quoi la transac sur la blockchain n'est pas instantanée et que c'est normal que l'item n'apparaisse pas dans "staked tout de suite"
}

async function unstakeItem(tokenID)
{
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = await provider.getSigner();
	let accounts = await provider.send("eth_requestAccounts", []);
	const account = accounts[0];
	const stakingContract = new ethers.Contract(STAKING_ADDRESS,ABI_STAKING,signer);
	await stakingContract.unstakeMany(account,[tokenID]);
	// + message d'info comme quoi la transac sur la blockchain n'est pas instantanée et que c'est normal que l'item n'apparaisse pas dans "staked tout de suite"
}

function bouton_info_transition_gauche()
{
	let blocLeft = document.getElementById("bloc1_partie1");
	let blocRight = document.getElementById("bloc1_partie2");

	blocLeft.style.left = "-100%";
	blocRight.style.left = "-100%";

	let bouton = document.getElementById("bouton_info");
	bouton.style.left = "30px";
	bouton.setAttribute("onclick","bouton_info_transition_droite()");	
}	

function bouton_info_transition_droite()
{
	let blocLeft = document.getElementById("bloc1_partie1");
	let blocRight = document.getElementById("bloc1_partie2");

	blocLeft.style.left = "0px";
	blocRight.style.left = "0px";

	let bouton = document.getElementById("bouton_info");
	bouton.style.left = "2px";
	bouton.setAttribute("onclick","bouton_info_transition_gauche()");
}

function bouton_inventory_transition_All()
{	
	let bouton_bg = document.getElementById("bouton_bg");
	let inventory_bloc1 = document.getElementById("inventory");
	let inventory_bloc2 = document.getElementById("inventory_2");
	let inventory_bloc3 = document.getElementById("inventory_3");

	bouton_bg.style.left =  "1.2%";
	inventory_bloc1.style.left = "0%";
	inventory_bloc2.style.left = "0%";
	inventory_bloc3.style.left = "0%";
}

function bouton_inventory_transition_Staked()
{
	let bouton_bg = document.getElementById("bouton_bg");
	let inventory_bloc1 = document.getElementById("inventory");
	let inventory_bloc2 = document.getElementById("inventory_2");
	let inventory_bloc3 = document.getElementById("inventory_3");

	bouton_bg.style.left =  "34.7%";	
	inventory_bloc1.style.left = "-100%";
	inventory_bloc2.style.left = "-100%";
	inventory_bloc3.style.left = "-100%";
}

function bouton_inventory_transition_Unstaked()
{
	let bouton_bg = document.getElementById("bouton_bg");
	let inventory_bloc1 = document.getElementById("inventory");
	let inventory_bloc2 = document.getElementById("inventory_2");
	let inventory_bloc3 = document.getElementById("inventory_3");

	bouton_bg.style.left =  "69%";
	inventory_bloc1.style.left = "-200%";
	inventory_bloc2.style.left = "-200%";
	inventory_bloc3.style.left = "-200%";
}

/*
const provider = new ethers.providers.Web3Provider(window.ethereum);
const account = "0xe8E882Be9B98486b5e0eEd96CE39BAE619969bA2";

*/