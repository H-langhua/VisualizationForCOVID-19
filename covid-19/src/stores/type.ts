export interface ShowAddSwitch {
	nowConfirm: boolean;
	nowSevere: boolean;
	importedCase: boolean;
	localinfeciton: boolean;
	all: boolean;
	heal: boolean;
	dead: boolean;
	noInfect: boolean;
	localConfirm: boolean;
	confirm: boolean;
	suspect: boolean;
}

export interface Total {
	nowConfirm: number;
	heal: number;
	provinceLocalConfirm: number;
	mtime: string;
	adcode: string;
	confirm: number;
	dead: number;
	mediumRiskAreaNum: number;
	continueDayZeroLocalConfirmAdd: number;
	showRate: boolean;
	showHeal: boolean;
	wzz: number;
	highRiskAreaNum: number;
	continueDayZeroLocalConfirm: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	tip: string;
	wzz_add: number;
	local_confirm_add: number;
	abroad_confirm_add: number;
	dead_add: number;
}

export interface Total {
	mediumRiskAreaNum: number;
	continueDayZeroConfirm: number;
	mtime: string;
	showRate: boolean;
	heal: number;
	provinceLocalConfirm: number;
	nowConfirm: number;
	dead: number;
	showHeal: boolean;
	wzz: number;
	highRiskAreaNum: number;
	adcode: string;
	confirm: number;
	continueDayZeroConfirmAdd: number;
	continueDayZeroLocalConfirmAdd: number;
}

export interface Today {
	confirm: number;
	confirmCuts: number;
	isUpdated: boolean;
	wzz_add: string;
	local_confirm_add: number;
}

export interface Total {
	nowConfirm: number;
	dead: number;
	provinceLocalConfirm: number;
	mtime: string;
	heal: number;
	wzz: number;
	highRiskAreaNum: number;
	showRate: boolean;
	continueDayZeroLocalConfirmAdd: number;
	continueDayZeroLocalConfirm: number;
	confirm: number;
	showHeal: boolean;
	mediumRiskAreaNum: number;
	adcode: string;
}

export interface Children {
	adcode: string;
	date: string;
	today: Today;
	total: Total;
	name: string;
}

export interface Children {
	name: string;
	adcode: string;
	date: string;
	today: Today;
	total: Total;
	children: Children[];
}

export interface Today {
	isUpdated: boolean;
	confirm: number;
}

export interface AreaTree {
	total: Total;
	children: Children[];
	name: string;
	today: Today;
}

export interface ChinaTotal {
	highRiskAreaNum: number;
	localConfirm: number;
	suspect: number;
	showLocalConfirm: number;
	showlocalinfeciton: number;
	noInfectH5: number;
	mediumRiskAreaNum: number;
	nowLocalWzz: number;
	mtime: string;
	localConfirmAdd: number;
	nowSevere: number;
	importedCase: number;
	noInfect: number;
	local_acc_confirm: number;
	localWzzAdd: number;
	confirm: number;
	heal: number;
	nowConfirm: number;
	mRiskTime: string;
	dead: number;
	localConfirmH5: number;
	confirmAdd: number;
	deadAdd: number;
}

export interface ChinaAdd {
	heal: number;
	dead: number;
	suspect: number;
	importedCase: number;
	noInfectH5: number;
	confirm: number;
	nowConfirm: number;
	nowSevere: number;
	noInfect: number;
	localConfirm: number;
	localConfirmH5: number;
}

export interface Diseaseh5Shelf {
	showAddSwitch: ShowAddSwitch;
	areaTree: AreaTree[];
	lastUpdateTime: string;
	chinaTotal: ChinaTotal;
	chinaAdd: ChinaAdd;
	isShowAdd: boolean;
}

export interface LocalCityNCOVDataList {
	province: string;
	city: string;
	date: string;
	mtime: string;
	local_confirm_add: number;
	mediumRiskAreaNum: number;
	highRiskAreaNum: number;
	adcode: string;
	isUpdated: boolean;
	local_wzz_add: string;
	isSpecialCity: boolean;
}

export interface RootObject {
	diseaseh5Shelf: Diseaseh5Shelf;
	localCityNCOVDataList: LocalCityNCOVDataList[];
}