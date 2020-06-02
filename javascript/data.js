var data = {
	defaultLang: "en",
	langItem: lang["en"],
	lang: lang,
	menu: false,
	ethBalance: "--",
	tokenBalance: "--",
	playerID: "",
	day:0,
	sendError1: false,
	sendError2: false,
	sendError3: false,
	copySuccess: false,
	balanceError: false,
	countError:false,
	quitError: false,
	ingError: false,
	lowerError: false,
	quotaError:false,
	atkBalanceError:false,
	minCount:false,
	canPlay: false,
	recommendError: false,
	futureRule:false,
	luckRule:false,
	topRule:false,
	direcRule:false,
	directPop: false,
	groupPop: false,
	langList: {
		en: "English",
		cn: "中文（繁体）",
	},
	buyToken: {
		ethRatio: "--",
		ethNumber: 1,
		layer: 0,
		pid: null,
		address: null,
		tokenCount:0,
		quoat:"--",
		todayQuoat:0,
		
	},
	gameData: {
		bonusPool: "--",
		totalTimes: "--",
		myTimes: "--",
		isWin: 0,
		investNumber: 10,
	},
	financial: {
		joinDays: 10,
		quantity: 500,
		count:0,
		record: [],
	},
	tabData: {
		tokenItem: "buy",
		ecologyItem: "join",
		investCount: [2,6,10,20,30,40,50,100],
		days: [10, 20, 30],
	},
	income: {
		staticRatio:"--",
		unsettled: {
			eth:"--",
			atk:"--"
		},
		settled: {
			eth:"--",
			atk:"--"
		},
		gameReward:{
			eth:"--",
			atk:"--"
		},
		statics: {
			eth:"--",
			atk:"--"
		},
		luck:"--",
		dynamic: {
			eth:"--",
			atk:"--",
			detail:{
				tillage:"--",
			    merit: "--",
			    nodeIncome:"--",
			},
			invitation:"--",
		},
		
		inviting:[],
		recent:"--",
		limit: 0
	},
	team: {
		direct: {
			nodes: "--",
			invest: "--",
			financial:"--",
		},
		group: {
			nodes: "--",
			largeArea:"--",
			smallArea: "--",
		},
	},
	statistics:{
		tokenSales:"--",
		burnDown:"--",
		primary:"--",
		middle:"--",
		senior:"--",
		capital:"--"
	},
	otherData: {
		grade: 0,
		superNode:0,
		nextStage: 0,
		a5Node: 0,
	},
	web3: null,
	web3Provider: null,
	contracts: {},
	pid: 0,

	isPlay: true,
	investAccount: 0,
	investTime:0,
	account: null,
	lastInvest: 0,
	blockTime:0,
	timeId: {
		"scoundDown": null,
		"show": null
	},
	whitePaper:"",
	video:"",

}