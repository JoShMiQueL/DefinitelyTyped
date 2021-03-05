// Type definitions for Gamedig 3.0
// Project: https://github.com/sonicsnes/node-gamedig
// Definitions by: Ivan Sieder <https://github.com/ivansieder>
//                 Marco Vockner <https://github.com/marcopixel>
//                 Pascal Sthamer <https://github.com/p4sca1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Type =
    '7d2d'
    | 'ageofchivalry'
    | 'alienarena'
    | 'alienswarm'
    | 'americasarmy'
    | 'americasarmy2'
    | 'americasarmy3'
    | 'americasarmypg'
    | 'aoe2'
    | 'arcasimracing'
    | 'arkse'
    | 'arma'
    | 'arma2'
    | 'arma2oa'
    | 'arma3'
    | 'armacwa'
    | 'armagetron'
    | 'armar'
    | 'assettocorsa'
    | 'atlas'
    | 'avp2'
    | 'avp2010'
    | 'baldursgate'
    | 'bat1944'
    | 'bf1942'
    | 'bf2'
    | 'bf2142'
    | 'bf3'
    | 'bf4'
    | 'bfbc2'
    | 'bfh'
    | 'bfv'
    | 'breach'
    | 'breed'
    | 'brink'
    | 'buildandshoot'
    | 'cacrenegade'
    | 'callofjuarez'
    | 'chaser'
    | 'chrome'
    | 'cod'
    | 'cod2'
    | 'cod3'
    | 'cod4'
    | 'codenameeagle'
    | 'codmw2'
    | 'codmw3'
    | 'coduo'
    | 'codwaw'
    | 'commandos3'
    | 'conanexiles'
    | 'contactjack'
    | 'contagion'
    | 'crossracing'
    | 'crysis'
    | 'crysis2'
    | 'crysiswars'
    | 'cs15'
    | 'cs16'
    | 'cs2d'
    | 'cscz'
    | 'csgo'
    | 'css'
    | 'daikatana'
    | 'darkesthour'
    | 'daysofwar'
    | 'dayz'
    | 'dayzmod'
    | 'deadlydozenpt'
    | 'descent3'
    | 'deusex'
    | 'devastation'
    | 'dh2005'
    | 'dinodday'
    | 'dirttrackracing2'
    | 'dmomam'
    | 'dnl'
    | 'dod'
    | 'dods'
    | 'doi'
    | 'doom3'
    | 'dota2'
    | 'drakan'
    | 'empyrion'
    | 'etqw'
    | 'f12002'
    | 'f1c9902'
    | 'farcry'
    | 'farcry2'
    | 'fear'
    | 'ffow'
    | 'fivem'
    | 'flashpoint'
    | 'flashpointresistance'
    | 'forrest'
    | 'fortressforever'
    | 'garrysmod'
    | 'geneshift'
    | 'ges'
    | 'giantscitizenkabuto'
    | 'globaloperations'
    | 'gore'
    | 'graw'
    | 'graw2'
    | 'gunmanchronicles'
    | 'had2'
    | 'halo'
    | 'halo2'
    | 'heretic2'
    | 'hexen2'
    | 'hidden'
    | 'hl2dm'
    | 'hldm'
    | 'hldms'
    | 'hll'
    | 'homefront'
    | 'homeworld2'
    | 'hurtworld'
    | 'igi2'
    | 'il2'
    | 'insurgency'
    | 'insurgencysandstorm'
    | 'ironstorm'
    | 'jamesbondnightfire'
    | 'jc2mp'
    | 'jc3mp'
    | 'killingfloor'
    | 'killingfloor2'
    | 'kingpin'
    | 'kisspc'
    | 'kspdmp'
    | 'kzmod'
    | 'left4dead'
    | 'left4dead2'
    | 'm2mp'
    | 'm2o'
    | 'medievalengineers'
    | 'minecraft'
    | 'minecraftbe'
    | 'minecraftpe'
    | 'minecraftping'
    | 'mnc'
    | 'moh2010'
    | 'mohaa'
    | 'mohab'
    | 'mohbt'
    | 'mohpa'
    | 'mohsh'
    | 'mohwf'
    | 'mordhau'
    | 'mtasa'
    | 'mtavc'
    | 'mumble'
    | 'mumbleping'
    | 'mutantfactions'
    | 'nab'
    | 'nascarthunder2004'
    | 'netpanzer'
    | 'nexuiz'
    | 'nfshp2'
    | 'nitrofamily'
    | 'nmrih'
    | 'nolf'
    | 'nolf2'
    | 'ns'
    | 'ns2'
    | 'nucleardawn'
    | 'nwn'
    | 'nwn2'
    | 'openarena'
    | 'openttd'
    | 'operationflashpoint'
    | 'painkiller'
    | 'pixark'
    | 'postal2'
    | 'prbf2'
    | 'prey'
    | 'primalcarnage'
    | 'quake1'
    | 'quake2'
    | 'quake3'
    | 'quake4'
    | 'quakelive'
    | 'r6'
    | 'r6ravenshield'
    | 'r6roguespear'
    | 'ragdollkungfu'
    | 'rallisportchallenge'
    | 'rallymasters'
    | 'redline'
    | 'redorchestra'
    | 'redorchestra2'
    | 'redorchestraost'
    | 'rfactor'
    | 'ricochet'
    | 'riseofnations'
    | 'rs2'
    | 'rtcw'
    | 'rune'
    | 'rust'
    | 'samp'
    | 'shatteredhorizon'
    | 'ship'
    | 'shogo'
    | 'shootmania'
    | 'sin'
    | 'sinep'
    | 'sof'
    | 'sof2'
    | 'soldat'
    | 'spaceengineers'
    | 'squad'
    | 'ss'
    | 'ss2'
    | 'stalker'
    | 'starbound'
    | 'starmade'
    | 'starsiege'
    | 'stbc'
    | 'stvef'
    | 'stvef2'
    | 'suicidesurvival'
    | 'svencoop'
    | 'swat4'
    | 'swbf'
    | 'swbf2'
    | 'swjk'
    | 'swjk2'
    | 'swrc'
    | 'synergy'
    | 'tacticalops'
    | 'takeonhelicopters'
    | 'teamfactor'
    | 'teamspeak2'
    | 'teamspeak3'
    | 'terminus'
    | 'terraria'
    | 'tf2'
    | 'tfc'
    | 'thps3'
    | 'thps4'
    | 'thu2'
    | 'towerunite'
    | 'trackmania2'
    | 'trackmaniaforever'
    | 'tremulous'
    | 'tribes1'
    | 'tribesvengeance'
    | 'tron20'
    | 'tshock'
    | 'turok2'
    | 'universalcombat'
    | 'unreal'
    | 'unturned'
    | 'urbanterror'
    | 'ut'
    | 'ut2003'
    | 'ut2004'
    | 'ut3'
    | 'v8supercar'
    | 'valheim'
    | 'vcmp'
    | 'ventrilo'
    | 'vietcong'
    | 'vietcong2'
    | 'warsow'
    | 'wheeloftime'
    | 'wolfenstein2009'
    | 'wolfensteinet'
    | 'xpandrally'
    | 'zombiemaster'
    | 'zps';

export interface Player {
    name?: string;
    ping?: number;
    score?: number;
    team?: string;
    address?: string;
}

export interface QueryOptions {
    type: Type;
    host: string;
    port?: number;
    maxAttempts?: number;
    socketTimeout?: number;
    attemptTimeout?: number;
    givenPortOnly?: boolean;
    debug?: boolean;
    requestRules?: boolean;
}

export interface QueryResult {
    name: string;
    map: string;
    password: boolean;
    maxplayers: number;
    players: Player[];
    bots: Player[];
    connect: string;
    ping: number;
    raw?: object;
}

export function query(options: QueryOptions, callback: (error: any, state: QueryResult) => void): void;

export function query(options: QueryOptions): Promise<QueryResult>;
