var tunedto;
var tuned;

const notes = ["C1", "C&sharp;1", "D1", "D&sharp;1", "E1", "F1", "F&sharp;1", "G1", "G&sharp;1", "A1", "A&sharp;1", "B1", "C2", "C&sharp;2", "D2", "D&sharp;2", "E2", "F2", "F&sharp;2", "G2", "G&sharp;2", "A2", "A&sharp;2", "B2", "C3", "C&sharp;3", "D3", "D&sharp;3", "E3", "F3", "F&sharp;3", "G3", "G&sharp;3", "A3", "A&sharp;3", "B3", "C4", "C&sharp;4", "D4", "D&sharp;4", "E4", "F4", "F&sharp;4", "G4", "G&sharp;4", "A4", "A&sharp;4", "B4", "C5", "C&sharp;5", "D5", "D&sharp;5", "E5", "F5", "F&sharp;5", "G5", "G&sharp;5", "A5", "A&sharp;5", "B5", "C6", "C&sharp;6", "D6", "D&sharp;6", "E6", "F6", "F&sharp;6", "G6", "G&sharp;6", "A6", "A&sharp6"];

const notes_ = ["C", "C&sharp;", "D", "D&sharp;", "E", "F", "F&sharp;", "G", "G&sharp;", "A", "A&sharp;", "B", "C", "C&sharp;", "D", "D&sharp;", "E", "F", "F&sharp;", "G", "G&sharp;", "A", "A&sharp;", "B", "C", "C&sharp;", "D", "D&sharp;", "E", "F", "F&sharp;", "G", "G&sharp;", "A", "A&sharp;", "B", "C", "C&sharp;", "D", "D&sharp;", "E", "F", "F&sharp;", "G", "G&sharp;", "A", "A&sharp;", "B", "C", "C&sharp;", "D", "D&sharp;", "E", "F", "F&sharp;", "G", "G&sharp;", "A", "A&sharp;", "B", "C", "C&sharp;", "D", "D&sharp;", "E", "F", "F&sharp;", "G", "G&sharp;", "A", "A&sharp;"];

const tstd = [41, 36, 32, 27, 22, 17];
const tdgd = [39, 34, 32, 27, 22, 15];
const tuna = [34, 29, 25, 20, 15, 10];
const tuas = [35, 30, 26, 21, 16, 11];
const tas7 = [39, 34, 27, 23, 18, 11];
const tfif = [48, 41, 34, 27, 20, 13];
const tffa = [43, 36, 29, 22, 15, 8];
const tfrt = [42, 37, 20, 27, 22, 17];
const tas2 = [41, 34, 29, 24, 22, 17];
const tas4 = [41, 34, 29, 27, 22, 17];
const tagf = [43, 37, 31, 25, 19, 13];
const tafa = [42, 36, 30, 24, 18, 12];
const tunb = [36, 31, 27, 22, 17, 12];
const tba4 = [41, 36, 31, 28, 24, 17];
const tba9 = [40, 36, 31, 26, 19, 12];
const tb9a = [39, 36, 31, 26, 19, 12];
const tblk = [34, 29, 29, 27, 22, 17];
const tbfl = [47, 32, 28, 23, 18, 11];
const tbpm = [41, 36, 29, 29, 17, 17];
const tbs4 = [36, 31, 29, 24, 19, 12];
const tunc = [37, 32, 28, 23, 18, 13];
const tucs = [38, 33, 29, 24, 19, 14];
const tcs4 = [38, 33, 31, 26, 21, 14];
const tuc6 = [41, 37, 32, 25, 22, 13];
const tu69 = [39, 34, 29, 25, 20, 13];
const tclo = [41, 36, 34, 27, 20, 13];
const tctr = [44, 37, 32, 25, 20, 13];
const tcm4 = [40, 37, 32, 25, 18, 13];
const tc11 = [41, 36, 32, 25, 18, 13];
const tcnv = [37, 33, 30, 25, 20, 13];
const tcva = [37, 34, 31, 25, 19, 13];
const tcra = [41, 37, 34, 29, 22, 17];
const tcaa = [41, 34, 29, 25, 22, 17];
const tca2 = [34, 29, 22, 17, 10, 5];
const tcrc = [40,37,32,25,20,13];
const tcca = [32,28,25,20,13,13];
const tcc2 = [33,28,25,20,13,13];
const tcrd = [39,34,30,27,22,15];
const tcda = [42,39,34,27,22,15];
const tcre = [41,36,32,29,24,17];
const tcrf = [42,37,30,25,21,18];
const tcfa = [42,37,33,30,25,18];
const tcrg = [39,35,32,27,20,15];
const tcs2 = [39,37,32,25,20,13];
const tcu4 = [37,32,30,25,20,13];
const tc49 = [39,37,30,25,20,13];
const tund = [39,34,30,25,20,15];
const tdsm = [40,35,31,28,21,18];
const tud6 = [39,36,31,27,22,15];
const tud7 = [37,34,31,27,22,15];
const tddd = [39,34,27,27,22,15];
const tud9 = [41,34,31,27,22,15];
const tdg1 = [38,33,31,26,21,14];
const tdg2 = [37,32,30,25,20,13];
const tdg3 = [36,31,29,24,19,12];
const tdg4 = [35,30,28,23,18,11];
const tdg5 = [41,34,29,27,22,15];
const tdg6 = [34,32,27,25,20,13];
const tdg7 = [39,34,34,27,22,15];
const tda9 = [41,34,30,27,22,15];
const tdm7 = [37,34,30,27,22,15];
const tdm9 = [41,37,30,27,22,15];
const tdj7 = [38,34,31,27,22,15];
const tdbr = [39,36,32,27,24,20];
const tu2a = [34,31,27,22,17,10];
const t2as = [35,32,28,23,18,11];
const tu2b = [36,33,29,24,19,12];
const tu2c = [37,34,30,25,20,13];
const t2cs = [38,35,31,26,21,14];
const tu2d = [39,36,32,27,22,15];
const t2ds = [28,25,21,16,11,4];
const t2d1 = [27,24,20,15,10,3];
const tu2e = [29,26,22,17,12,5];
const tu2f = [30,27,23,18,13,6];
const t2fs = [31,28,24,19,14,7];
const tu2g = [32,29,25,20,15,8];
const t2gs = [33,30,26,21,16,9];
const tdro = [41,36,29,24,17,12];
const tdra = [36,31,27,22,17,10];
const tand = [39,34,30,25,20,10];
const tdat = [41,36,32,27,22,10];
const tdas = [37,32,28,23,18,11];
const tdrb = [38,33,29,24,19,12];
const tdba = [41,36,32,27,22,12];
const tdb2 = [40,35,31,26,21,11];
const tdbe = [41,36,32,27,17,12];
const tdrc = [39,34,30,25,20,13];
const tdca = [41,36,32,27,22,13];
const tdcs = [40,35,31,26,21,14];
const trca = [41,36,32,27,22,14];
const tdc1 = [27,22,18,13,8,1];
const tdrd = [41,36,32,27,22,15];
const tdds = [30,25,21,16,11,4];
const tdd1 = [29,24,20,15,10,3];
const tdre = [31,26,22,17,12,5];
const tdrf = [32,27,23,18,13,6];
const tdfs = [33,28,24,19,14,7];
const tdrg = [34,29,25,20,15,8];
const tgnc = [37,32,28,23,18,8];
const tdgs = [35,30,26,21,16,9];
const tds2 = [39,34,29,27,22,15];
const temd = [41,36,29,29,24,17];
const tema = [48,36,36,36,17,17];
const te74 = [41,36,29,27,22,17];
const tdhf = [40,35,31,26,21,16];
const tete = [41,36,33,27,22,17];
const te11 = [39,34,32,27,24,17];
const tem7 = [41,36,32,27,20,13];
const tes2 = [41,36,31,29,24,17];
const tes4 = [41,36,34,29,24,17];
const te4a = [41,36,29,24,22,17];
const tunf = [30,25,21,16,11,6];
const tufs = [31,26,22,17,12,7];
const tfm9 = [41,37,32,25,22,18];
const tung = [32,27,23,18,13,8];
const tugs = [33,28,24,19,14,9];
const tug6 = [41,36,32,27,20,15];
const tug7 = [42,36,32,27,20,15];
const tga4 = [37,36,32,27,20,15];
const tgm7 = [39,36,31,27,20,15];
const tgs2 = [39,34,32,27,20,15];
const tgs4 = [39,37,32,27,20,15];
const tg4a = [39,37,32,27,25,20];
const tork = [39,37,32,27,20,13];
const tirs = [39,27,27,27,15,12];
const tjgz = [41,36,31,27,22,15];
const tknv = [41,36,32,24,19,12];
const tkva = [41,36,31,24,19,12];
const tlby = [41,37,32,27,22,17];
const tlwc = [39,34,32,27,20,13];
const tlut = [41,36,31,27,22,17];
const tmj2 = [35,33,31,29,27,25];
const tm2a = [36,34,32,30,28,26];
const tmj3 = [37,33,29,25,21,17];
const tm3a = [33,29,25,21,17,13];
const tmic = [41,36,32,39,22,17];
const tmn3 = [28,25,22,19,16,13];
const tmrt = [34,31,29,22,19,15];
const tnst = [44,41,34,27,20,13];
const tocv = [29,24,20,15,10,5];
const tupa = [41,34,29,26,22,17];
const tpaa = [38,34,29,22,17,10];
const tpa2 = [41,38,34,29,22,15];
const tpas = [41,38,34,29,22,17];
const tupb = [40,36,31,24,19,12];
const tpba = [40,36,31,28,24,19];
const tupc = [41,37,32,25,20,13];
const tpca = [32,29,25,20,17,13];
const tpc2 = [32,29,25,20,13,13];
const tupd = [39,34,31,27,22,15];
const tpda = [39,39,34,27,22,15];
const tpd2 = [38,33,30,26,21,14];
const tupe = [41,36,33,29,24,17];
const tpea = [41,36,29,24,21,17];
const tupf = [42,37,30,25,22,18];
const tpfa = [37,34,30,25,18,13];
const tfmr = [41,37,32,25,22,18];
const tpfs = [43,38,31,26,23,19];
const tfsa = [38,35,31,26,19,14];
const tpga = [39,36,32,27,20,20];
const tpsk = [39,36,32,27,24,20];
const tpg3 = [39,36,32,27,20,13];
const tupg = [39,36,32,27,20,15];
const topg = [39,37,32,25,20,15];
const tost = [41,41,29,29,17,17];
const tosa = [37,37,25,25,13,13];
const tute = [38,34,31,26,22,17];
const tsta = [35,31,26,21,14,9];
const tsal = [35,31,26,21,14,7];
const tdtl = [36,36,24,24,17,17];


const _c = [1, 13, 25, 37, 49];
const _c$ = [2, 14, 26, 38, 50];
const _d = [3, 15, 27, 39, 51];
const _d$ = [4, 16, 28, 40, 52];
const _e = [5, 17, 29, 41, 53];
const _f = [6, 18, 30, 42, 54];
const _f$ = [7, 19, 31, 43, 55];
const _g = [8, 20, 32, 44, 56];
const _g$ = [9, 21, 33, 45, 57];
const _a = [10, 22, 34, 46, 58];
const _a$ = [11, 23, 35, 47, 59];
const _b = [12, 24, 36, 48, 60];

let thisnote;

var f0s1, f0s2, f0s3, f0s4, f0s5, f0s6;
var f1s1, f1s2, f1s3, f1s4, f1s5, f1s6;
var f2s1, f2s2, f2s3, f2s4, f2s5, f2s6;
var f3s1, f3s2, f3s3, f3s4, f3s5, f3s6;
var f4s1, f4s2, f4s3, f4s4, f4s5, f4s6;
var f5s1, f5s2, f5s3, f5s4, f5s5, f5s6;
var f6s1, f6s2, f6s3, f6s4, f6s5, f6s6;
var f7s1, f7s2, f7s3, f7s4, f7s5, f7s6;
var f8s1, f8s2, f8s3, f8s4, f8s5, f8s6;
var f9s1, f9s2, f9s3, f9s4, f9s5, f9s6;
var f10s1, f10s2, f10s3, f10s4, f10s5, f10s6;
var f11s1, f11s2, f11s3, f11s4, f11s5, f11s6;
var f12s1, f12s2, f12s3, f12s4, f12s5, f12s6;
var f13s1, f13s2, f13s3, f13s4, f13s5, f13s6;
var f14s1, f14s2, f14s3, f14s4, f14s5, f14s6;
var f15s1, f15s2, f15s3, f15s4, f15s5, f15s6;
var f16s1, f16s2, f16s3, f16s4, f16s5, f16s6;
var f17s1, f17s2, f17s3, f17s4, f17s5, f17s6;
var f18s1, f18s2, f18s3, f18s4, f18s5, f18s6;

var open1, open2, open3, open4, open5, open6;

var chosenchord;
var chord;

var thischord;

var R, _2nd, _3rd, _4th, _5th, _6th, _7th, _b2nd, _b3rd, _b5th, _b6th, _b7th, _$7th;
var I, ii, iii, IV, V, vi, vii;


function sndForm(){
	tuned = document.getElementById("tuning");
	tunedto = tuned.options[tuned.selectedIndex].value;
	if (tunedto == "tstd"){tunedto = tstd}
	else if (tunedto == "tdgd"){tunedto = tdgd}
	else if (tunedto == "tuna"){tunedto = tuna}
	else if (tunedto == "tuas"){tunedto = tuas}
	else if (tunedto == "tas7"){tunedto = tas7}
	else if (tunedto == "tfif"){tunedto = tfif}
	else if (tunedto == "tffa"){tunedto = tffa}
	else if (tunedto == "tfrt"){tunedto = tfrt}
	else if (tunedto == "tas2"){tunedto = tas2}
	else if (tunedto == "tas4"){tunedto = tas4}
	else if (tunedto == "tagf"){tunedto = tagf}
	else if (tunedto == "tafa"){tunedto = tafa}
	else if (tunedto == "tunb"){tunedto = tunb}
	else if (tunedto == "tba4"){tunedto = tba4}
	else if (tunedto == "tba9"){tunedto = tba9}
	else if (tunedto == "tb9a"){tunedto = tb9a}
	else if (tunedto == "tblk"){tunedto = tblk}
	else if (tunedto == "tbfl"){tunedto = tbfl}
	else if (tunedto == "tbpm"){tunedto = tbpm}
	else if (tunedto == "tbs4"){tunedto = tbs4}
	else if (tunedto == "tunc"){tunedto = tunc}
	else if (tunedto == "tucs"){tunedto = tucs}
	else if (tunedto == "tcs4"){tunedto = tcs4}
	else if (tunedto == "tuc6"){tunedto = tuc6}
	else if (tunedto == "tu69"){tunedto = tu69}
	else if (tunedto == "tclo"){tunedto = tclo}
	else if (tunedto == "tctr"){tunedto = tctr}
	else if (tunedto == "tcm4"){tunedto = tcm4}
	else if (tunedto == "tc11"){tunedto = tc11}
	else if (tunedto == "tcnv"){tunedto = tcnv}
	else if (tunedto == "tcva"){tunedto = tcva}
	else if (tunedto == "tcra"){tunedto = tcra}
	else if (tunedto == "tcaa"){tunedto = tcaa}
	else if (tunedto == "tca2"){tunedto = tca2}
	else if (tunedto == "tcrc"){tunedto = tcrc}
	else if (tunedto == "tcca"){tunedto = tcca}
	else if (tunedto == "tcc2"){tunedto = tcc2}
	else if (tunedto == "tcrd"){tunedto = tcrd}
	else if (tunedto == "tcre"){tunedto = tcre}
	else if (tunedto == "tcrf"){tunedto = tcrf}
	else if (tunedto == "tcfa"){tunedto = tcfa}
	else if (tunedto == "tcrg"){tunedto = tcrg}
	else if (tunedto == "tcs2"){tunedto = tcs2}
	else if (tunedto == "tcu4"){tunedto = tcu4}
	else if (tunedto == "tc49"){tunedto = tc49}
	else if (tunedto == "tund"){tunedto = tund}
	else if (tunedto == "tdsm"){tunedto = tdsm}
	else if (tunedto == "tud6"){tunedto = tud6}
	else if (tunedto == "tud7"){tunedto = tud7}
	else if (tunedto == "tddd"){tunedto = tddd}
	else if (tunedto == "tud9"){tunedto = tud9}
	else if (tunedto == "tdg1"){tunedto = tdg1}
	else if (tunedto == "tdg2"){tunedto = tdg2}
	else if (tunedto == "tdg3"){tunedto = tdg3}
	else if (tunedto == "tdg4"){tunedto = tdg4}
	else if (tunedto == "tdg5"){tunedto = tdg5}
	else if (tunedto == "tdg6"){tunedto = tdg6}
	else if (tunedto == "tdg7"){tunedto = tdg7}
	else if (tunedto == "tda9"){tunedto = tda9}
	else if (tunedto == "tdm7"){tunedto = tdm7}
	else if (tunedto == "tdm9"){tunedto = tdm9}
	else if (tunedto == "tdj7"){tunedto = tdj7}
	else if (tunedto == "tdbr"){tunedto = tdbr}
	else if (tunedto == "tu2a"){tunedto = tu2a}
	else if (tunedto == "t2as"){tunedto = t2as}
	else if (tunedto == "tu2b"){tunedto = tu2b}
	else if (tunedto == "tu2c"){tunedto = tu2c}
	else if (tunedto == "t2cs"){tunedto = t2cs}
	else if (tunedto == "tu2d"){tunedto = tu2d}
	else if (tunedto == "t2ds"){tunedto = t2ds}
	else if (tunedto == "t2d1"){tunedto = t2d1}
	else if (tunedto == "tu2e"){tunedto = tu2e}
	else if (tunedto == "tu2f"){tunedto = tu2f}
	else if (tunedto == "t2fs"){tunedto = t2fs}
	else if (tunedto == "tu2g"){tunedto = tu2g}
	else if (tunedto == "t2gs"){tunedto = t2gs}
	else if (tunedto == "tdro"){tunedto = tdro}
	else if (tunedto == "tdra"){tunedto = tdra}
	else if (tunedto == "tand"){tunedto = tand}
	else if (tunedto == "tdat"){tunedto = tdat}
	else if (tunedto == "tdas"){tunedto = tdas}
	else if (tunedto == "tdrb"){tunedto = tdrb}
	else if (tunedto == "tdba"){tunedto = tdba}
	else if (tunedto == "tdbe"){tunedto = tdbe}
	else if (tunedto == "tdrc"){tunedto = tdrc}
	else if (tunedto == "tdca"){tunedto = tdca}
	else if (tunedto == "tdcs"){tunedto = tdcs}
	else if (tunedto == "trca"){tunedto = trca}
	else if (tunedto == "tdc1"){tunedto = tdc1}
	else if (tunedto == "tdrd"){tunedto = tdrd}
	else if (tunedto == "tdds"){tunedto = tdds}
	else if (tunedto == "tdd1"){tunedto = tdd1}
	else if (tunedto == "tdre"){tunedto = tdre}
	else if (tunedto == "tdrf"){tunedto = tdrf}
	else if (tunedto == "tdfs"){tunedto = tdfs}
	else if (tunedto == "tdrg"){tunedto = tdrg}
	else if (tunedto == "tgnc"){tunedto = tgnc}
	else if (tunedto == "tdgs"){tunedto = tdgs}
	else if (tunedto == "tds2"){tunedto = tds2}
	else if (tunedto == "temd"){tunedto = temd}
	else if (tunedto == "tema"){tunedto = tema}
	else if (tunedto == "tdhf"){tunedto = tdhf}
	else if (tunedto == "tete"){tunedto = tete}
	else if (tunedto == "te11"){tunedto = te11}
	else if (tunedto == "tem7"){tunedto = tem7}
	else if (tunedto == "tes2"){tunedto = tes2}
	else if (tunedto == "tes4"){tunedto = tes4}
	else if (tunedto == "te4a"){tunedto = te4a}
	else if (tunedto == "tunf"){tunedto = tunf}
	else if (tunedto == "tufs"){tunedto = tufs}
	else if (tunedto == "tfm9"){tunedto = tfm9}
	else if (tunedto == "tung"){tunedto = tung}
	else if (tunedto == "tugs"){tunedto = tugs}
	else if (tunedto == "tug6"){tunedto = tug6}
	else if (tunedto == "tug7"){tunedto = tug7}
	else if (tunedto == "tga4"){tunedto = tga4}
	else if (tunedto == "tgm7"){tunedto = tgm7}
	else if (tunedto == "tgs2"){tunedto = tgs2}
	else if (tunedto == "tgs4"){tunedto = tgs4}
	else if (tunedto == "tg4a"){tunedto = tg4a}
	else if (tunedto == "tork"){tunedto = tork}
	else if (tunedto == "tirs"){tunedto = tirs}
	else if (tunedto == "tjgz"){tunedto = tjgz}
	else if (tunedto == "tknv"){tunedto = tknv}
	else if (tunedto == "tkva"){tunedto = tkva}
	else if (tunedto == "tlby"){tunedto = tlby}
	else if (tunedto == "tlwc"){tunedto = tlwc}
	else if (tunedto == "tlut"){tunedto = tlut}
	else if (tunedto == "tmj2"){tunedto = tmj2}
	else if (tunedto == "tm2a"){tunedto = tm2a}
	else if (tunedto == "tmj3"){tunedto = tmj3}
	else if (tunedto == "tm3a"){tunedto = tm3a}
	else if (tunedto == "tmic"){tunedto = tmic}
	else if (tunedto == "tmn3"){tunedto = tmn3}
	else if (tunedto == "tmrt"){tunedto = tmrt}
	else if (tunedto == "tnst"){tunedto = tnst}
	else if (tunedto == "tupa"){tunedto = tupa}
	else if (tunedto == "tpaa"){tunedto = tpaa}
	else if (tunedto == "tpa2"){tunedto = tpa2}
	else if (tunedto == "tpas"){tunedto = tpas}
	else if (tunedto == "tupb"){tunedto = tupb}
	else if (tunedto == "tpba"){tunedto = tpba}
	else if (tunedto == "tupc"){tunedto = tupc}
	else if (tunedto == "tpca"){tunedto = tpca}
	else if (tunedto == "tpc2"){tunedto = tpc2}
	else if (tunedto == "tupd"){tunedto = tupd}
	else if (tunedto == "tpda"){tunedto = tpda}
	else if (tunedto == "tpd2"){tunedto = tpd2}
	else if (tunedto == "tupe"){tunedto = tupe}
	else if (tunedto == "tpea"){tunedto = tpea}
	else if (tunedto == "tupf"){tunedto = tupf}
	else if (tunedto == "tpfa"){tunedto = tpfa}
	else if (tunedto == "tfmr"){tunedto = tfmr}
	else if (tunedto == "tpfs"){tunedto = tpfs}
	else if (tunedto == "tfsa"){tunedto = tfsa}
	else if (tunedto == "tpga"){tunedto = tpga}
	else if (tunedto == "tpsk"){tunedto = tpsk}
	else if (tunedto == "tpg3"){tunedto = tpg3}
	else if (tunedto == "tupg"){tunedto = tupg}
	else if (tunedto == "topg"){tunedto = topg}
	else if (tunedto == "tost"){tunedto = tost}
	else if (tunedto == "tosa"){tunedto = tosa}
	else if (tunedto == "tute"){tunedto = tute}
	else if (tunedto == "tsta"){tunedto = tsta}
	else if (tunedto == "tsal"){tunedto = tsal}
	else if (tunedto == "tstd"){tunedto = tstd}
	else if (tunedto == "tdtl"){tunedto = tdtl}
	else if (tunedto == "tcda"){tunedto = tcda}
	else if (tunedto == "tdb2"){tunedto = tdb2}
	else if (tunedto == "tocv"){tunedto = tocv}
	else if (tunedto == "te74"){tunedto = te74}
	
	f0s1 = notes_.at(tunedto.at(0)-1);
	f0s2 = notes_.at(tunedto.at(1)-1);
	f0s3 = notes_.at(tunedto.at(2)-1);
	f0s4 = notes_.at(tunedto.at(3)-1);
	f0s5 = notes_.at(tunedto.at(4)-1);
	f0s6 = notes_.at(tunedto.at(5)-1);
	
	f1s1 = notes_.at(tunedto.at(0));
	f1s2 = notes_.at(tunedto.at(1));
	f1s3 = notes_.at(tunedto.at(2));
	f1s4 = notes_.at(tunedto.at(3));
	f1s5 = notes_.at(tunedto.at(4));
	f1s6 = notes_.at(tunedto.at(5));
	
	f2s1 = notes_.at(tunedto.at(0)+1);
	f2s2 = notes_.at(tunedto.at(1)+1);
	f2s3 = notes_.at(tunedto.at(2)+1);
	f2s4 = notes_.at(tunedto.at(3)+1);
	f2s5 = notes_.at(tunedto.at(4)+1);
	f2s6 = notes_.at(tunedto.at(5)+1);
	
	f3s1 = notes_.at(tunedto.at(0)+2);
	f3s2 = notes_.at(tunedto.at(1)+2);
	f3s3 = notes_.at(tunedto.at(2)+2);
	f3s4 = notes_.at(tunedto.at(3)+2);
	f3s5 = notes_.at(tunedto.at(4)+2);
	f3s6 = notes_.at(tunedto.at(5)+2);
	
	f4s1 = notes_.at(tunedto.at(0)+3);
	f4s2 = notes_.at(tunedto.at(1)+3);
	f4s3 = notes_.at(tunedto.at(2)+3);
	f4s4 = notes_.at(tunedto.at(3)+3);
	f4s5 = notes_.at(tunedto.at(4)+3);
	f4s6 = notes_.at(tunedto.at(5)+3);
	
	f5s1 = notes_.at(tunedto.at(0)+4);
	f5s2 = notes_.at(tunedto.at(1)+4);
	f5s3 = notes_.at(tunedto.at(2)+4);
	f5s4 = notes_.at(tunedto.at(3)+4);
	f5s5 = notes_.at(tunedto.at(4)+4);
	f5s6 = notes_.at(tunedto.at(5)+4);
	
	f6s1 = notes_.at(tunedto.at(0)+5);
	f6s2 = notes_.at(tunedto.at(1)+5);
	f6s3 = notes_.at(tunedto.at(2)+5);
	f6s4 = notes_.at(tunedto.at(3)+5);
	f6s5 = notes_.at(tunedto.at(4)+5);
	f6s6 = notes_.at(tunedto.at(5)+5);
	
	f7s1 = notes_.at(tunedto.at(0)+6);
	f7s2 = notes_.at(tunedto.at(1)+6);
	f7s3 = notes_.at(tunedto.at(2)+6);
	f7s4 = notes_.at(tunedto.at(3)+6);
	f7s5 = notes_.at(tunedto.at(4)+6);
	f7s6 = notes_.at(tunedto.at(5)+6);
	
	f8s1 = notes_.at(tunedto.at(0)+7);
	f8s2 = notes_.at(tunedto.at(1)+7);
	f8s3 = notes_.at(tunedto.at(2)+7);
	f8s4 = notes_.at(tunedto.at(3)+7);
	f8s5 = notes_.at(tunedto.at(4)+7);
	f8s6 = notes_.at(tunedto.at(5)+7);
	
	f9s1 = notes_.at(tunedto.at(0)+8);
	f9s2 = notes_.at(tunedto.at(1)+8);
	f9s3 = notes_.at(tunedto.at(2)+8);
	f9s4 = notes_.at(tunedto.at(3)+8);
	f9s5 = notes_.at(tunedto.at(4)+8);
	f9s6 = notes_.at(tunedto.at(5)+8);
	
	f10s1 = notes_.at(tunedto.at(0)+9);
	f10s2 = notes_.at(tunedto.at(1)+9);
	f10s3 = notes_.at(tunedto.at(2)+9);
	f10s4 = notes_.at(tunedto.at(3)+9);
	f10s5 = notes_.at(tunedto.at(4)+9);
	f10s6 = notes_.at(tunedto.at(5)+9);
	
	f11s1 = notes_.at(tunedto.at(0)+10);
	f11s2 = notes_.at(tunedto.at(1)+10);
	f11s3 = notes_.at(tunedto.at(2)+10);
	f11s4 = notes_.at(tunedto.at(3)+10);
	f11s5 = notes_.at(tunedto.at(4)+10);
	f11s6 = notes_.at(tunedto.at(5)+10);
	
	f12s1 = notes_.at(tunedto.at(0)+11);
	f12s2 = notes_.at(tunedto.at(1)+11);
	f12s3 = notes_.at(tunedto.at(2)+11);
	f12s4 = notes_.at(tunedto.at(3)+11);
	f12s5 = notes_.at(tunedto.at(4)+11);
	f12s6 = notes_.at(tunedto.at(5)+11);
	
	f13s1 = notes_.at(tunedto.at(0)+12);
	f13s2 = notes_.at(tunedto.at(1)+12);
	f13s3 = notes_.at(tunedto.at(2)+12);
	f13s4 = notes_.at(tunedto.at(3)+12);
	f13s5 = notes_.at(tunedto.at(4)+12);
	f13s6 = notes_.at(tunedto.at(5)+12);
	
	f14s1 = notes_.at(tunedto.at(0)+13);
	f14s2 = notes_.at(tunedto.at(1)+13);
	f14s3 = notes_.at(tunedto.at(2)+13);
	f14s4 = notes_.at(tunedto.at(3)+13);
	f14s5 = notes_.at(tunedto.at(4)+13);
	f14s6 = notes_.at(tunedto.at(5)+13);
	
	f15s1 = notes_.at(tunedto.at(0)+14);
	f15s2 = notes_.at(tunedto.at(1)+14);
	f15s3 = notes_.at(tunedto.at(2)+14);
	f15s4 = notes_.at(tunedto.at(3)+14);
	f15s5 = notes_.at(tunedto.at(4)+14);
	f15s6 = notes_.at(tunedto.at(5)+14);
	
	f16s1 = notes_.at(tunedto.at(0)+15);
	f16s2 = notes_.at(tunedto.at(1)+15);
	f16s3 = notes_.at(tunedto.at(2)+15);
	f16s4 = notes_.at(tunedto.at(3)+15);
	f16s5 = notes_.at(tunedto.at(4)+15);
	f16s6 = notes_.at(tunedto.at(5)+15);
	
	f17s1 = notes_.at(tunedto.at(0)+16);
	f17s2 = notes_.at(tunedto.at(1)+16);
	f17s3 = notes_.at(tunedto.at(2)+16);
	f17s4 = notes_.at(tunedto.at(3)+16);
	f17s5 = notes_.at(tunedto.at(4)+16);
	f17s6 = notes_.at(tunedto.at(5)+16);
	
	f18s1 = notes_.at(tunedto.at(0)+17);
	f18s2 = notes_.at(tunedto.at(1)+17);
	f18s3 = notes_.at(tunedto.at(2)+17);
	f18s4 = notes_.at(tunedto.at(3)+17);
	f18s5 = notes_.at(tunedto.at(4)+17);
	f18s6 = notes_.at(tunedto.at(5)+17);
	
	document.getElementById("s1f0").innerHTML = `${f0s1}`;
	document.getElementById("s2f0").innerHTML = `${f0s2}`;
	document.getElementById("s3f0").innerHTML = `${f0s3}`;
	document.getElementById("s4f0").innerHTML = `${f0s4}`;
	document.getElementById("s5f0").innerHTML = `${f0s5}`;
	document.getElementById("s6f0").innerHTML = `${f0s6}`;
	
	document.getElementById("s1f1").innerHTML = `${f1s1}`;
	document.getElementById("s2f1").innerHTML = `${f1s2}`;
	document.getElementById("s3f1").innerHTML = `${f1s3}`;
	document.getElementById("s4f1").innerHTML = `${f1s4}`;
	document.getElementById("s5f1").innerHTML = `${f1s5}`;
	document.getElementById("s6f1").innerHTML = `${f1s6}`;
	
	document.getElementById("s1f2").innerHTML = `${f2s1}`;
	document.getElementById("s2f2").innerHTML = `${f2s2}`;
	document.getElementById("s3f2").innerHTML = `${f2s3}`;
	document.getElementById("s4f2").innerHTML = `${f2s4}`;
	document.getElementById("s5f2").innerHTML = `${f2s5}`;
	document.getElementById("s6f2").innerHTML = `${f2s6}`;
	
	document.getElementById("s1f3").innerHTML = `${f3s1}`;
	document.getElementById("s2f3").innerHTML = `${f3s2}`;
	document.getElementById("s3f3").innerHTML = `${f3s3}`;
	document.getElementById("s4f3").innerHTML = `${f3s4}`;
	document.getElementById("s5f3").innerHTML = `${f3s5}`;
	document.getElementById("s6f3").innerHTML = `${f3s6}`;
	
	document.getElementById("s1f4").innerHTML = `${f4s1}`;
	document.getElementById("s2f4").innerHTML = `${f4s2}`;
	document.getElementById("s3f4").innerHTML = `${f4s3}`;
	document.getElementById("s4f4").innerHTML = `${f4s4}`;
	document.getElementById("s5f4").innerHTML = `${f4s5}`;
	document.getElementById("s6f4").innerHTML = `${f4s6}`;
	
	document.getElementById("s1f5").innerHTML = `${f5s1}`;
	document.getElementById("s2f5").innerHTML = `${f5s2}`;
	document.getElementById("s3f5").innerHTML = `${f5s3}`;
	document.getElementById("s4f5").innerHTML = `${f5s4}`;
	document.getElementById("s5f5").innerHTML = `${f5s5}`;
	document.getElementById("s6f5").innerHTML = `${f5s6}`;
	
	document.getElementById("s1f6").innerHTML = `${f6s1}`;
	document.getElementById("s2f6").innerHTML = `${f6s2}`;
	document.getElementById("s3f6").innerHTML = `${f6s3}`;
	document.getElementById("s4f6").innerHTML = `${f6s4}`;
	document.getElementById("s5f6").innerHTML = `${f6s5}`;
	document.getElementById("s6f6").innerHTML = `${f6s6}`;
	
	document.getElementById("s1f7").innerHTML = `${f7s1}`;
	document.getElementById("s2f7").innerHTML = `${f7s2}`;
	document.getElementById("s3f7").innerHTML = `${f7s3}`;
	document.getElementById("s4f7").innerHTML = `${f7s4}`;
	document.getElementById("s5f7").innerHTML = `${f7s5}`;
	document.getElementById("s6f7").innerHTML = `${f7s6}`;
	
	document.getElementById("s1f8").innerHTML = `${f8s1}`;
	document.getElementById("s2f8").innerHTML = `${f8s2}`;
	document.getElementById("s3f8").innerHTML = `${f8s3}`;
	document.getElementById("s4f8").innerHTML = `${f8s4}`;
	document.getElementById("s5f8").innerHTML = `${f8s5}`;
	document.getElementById("s6f8").innerHTML = `${f8s6}`;
	
	document.getElementById("s1f9").innerHTML = `${f9s1}`;
	document.getElementById("s2f9").innerHTML = `${f9s2}`;
	document.getElementById("s3f9").innerHTML = `${f9s3}`;
	document.getElementById("s4f9").innerHTML = `${f9s4}`;
	document.getElementById("s5f9").innerHTML = `${f9s5}`;
	document.getElementById("s6f9").innerHTML = `${f9s6}`;
	
	document.getElementById("s1f10").innerHTML = `${f10s1}`;
	document.getElementById("s2f10").innerHTML = `${f10s2}`;
	document.getElementById("s3f10").innerHTML = `${f10s3}`;
	document.getElementById("s4f10").innerHTML = `${f10s4}`;
	document.getElementById("s5f10").innerHTML = `${f10s5}`;
	document.getElementById("s6f10").innerHTML = `${f10s6}`;
	
	document.getElementById("s1f11").innerHTML = `${f11s1}`;
	document.getElementById("s2f11").innerHTML = `${f11s2}`;
	document.getElementById("s3f11").innerHTML = `${f11s3}`;
	document.getElementById("s4f11").innerHTML = `${f11s4}`;
	document.getElementById("s5f11").innerHTML = `${f11s5}`;
	document.getElementById("s6f11").innerHTML = `${f11s6}`;
	
	document.getElementById("s1f12").innerHTML = `${f12s1}`;
	document.getElementById("s2f12").innerHTML = `${f12s2}`;
	document.getElementById("s3f12").innerHTML = `${f12s3}`;
	document.getElementById("s4f12").innerHTML = `${f12s4}`;
	document.getElementById("s5f12").innerHTML = `${f12s5}`;
	document.getElementById("s6f12").innerHTML = `${f12s6}`;
	
	document.getElementById("s1f13").innerHTML = `${f13s1}`;
	document.getElementById("s2f13").innerHTML = `${f13s2}`;
	document.getElementById("s3f13").innerHTML = `${f13s3}`;
	document.getElementById("s4f13").innerHTML = `${f13s4}`;
	document.getElementById("s5f13").innerHTML = `${f13s5}`;
	document.getElementById("s6f13").innerHTML = `${f13s6}`;
	
	document.getElementById("s1f14").innerHTML = `${f14s1}`;
	document.getElementById("s2f14").innerHTML = `${f14s2}`;
	document.getElementById("s3f14").innerHTML = `${f14s3}`;
	document.getElementById("s4f14").innerHTML = `${f14s4}`;
	document.getElementById("s5f14").innerHTML = `${f14s5}`;
	document.getElementById("s6f14").innerHTML = `${f14s6}`;
	
	document.getElementById("s1f15").innerHTML = `${f15s1}`;
	document.getElementById("s2f15").innerHTML = `${f15s2}`;
	document.getElementById("s3f15").innerHTML = `${f15s3}`;
	document.getElementById("s4f15").innerHTML = `${f15s4}`;
	document.getElementById("s5f15").innerHTML = `${f15s5}`;
	document.getElementById("s6f15").innerHTML = `${f15s6}`;
	
	document.getElementById("s1f16").innerHTML = `${f16s1}`;
	document.getElementById("s2f16").innerHTML = `${f16s2}`;
	document.getElementById("s3f16").innerHTML = `${f16s3}`;
	document.getElementById("s4f16").innerHTML = `${f16s4}`;
	document.getElementById("s5f16").innerHTML = `${f16s5}`;
	document.getElementById("s6f16").innerHTML = `${f16s6}`;
	
	document.getElementById("s1f17").innerHTML = `${f17s1}`;
	document.getElementById("s2f17").innerHTML = `${f17s2}`;
	document.getElementById("s3f17").innerHTML = `${f17s3}`;
	document.getElementById("s4f17").innerHTML = `${f17s4}`;
	document.getElementById("s5f17").innerHTML = `${f17s5}`;
	document.getElementById("s6f17").innerHTML = `${f17s6}`;
	
	document.getElementById("s1f18").innerHTML = `${f18s1}`;
	document.getElementById("s2f18").innerHTML = `${f18s2}`;
	document.getElementById("s3f18").innerHTML = `${f18s3}`;
	document.getElementById("s4f18").innerHTML = `${f18s4}`;
	document.getElementById("s5f18").innerHTML = `${f18s5}`;
	document.getElementById("s6f18").innerHTML = `${f18s6}`;
	}
	
function sndFormChord(){
	chosenchord = document.getElementById("key");
	R = chosenchord.options[chosenchord.selectedIndex].value;
	if (R == "C") {R = notes_.at(0)}
	else if (R == "Csharp") {R = notes_.at(1)}
	else if (R == "D") {R = notes_.at(2)}
	else if (R == "Dsharp") {R = notes_.at(3)}
	else if (R == "E") {R = notes_.at(4)}
	else if (R == "F") {R = notes_.at(5)}
	else if (R == "Fsharp") {R = notes_.at(6)}
	else if (R == "G") {R = notes_.at(7)}
	else if (R == "Gsharp") {R = notes_.at(8)}
	else if (R == "A") {R = notes_.at(9)}
	else if (R == "Asharp") {R = notes_.at(10)}
	else if (R == "B") {R = notes_.at(11)};
	_b2nd = notes_.at(notes_.indexOf(R)+1);
	_2nd = notes_.at(notes_.indexOf(R)+2);
	_b3rd = notes_.at(notes_.indexOf(R)+3);
	_3rd = notes_.at(notes_.indexOf(R)+4);
	_4th = notes_.at(notes_.indexOf(R)+5);
	_b5th = notes_.at(notes_.indexOf(R)+6);
	_5th = notes_.at(notes_.indexOf(R)+7);
	_b6th = notes_.at(notes_.indexOf(R)+8);
	_6th = notes_.at(notes_.indexOf(R)+9);
	_b7th = notes_.at(notes_.indexOf(R)+10);
	_7th = notes_.at(notes_.indexOf(R)+11);
	_$7th = notes_.at(notes_.indexOf(R)+12);
	
	chord_triad_maj = [R, _3rd, _5th];
	chord_triad_min = [R, _b3rd, _5th];
	chord_triad_sus2 = [R, _2nd, _5th];
	chord_triad_aug = [R, _3rd, _b6th];
	chord_triad_dim = [R, _b3rd, _b5th];
	chord_triad_aug4 = [R, _b5th, _5th];
	chord_triad_flat5 = [R, _3rd, _b5th];
	chord_maj7 = [R, _3rd, _5th, _7th];
	chord_maj7sus4 = [R, _4th, _5th, _7th];
	chord_majadd9 = [R, _2nd, _3rd, _5th];
	chord_majadd$9 = [R, _b3rd, _3rd, _5th];
	chord_majaddb9 = [R, _b2nd, _3rd, _5th];
	chord_majadd11 = [R, _3rd, _4th, _5th];
	chord_majadd$11 = [R, _3rd, _b5th, _5th];
	chord_dom7 = [R, _3rd, _5th, _b7th];
	chord_min7 = [R, _b3rd, _5th, _b7th];
	chord_min7sus4 = [R, _4th, _5th, _b7th];
	chord_min7add9 = [R, _2nd, _b3rd, _5th];
	chord_minadd11 = [R, _b3rd, _4th, _5th];
	chord_minmaj7 = [R, _b3rd, _5th, _7th];
	chord_sus2addb13 = [R, _2nd, _5th, _b6th];
	chord_augmaj7 = [R, _3rd, _b6th, _7th];
	chord_aug7 = [R, _3rd, _b6th, _b7th];
	chord_halfdim = [R, _b3rd, _b5th, _b7th];
	chord_dim7 = [R, _b3rd, _b5th, _6th];
	chord_dimadd9 = [R, _2nd, _b3rd, _b5th];
	chord_dimaddb9 = [R, _b2nd, _b3rd, _b5th];
	chord_aug4add7 = [R, _b5th, _5th, _7th];
	chord_aug4addb7 = [R, _b5th, _5th, _b7th];
	chord_dom7b5 = [R, _3rd, _b5th, _b7th];
	chord_b5add9 = [R, _2nd, _3rd, _b5th];
	chord_b5add$9 = [R, _b3rd, _3rd, _b5th];
	chord_maj9 = [R, _2nd, _3rd, _5th, _7th];
	chord_maj$9 = [R, _b3rd, _3rd, _5th, _7th];
	chord_maj7add11 = [R, _3rd, _4th, _5th, _7th];
	chord_maj7add$11 = [R, _3rd, _b5th, _5th, _7th];
	chord_maj7addb13 = [R, _3rd, _5th, _b6th, _7th];
	chord_maj7aug4add13 = [R, _b5th, _5th, _6th, _7th];
	chord_majadd9add11 = [R, _2nd, _3rd, _4th, _5th];
	chord_majaddb9add11 = [R, _b2nd, _3rd, _4th, _5th];
	chord_majadd9add$11 = [R, _2nd, _3rd, _b5th, _5th];
	chord_majaddb9add$11 = [R, _b2nd, _3rd, _b5th, _5th];
	chord_majadd$9add$11 = [R, _b3rd, _3rd, _b5th, _5th];
	chord_majadd9addb13 = [R, _2nd, _3rd, _5th, _b6th];
	chord_dom9 = [R, _2nd, _3rd, _5th, _b7th];
	chord_domb9 = [R, _b2nd, _3rd, _5th, _b7th];
	chord_dom$9 = [R, _b3rd, _3rd, _5th, _b7th];
	chord_dom$9b5 = [R, _b3rd, _3rd, _b5th, _b7th];
	chord_dom7add$11 = [R, _3rd, _b5th, _5th, _b7th];
	chord_dom7add13 = [R, _3rd, _5th, _6th, _b7th];
	chord_dom7addb13 = [R, _3rd, _5th, _b6th, _b7th];
	chord_dom9b5 = [R, _2nd, _3rd, _b5th, _b7th];
	chord_dom7add11 = [R, _3rd, _4th, _5th, _b7th];
	chord_min7add11 = [R, _b3rd, _4th, _5th, _b7th];
	chord_min7add$11 = [R, _b3rd, _b5th, _5th, _b7th];
	chord_min7aug4add13 = [R, _b5th, _5th, _6th, _b7th];
	chord_min9 = [R, _2nd, _b3rd, _5th, _b7th];
	chord_minadd9add11 = [R, _2nd, _b3rd, _4th, _5th];
	chord_minadd9add$11 = [R, _2nd, _b3rd, _b5th, _5th];
	chord_minaddb9add$11 = [R, _b2nd, _b3rd, _b5th, _5th];
	chord_minmaj7add11 = [R, _b3rd, _4th, _5th, _7th];
	chord_minmaj7add$11 = [R, _b3rd, _b5th, _5th, _7th];
	chord_minmaj9 = [R, _2nd, _b3rd, _5th, _7th];
	chord_augminmaj7add13 = [R, _b3rd, _b6th, _6th, _7th];
	chord_halfdim9 = [R, _2nd, _b3rd, _b5th, _b7th];
	chord_halfdim7add11 = [R, _b3rd, _4th, _b5th, _b7th];
	chord_dimb9 = [R, _b2nd, _b3rd, _b5th, _b7th];
	chord_maj9b5 = [R, _2nd, _3rd, _b5th, _7th];
	chord_maj$9addb13 = [R, _b3rd, _3rd, _5th, _b6th, _7th];
	chord_maj$11$9 = [R, _b3rd, _3rd, _b5th, _5th, _7th];
	chord_maj11 = [R, _2nd, _3rd, _4th, _5th, _7th];
	chord_maj$11 = [R, _2nd, _3rd, _b5th, _5th, _7th];
	chord_maj9addb13 = [R, _2nd, _3rd, _5th, _b6th, _7th];
	chord_min$11 = [R, _2nd, _b3rd, _b5th, _5th, _b7th];
	chord_min9add13 = [R, _2nd, _b3rd, _5th, _6th, _b7th];
	chord_min11 = [R, _2nd, _b3rd, _4th, _5th, _b7th];
	chord_minb9add13 = [R, _b2nd, _b3rd, _5th, _6th, _b7th];
	chord_dom$11b9 = [R, _b2nd, _3rd, _b5th, _5th, _b7th];
	chord_dom$9b5add13 = [R, _b3rd, _3rd, _b5th, _6th, _b7th];
	chord_dom$11 = [R, _2nd, _3rd, _b5th, _5th, _b7th];
	chord_dom9addb13 = [R, _2nd, _3rd, _5th, _b6th, _b7th];
	chord_dom9b5addb13 = [R, _2nd, _3rd, _b5th, _b6th, _b7th];
	chord_dom11b9 = [R, _b2nd, _3rd, _4th, _5th, _b7th];
	chord_dom11 = [R, _2nd, _3rd, _4th, _5th, _b7th];
	chord_minmaj11 = [R, _2nd, _b3rd, _4th, _5th, _7th];
	chord_minmaj$11 = [R, _2nd, _b3rd, _b5th, _5th, _7th];
	chord_augminmaj9add13 = [R, _2nd, _b3rd, _b6th, _6th, _7th];
	chord_halfdim9add13 = [R, _2nd, _b3rd, _b5th, _6th, _b7th];
	chord_halfdim11 = [R, _2nd, _b3rd, _4th, _b5th, _b7th];
	chord_dim11 = [R, _2nd, _b3rd, _4th, _b5th, _6th];
	
	R = notes_.at(notes_.indexOf(R));

	document.getElementById("scale").innerHTML = `Scale: <br>
	${R} ${_2nd} ${_3rd} ${_4th} ${_5th} ${_6th} ${_7th}`}
	
function sndFormChordType(){
	chordtype = document.getElementById("chordstyle");
	thischord = chordtype.options[chordtype.selectedIndex].value;
	if (thischord == "maj") {mychord = chord_triad_maj;	
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmaj").innerHTML}: ${mychord}`;
		document.getElementById("circfif").innerHTML = `I: ${R}<br> ii: ${_2nd}m<br> iii: ${_3rd}m<br> IV: ${_4th}<br> V: ${_5th}<br> vi: ${_6th}m<br> vii&deg;: ${_7th}dim`}
	else if (thischord == "min") {mychord = chord_triad_min;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmin").innerHTML}: ${mychord}`;
		document.getElementById("circfif").innerHTML = `i: ${R}m<br> ii&deg;: ${_2nd}dim<br> III: ${_3rd}&flat;<br> iv: ${_4th}m<br> v: ${_5th}m<br> VI: ${_6th}&flat;<br> VII: ${_7th}&flat;`}
	else if (thischord == "sus2") {mychord = chord_triad_sus2;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chsus2").innerHTML}: ${mychord}`;}
	else if (thischord == "aug") {mychord = chord_triad_aug;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chaug").innerHTML}: ${mychord}`;}
	else if (thischord == "dim") {mychord = chord_triad_dim;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdim").innerHTML}: ${mychord}`;}
	else if (thischord == "aug4") {mychord = chord_triad_aug4;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chaug4").innerHTML}: ${mychord}`;}
	else if (thischord == "flat5") {mychord = chord_triad_flat5;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chflat5").innerHTML}: ${mychord}`;}
	else if (thischord == "maj7") {mychord = chord_maj7;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmaj7").innerHTML}: ${mychord}`;}
	else if (thischord == "maj7sus4") {mychord = chord_maj7sus4;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmaj7sus4").innerHTML}: ${mychord}`;}
	else if (thischord == "majadd9") {mychord = chord_majadd9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajadd9").innerHTML}: ${mychord}`;}
	else if (thischord == "majadds9") {mychord = chord_majadd$9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajadds9").innerHTML}: ${mychord}`;}
	else if (thischord == "majaddb9") {mychord = chord_majaddb9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajaddb9").innerHTML}: ${mychord}`;}
	else if (thischord == "majadd11") {mychord = chord_majadd11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajadd11").innerHTML}: ${mychord}`;}
	else if (thischord == "majadds11") {mychord = chord_majadd$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajadds11").innerHTML}: ${mychord}`;}
	else if (thischord == "dom7") {mychord = chord_dom7;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdom7").innerHTML}: ${mychord}`;}
	else if (thischord == "min7") {mychord = chord_min7;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmin7").innerHTML}: ${mychord}`;}
	else if (thischord == "min7sus4") {mychord = chord_min7sus4;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmin7sus4").innerHTML}: ${mychord}`;}
	else if (thischord == "min7add9") {mychord = chord_min7add9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmin7add9").innerHTML}: ${mychord}`;}
	else if (thischord == "minadd11") {mychord = chord_minadd11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chminadd11").innerHTML}: ${mychord}`;}
	else if (thischord == "minmaj7") {mychord = chord_minmaj7;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chminmaj7").innerHTML}: ${mychord}`;}
	else if (thischord == "sus2addb13") {mychord = chord_sus2addb13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chsus2addb13").innerHTML}: ${mychord}`;}
	else if (thischord == "augmaj7") {mychord = chord_augmaj7;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chaugmaj7").innerHTML}: ${mychord}`;}
	else if (thischord == "aug7") {mychord = chord_aug7;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chaug7").innerHTML}: ${mychord}`;}
	else if (thischord == "halfdim") {mychord = chord_halfdim;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chhalfdim").innerHTML}: ${mychord}`;}
	else if (thischord == "dim7") {mychord = chord_dim7;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdim7").innerHTML}: ${mychord}`;}
	else if (thischord == "dimadd9") {mychord = chord_dimadd9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdimadd9").innerHTML}: ${mychord}`;}
	else if (thischord == "dimaddb9") {mychord = chord_dimaddb9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdimaddb9").innerHTML}: ${mychord}`;}
	else if (thischord == "aug4add7") {mychord = chord_aug4add7;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chaug4add7").innerHTML}: ${mychord}`;}
	else if (thischord == "aug4addb7") {mychord = chord_aug4addb7;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chaug4addb7").innerHTML}: ${mychord}`;}
	else if (thischord == "dom7b5") {mychord = chord_dom7b5;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdom7b5").innerHTML}: ${mychord}`;}
	else if (thischord == "b5add9") {mychord = chord_b5add9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chb5add9").innerHTML}: ${mychord}`;}
	else if (thischord == "b5adds9") {mychord = chord_b5add$9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chb5adds9").innerHTML}: ${mychord}`;}
	else if (thischord == "maj9") {mychord = chord_maj9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmaj9").innerHTML}: ${mychord}`;}
	else if (thischord == "majs9") {mychord = chord_maj$9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajs9").innerHTML}: ${mychord}`;}
	else if (thischord == "maj7add11") {mychord = chord_maj7add11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmaj7add11").innerHTML}: ${mychord}`;}
	else if (thischord == "maj7adds11") {mychord = chord_maj7add$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmaj7adds11").innerHTML}: ${mychord}`;}
	else if (thischord == "maj7addb13") {mychord = chord_maj7addb13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmaj7addb13").innerHTML}: ${mychord}`;}
	else if (thischord == "maj7aug4add13") {mychord = chord_maj7aug4add13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmaj7aug4add13").innerHTML}: ${mychord}`;}
	else if (thischord == "majadd9add11") {mychord = chord_majadd9add11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajadd9add11").innerHTML}: ${mychord}`;}
	else if (thischord == "majaddb9add11") {mychord = chord_majaddb9add11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajaddb9add11").innerHTML}: ${mychord}`;}
	else if (thischord == "majadd9adds11") {mychord = chord_majadd9add$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajadd9adds11").innerHTML}: ${mychord}`;}
	else if (thischord == "majaddb9adds11") {mychord = chord_majaddb9add$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajaddb9adds11").innerHTML}: ${mychord}`;}
	else if (thischord == "majadds9adds11") {mychord = chord_majadd$9add$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajadds9adds11").innerHTML}: ${mychord}`;}
	else if (thischord == "majadd9addb13") {mychord = chord_majadd9addb13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajadd9addb13").innerHTML}: ${mychord}`;}
	else if (thischord == "dom9") {mychord = chord_dom9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdom9").innerHTML}: ${mychord}`;}
	else if (thischord == "domb9") {mychord = chord_domb9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdomb9").innerHTML}: ${mychord}`;}
	else if (thischord == "doms9") {mychord = chord_dom$9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdoms9").innerHTML}: ${mychord}`;}
	else if (thischord == "doms9b5") {mychord = chord_dom$9b5;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdoms9b5").innerHTML}: ${mychord}`;}
	else if (thischord == "dom7adds11") {mychord = chord_dom7add$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdom7adds11").innerHTML}: ${mychord}`;}
	else if (thischord == "dom7add13") {mychord = chord_dom7add13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdom7add13").innerHTML}: ${mychord}`;}
	else if (thischord == "dom7addb13") {mychord = chord_dom7addb13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdom7addb13").innerHTML}: ${mychord}`;}
	else if (thischord == "dom9b5") {mychord = chord_dom9b5;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdom9b5").innerHTML}: ${mychord}`;}
	else if (thischord == "dom7add11") {mychord = chord_dom7add11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdom7add11").innerHTML}: ${mychord}`;}
	else if (thischord == "min7add11") {mychord = chord_min7add11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmin7add11").innerHTML}: ${mychord}`;}
	else if (thischord == "min7adds11") {mychord = chord_min7add$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmin7adds11").innerHTML}: ${mychord}`;}
	else if (thischord == "min7aug4add13") {mychord = chord_min7aug4add13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmin7aug4add13").innerHTML}: ${mychord}`;}
	else if (thischord == "min9") {mychord = chord_min9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmin9").innerHTML}: ${mychord}`;}
	else if (thischord == "minadd9add11") {mychord = chord_minadd9add11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chminadd9add11").innerHTML}: ${mychord}`;}
	else if (thischord == "minadd9adds11") {mychord = chord_minadd9add$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chminadd9adds11").innerHTML}: ${mychord}`;}
	else if (thischord == "minaddb9adds11") {mychord = chord_minaddb9add$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chminaddb9adds11").innerHTML}: ${mychord}`;}
	else if (thischord == "minmaj7add11") {mychord = chord_minmaj7add11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chminmaj7add11").innerHTML}: ${mychord}`;}
	else if (thischord == "minmaj7adds11") {mychord = chord_minmaj7add$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chminmaj7adds11").innerHTML}: ${mychord}`;}
	else if (thischord == "minmaj9") {mychord = chord_minmaj9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chminmaj9").innerHTML}: ${mychord}`;}
	else if (thischord == "augminmaj7add13") {mychord = chord_augminmaj7add13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chaugminmaj7add13").innerHTML}: ${mychord}`;}
	else if (thischord == "halfdim9") {mychord = chord_halfdim9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chhalfdim9").innerHTML}: ${mychord}`;}
	else if (thischord == "halfdim7add11") {mychord = chord_halfdim7add11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chhalfdim7add11").innerHTML}: ${mychord}`;}
	else if (thischord == "dimb9") {mychord = chord_dimb9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdimb9").innerHTML}: ${mychord}`;}
	else if (thischord == "maj9b5") {mychord = chord_maj9b5;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmaj9b5").innerHTML}: ${mychord}`;}
	else if (thischord == "majs9addb13") {mychord = chord_maj$9addb13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajs9addb13").innerHTML}: ${mychord}`;}
	else if (thischord == "majs11s9") {mychord = chord_maj$11$9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajs11s9").innerHTML}: ${mychord}`;}
	else if (thischord == "maj11") {mychord = chord_maj11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmaj11").innerHTML}: ${mychord}`;}
	else if (thischord == "majs11") {mychord = chord_maj$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmajs11").innerHTML}: ${mychord}`;}
	else if (thischord == "maj9addb13") {mychord = chord_maj9addb13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmaj9addb13").innerHTML}: ${mychord}`;}
	else if (thischord == "mins11") {mychord = chord_min$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmins11").innerHTML}: ${mychord}`;}
	else if (thischord == "min9add13") {mychord = chord_min9add13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmin9add13").innerHTML}: ${mychord}`;}
	else if (thischord == "min11") {mychord = chord_min11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chmin11").innerHTML}: ${mychord}`;}
	else if (thischord == "minb9add13") {mychord = chord_minb9add13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chminb9add13").innerHTML}: ${mychord}`;}
	else if (thischord == "doms11b9") {mychord = chord_dom$11b9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdoms11b9").innerHTML}: ${mychord}`;}
	else if (thischord == "doms9b5add13") {mychord = chord_dom$9b5add13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdoms9b5add13").innerHTML}: ${mychord}`;}
	else if (thischord == "doms11") {mychord = chord_dom$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdoms11").innerHTML}: ${mychord}`;}
	else if (thischord == "dom9addb13") {mychord = chord_dom9addb13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdom9addb13").innerHTML}: ${mychord}`;}
	else if (thischord == "dom9b5addb13") {mychord = chord_dom9b5addb13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdom9b5addb13").innerHTML}: ${mychord}`;}
	else if (thischord == "dom11b9") {mychord = chord_dom11b9;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdom11b9").innerHTML}: ${mychord}`;}
	else if (thischord == "dom11") {mychord = chord_dom11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdom11").innerHTML}: ${mychord}`;}
	else if (thischord == "minmaj11") {mychord = chord_minmaj11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chminmaj11").innerHTML}: ${mychord}`;}
	else if (thischord == "minmajs11") {mychord = chord_minmaj$11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chminmajs11").innerHTML}: ${mychord}`;}
	else if (thischord == "augminmaj9add13") {mychord = chord_augminmaj9add13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chaugminmaj9add13").innerHTML}: ${mychord}`;}
	else if (thischord == "halfdim9add13") {mychord = chord_halfdim9add13;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chhalfdim9add13").innerHTML}: ${mychord}`;}
	else if (thischord == "halfdim11") {mychord = chord_halfdim11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chhalfdim11").innerHTML}: ${mychord}`;}
	else if (thischord == "dim11") {mychord = chord_dim11;
		document.getElementById("chordthing").innerHTML = `${R} ${document.getElementById("chdim11").innerHTML}: ${mychord}`;}
	
	
	if (f0s1 == mychord.at(0) || f0s1 == mychord.at(1) || f0s1 == mychord.at(2) || f0s1 == mychord.at(3) || f0s1 == mychord.at(4) || f0s1 == mychord.at(5)) {s1f0.style.display = "block";}
		else {s1f0.style.display = "none";}
	if (f0s2 == mychord.at(0) || f0s2 == mychord.at(1) || f0s2 == mychord.at(2) || f0s2 == mychord.at(3) || f0s2 == mychord.at(4) || f0s2 == mychord.at(5)) {s2f0.style.display = "block";}
		else {s2f0.style.display = "none";}
	if (f0s3 == mychord.at(0) || f0s3 == mychord.at(1) || f0s3 == mychord.at(2) || f0s3 == mychord.at(3) || f0s3 == mychord.at(4) || f0s3 == mychord.at(5)) {s3f0.style.display = "block";}
		else {s3f0.style.display = "none";}
	if (f0s4 == mychord.at(0) || f0s4 == mychord.at(1) || f0s4 == mychord.at(2) || f0s4 == mychord.at(3) || f0s4 == mychord.at(4) || f0s4 == mychord.at(5)) {s4f0.style.display = "block";}
		else {s4f0.style.display = "none";}
	if (f0s5 == mychord.at(0) || f0s5 == mychord.at(1) || f0s5 == mychord.at(2) || f0s5 == mychord.at(3) || f0s5 == mychord.at(4) || f0s5 == mychord.at(5)) {s5f0.style.display = "block";}
		else {s5f0.style.display = "none";}
	if (f0s6 == mychord.at(0) || f0s6 == mychord.at(1) || f0s6 == mychord.at(2) || f0s6 == mychord.at(3) || f0s6 == mychord.at(4) || f0s6 == mychord.at(5)) {s6f0.style.display = "block";}
		else {s6f0.style.display = "none";}
		
	if (f1s1 == mychord.at(0) || f1s1 == mychord.at(1) || f1s1 == mychord.at(2) || f1s1 == mychord.at(3) || f1s1 == mychord.at(4) || f1s1 == mychord.at(5)) {s1f1.style.display = "block";}
		else {s1f1.style.display = "none";}
	if (f1s2 == mychord.at(0) || f1s2 == mychord.at(1) || f1s2 == mychord.at(2) || f1s2 == mychord.at(3) || f1s2 == mychord.at(4) || f1s2 == mychord.at(5)) {s2f1.style.display = "block";}
		else {s2f1.style.display = "none";}
	if (f1s3 == mychord.at(0) || f1s3 == mychord.at(1) || f1s3 == mychord.at(2) || f1s3 == mychord.at(3) || f1s3 == mychord.at(4) || f1s3 == mychord.at(5)) {s3f1.style.display = "block";}
		else {s3f1.style.display = "none";}
	if (f1s4 == mychord.at(0) || f1s4 == mychord.at(1) || f1s4 == mychord.at(2) || f1s4 == mychord.at(3) || f1s4 == mychord.at(4) || f1s4 == mychord.at(5)) {s4f1.style.display = "block";}
		else {s4f1.style.display = "none";}
	if (f1s5 == mychord.at(0) || f1s5 == mychord.at(1) || f1s5 == mychord.at(2) || f1s5 == mychord.at(3) || f1s5 == mychord.at(4) || f1s5 == mychord.at(5)) {s5f1.style.display = "block";}
		else {s5f1.style.display = "none";}
	if (f1s6 == mychord.at(0) || f1s6 == mychord.at(1) || f1s6 == mychord.at(2) || f1s6 == mychord.at(3) || f1s6 == mychord.at(4) || f1s6 == mychord.at(5)) {s6f1.style.display = "block";}
		else {s6f1.style.display = "none";}
	
	if (f2s1 == mychord.at(0) || f2s1 == mychord.at(1) || f2s1 == mychord.at(2) || f2s1 == mychord.at(3) || f2s1 == mychord.at(4) || f2s1 == mychord.at(5)) {s1f2.style.display = "block";}
		else {s1f2.style.display = "none";}
	if (f2s2 == mychord.at(0) || f2s2 == mychord.at(1) || f2s2 == mychord.at(2) || f2s2 == mychord.at(3) || f2s2 == mychord.at(4) || f2s2 == mychord.at(5)) {s2f2.style.display = "block";}
		else {s2f2.style.display = "none";}
	if (f2s3 == mychord.at(0) || f2s3 == mychord.at(1) || f2s3 == mychord.at(2) || f2s3 == mychord.at(3) || f2s3 == mychord.at(4) || f2s3 == mychord.at(5)) {s3f2.style.display = "block";}
		else {s3f2.style.display = "none";}
	if (f2s4 == mychord.at(0) || f2s4 == mychord.at(1) || f2s4 == mychord.at(2) || f2s4 == mychord.at(3) || f2s4 == mychord.at(4) || f2s4 == mychord.at(5)) {s4f2.style.display = "block";}
		else {s4f2.style.display = "none";}
	if (f2s5 == mychord.at(0) || f2s5 == mychord.at(1) || f2s5 == mychord.at(2) || f2s5 == mychord.at(3) || f2s5 == mychord.at(4) || f2s5 == mychord.at(5)) {s5f2.style.display = "block";}
		else {s5f2.style.display = "none";}
	if (f2s6 == mychord.at(0) || f2s6 == mychord.at(1) || f2s6 == mychord.at(2) || f2s6 == mychord.at(3) || f2s6 == mychord.at(4) || f2s6 == mychord.at(5)) {s6f2.style.display = "block";}
		else {s6f2.style.display = "none";}
		
	if (f3s1 == mychord.at(0) || f3s1 == mychord.at(1) || f3s1 == mychord.at(2) || f3s1 == mychord.at(3) || f3s1 == mychord.at(4) || f3s1 == mychord.at(5)) {s1f3.style.display = "block";}
		else {s1f3.style.display = "none";}
	if (f3s2 == mychord.at(0) || f3s2 == mychord.at(1) || f3s2 == mychord.at(2) || f3s2 == mychord.at(3) || f3s2 == mychord.at(4) || f3s2 == mychord.at(5)) {s2f3.style.display = "block";}
		else {s2f3.style.display = "none";}
	if (f3s3 == mychord.at(0) || f3s3 == mychord.at(1) || f3s3 == mychord.at(2) || f3s3 == mychord.at(3) || f3s3 == mychord.at(4) || f3s3 == mychord.at(5)) {s3f3.style.display = "block";}
		else {s3f3.style.display = "none";}
	if (f3s4 == mychord.at(0) || f3s4 == mychord.at(1) || f3s4 == mychord.at(2) || f3s4 == mychord.at(3) || f3s4 == mychord.at(4) || f3s4 == mychord.at(5)) {s4f3.style.display = "block";}
		else {s4f3.style.display = "none";}
	if (f3s5 == mychord.at(0) || f3s5 == mychord.at(1) || f3s5 == mychord.at(2) || f3s5 == mychord.at(3) || f3s5 == mychord.at(4) || f3s5 == mychord.at(5)) {s5f3.style.display = "block";}
		else {s5f3.style.display = "none";}
	if (f3s6 == mychord.at(0) || f3s6 == mychord.at(1) || f3s6 == mychord.at(2) || f3s6 == mychord.at(3) || f3s6 == mychord.at(4) || f3s6 == mychord.at(5)) {s6f3.style.display = "block";}
		else {s6f3.style.display = "none";}
		
	if (f4s1 == mychord.at(0) || f4s1 == mychord.at(1) || f4s1 == mychord.at(2) || f4s1 == mychord.at(3) || f4s1 == mychord.at(4) || f4s1 == mychord.at(5)) {s1f4.style.display = "block";}
		else {s1f4.style.display = "none";}
	if (f4s2 == mychord.at(0) || f4s2 == mychord.at(1) || f4s2 == mychord.at(2) || f4s2 == mychord.at(3) || f4s2 == mychord.at(4) || f4s2 == mychord.at(5)) {s2f4.style.display = "block";}
		else {s2f4.style.display = "none";}
	if (f4s3 == mychord.at(0) || f4s3 == mychord.at(1) || f4s3 == mychord.at(2) || f4s3 == mychord.at(3) || f4s3 == mychord.at(4) || f4s3 == mychord.at(5)) {s3f4.style.display = "block";}
		else {s3f4.style.display = "none";}
	if (f4s4 == mychord.at(0) || f4s4 == mychord.at(1) || f4s4 == mychord.at(2) || f4s4 == mychord.at(3) || f4s4 == mychord.at(4) || f4s4 == mychord.at(5)) {s4f4.style.display = "block";}
		else {s4f4.style.display = "none";}
	if (f4s5 == mychord.at(0) || f4s5 == mychord.at(1) || f4s5 == mychord.at(2) || f4s5 == mychord.at(3) || f4s5 == mychord.at(4) || f4s5 == mychord.at(5)) {s5f4.style.display = "block";}
		else {s5f4.style.display = "none";}
	if (f4s6 == mychord.at(0) || f4s6 == mychord.at(1) || f4s6 == mychord.at(2) || f4s6 == mychord.at(3) || f4s6 == mychord.at(4) || f4s6 == mychord.at(5)) {s6f4.style.display = "block";}
		else {s6f4.style.display = "none";}
		
	if (f5s1 == mychord.at(0) || f5s1 == mychord.at(1) || f5s1 == mychord.at(2) || f5s1 == mychord.at(3) || f5s1 == mychord.at(4) || f5s1 == mychord.at(5)) {s1f5.style.display = "block";}
		else {s1f5.style.display = "none";}
	if (f5s2 == mychord.at(0) || f5s2 == mychord.at(1) || f5s2 == mychord.at(2) || f5s2 == mychord.at(3) || f5s2 == mychord.at(4) || f5s2 == mychord.at(5)) {s2f5.style.display = "block";}
		else {s2f5.style.display = "none";}
	if (f5s3 == mychord.at(0) || f5s3 == mychord.at(1) || f5s3 == mychord.at(2) || f5s3 == mychord.at(3) || f5s3 == mychord.at(4) || f5s3 == mychord.at(5)) {s3f5.style.display = "block";}
		else {s3f5.style.display = "none";}
	if (f5s4 == mychord.at(0) || f5s4 == mychord.at(1) || f5s4 == mychord.at(2) || f5s4 == mychord.at(3) || f5s4 == mychord.at(4) || f5s4 == mychord.at(5)) {s4f5.style.display = "block";}
		else {s4f5.style.display = "none";}
	if (f5s5 == mychord.at(0) || f5s5 == mychord.at(1) || f5s5 == mychord.at(2) || f5s5 == mychord.at(3) || f5s5 == mychord.at(4) || f5s5 == mychord.at(5)) {s5f5.style.display = "block";}
		else {s5f5.style.display = "none";}
	if (f5s6 == mychord.at(0) || f5s6 == mychord.at(1) || f5s6 == mychord.at(2) || f5s6 == mychord.at(3) || f5s6 == mychord.at(4) || f5s6 == mychord.at(5)) {s6f5.style.display = "block";}
		else {s6f5.style.display = "none";}
		
	if (f6s1 == mychord.at(0) || f6s1 == mychord.at(1) || f6s1 == mychord.at(2) || f6s1 == mychord.at(3) || f6s1 == mychord.at(4) || f6s1 == mychord.at(5)) {s1f6.style.display = "block";}
		else {s1f6.style.display = "none";}
	if (f6s2 == mychord.at(0) || f6s2 == mychord.at(1) || f6s2 == mychord.at(2) || f6s2 == mychord.at(3) || f6s2 == mychord.at(4) || f6s2 == mychord.at(5)) {s2f6.style.display = "block";}
		else {s2f6.style.display = "none";}
	if (f6s3 == mychord.at(0) || f6s3 == mychord.at(1) || f6s3 == mychord.at(2) || f6s3 == mychord.at(3) || f6s3 == mychord.at(4) || f6s3 == mychord.at(5)) {s3f6.style.display = "block";}
		else {s3f6.style.display = "none";}
	if (f6s4 == mychord.at(0) || f6s4 == mychord.at(1) || f6s4 == mychord.at(2) || f6s4 == mychord.at(3) || f6s4 == mychord.at(4) || f6s4 == mychord.at(5)) {s4f6.style.display = "block";}
		else {s4f6.style.display = "none";}
	if (f6s5 == mychord.at(0) || f6s5 == mychord.at(1) || f6s5 == mychord.at(2) || f6s5 == mychord.at(3) || f6s5 == mychord.at(4) || f6s5 == mychord.at(5)) {s5f6.style.display = "block";}
		else {s5f6.style.display = "none";}
	if (f6s6 == mychord.at(0) || f6s6 == mychord.at(1) || f6s6 == mychord.at(2) || f6s6 == mychord.at(3) || f6s6 == mychord.at(4) || f6s6 == mychord.at(5)) {s6f6.style.display = "block";}
		else {s6f6.style.display = "none";}
		
	if (f7s1 == mychord.at(0) || f7s1 == mychord.at(1) || f7s1 == mychord.at(2) || f7s1 == mychord.at(3) || f7s1 == mychord.at(4) || f7s1 == mychord.at(5)) {s1f7.style.display = "block";}
		else {s1f7.style.display = "none";}
	if (f7s2 == mychord.at(0) || f7s2 == mychord.at(1) || f7s2 == mychord.at(2) || f7s2 == mychord.at(3) || f7s2 == mychord.at(4) || f7s2 == mychord.at(5)) {s2f7.style.display = "block";}
		else {s2f7.style.display = "none";}
	if (f7s3 == mychord.at(0) || f7s3 == mychord.at(1) || f7s3 == mychord.at(2) || f7s3 == mychord.at(3) || f7s3 == mychord.at(4) || f7s3 == mychord.at(5)) {s3f7.style.display = "block";}
		else {s3f7.style.display = "none";}
	if (f7s4 == mychord.at(0) || f7s4 == mychord.at(1) || f7s4 == mychord.at(2) || f7s4 == mychord.at(3) || f7s4 == mychord.at(4) || f7s4 == mychord.at(5)) {s4f7.style.display = "block";}
		else {s4f7.style.display = "none";}
	if (f7s5 == mychord.at(0) || f7s5 == mychord.at(1) || f7s5 == mychord.at(2) || f7s5 == mychord.at(3) || f7s5 == mychord.at(4) || f7s5 == mychord.at(5)) {s5f7.style.display = "block";}
		else {s5f7.style.display = "none";}
	if (f7s6 == mychord.at(0) || f7s6 == mychord.at(1) || f7s6 == mychord.at(2) || f7s6 == mychord.at(3) || f7s6 == mychord.at(4) || f7s6 == mychord.at(5)) {s6f7.style.display = "block";}
		else {s6f7.style.display = "none";}
		
	if (f8s1 == mychord.at(0) || f8s1 == mychord.at(1) || f8s1 == mychord.at(2) || f8s1 == mychord.at(3) || f8s1 == mychord.at(4) || f8s1 == mychord.at(5)) {s1f8.style.display = "block";}
		else {s1f8.style.display = "none";}
	if (f8s2 == mychord.at(0) || f8s2 == mychord.at(1) || f8s2 == mychord.at(2) || f8s2 == mychord.at(3) || f8s2 == mychord.at(4) || f8s2 == mychord.at(5)) {s2f8.style.display = "block";}
		else {s2f8.style.display = "none";}
	if (f8s3 == mychord.at(0) || f8s3 == mychord.at(1) || f8s3 == mychord.at(2) || f8s3 == mychord.at(3) || f8s3 == mychord.at(4) || f8s3 == mychord.at(5)) {s3f8.style.display = "block";}
		else {s3f8.style.display = "none";}
	if (f8s4 == mychord.at(0) || f8s4 == mychord.at(1) || f8s4 == mychord.at(2) || f8s4 == mychord.at(3) || f8s4 == mychord.at(4) || f8s4 == mychord.at(5)) {s4f8.style.display = "block";}
		else {s4f8.style.display = "none";}
	if (f8s5 == mychord.at(0) || f8s5 == mychord.at(1) || f8s5 == mychord.at(2) || f8s5 == mychord.at(3) || f8s5 == mychord.at(4) || f8s5 == mychord.at(5)) {s5f8.style.display = "block";}
		else {s5f8.style.display = "none";}
	if (f8s6 == mychord.at(0) || f8s6 == mychord.at(1) || f8s6 == mychord.at(2) || f8s6 == mychord.at(3) || f8s6 == mychord.at(4) || f8s6 == mychord.at(5)) {s6f8.style.display = "block";}
		else {s6f8.style.display = "none";}
		
	if (f9s1 == mychord.at(0) || f9s1 == mychord.at(1) || f9s1 == mychord.at(2) || f9s1 == mychord.at(3) || f9s1 == mychord.at(4) || f9s1 == mychord.at(5)) {s1f9.style.display = "block";}
		else {s1f9.style.display = "none";}
	if (f9s2 == mychord.at(0) || f9s2 == mychord.at(1) || f9s2 == mychord.at(2) || f9s2 == mychord.at(3) || f9s2 == mychord.at(4) || f9s2 == mychord.at(5)) {s2f9.style.display = "block";}
		else {s2f9.style.display = "none";}
	if (f9s3 == mychord.at(0) || f9s3 == mychord.at(1) || f9s3 == mychord.at(2) || f9s3 == mychord.at(3) || f9s3 == mychord.at(4) || f9s3 == mychord.at(5)) {s3f9.style.display = "block";}
		else {s3f9.style.display = "none";}
	if (f9s4 == mychord.at(0) || f9s4 == mychord.at(1) || f9s4 == mychord.at(2) || f9s4 == mychord.at(3) || f9s4 == mychord.at(4) || f9s4 == mychord.at(5)) {s4f9.style.display = "block";}
		else {s4f9.style.display = "none";}
	if (f9s5 == mychord.at(0) || f9s5 == mychord.at(1) || f9s5 == mychord.at(2) || f9s5 == mychord.at(3) || f9s5 == mychord.at(4) || f9s5 == mychord.at(5)) {s5f9.style.display = "block";}
		else {s5f9.style.display = "none";}
	if (f9s6 == mychord.at(0) || f9s6 == mychord.at(1) || f9s6 == mychord.at(2) || f9s6 == mychord.at(3) || f9s6 == mychord.at(4) || f9s6 == mychord.at(5)) {s6f9.style.display = "block";}
		else {s6f9.style.display = "none";}
		
	if (f10s1 == mychord.at(0) || f10s1 == mychord.at(1) || f10s1 == mychord.at(2) || f10s1 == mychord.at(3) || f10s1 == mychord.at(4) || f10s1 == mychord.at(5)) {s1f10.style.display = "block";}
		else {s1f10.style.display = "none";}
	if (f10s2 == mychord.at(0) || f10s2 == mychord.at(1) || f10s2 == mychord.at(2) || f10s2 == mychord.at(3) || f10s2 == mychord.at(4) || f10s2 == mychord.at(5)) {s2f10.style.display = "block";}
		else {s2f10.style.display = "none";}
	if (f10s3 == mychord.at(0) || f10s3 == mychord.at(1) || f10s3 == mychord.at(2) || f10s3 == mychord.at(3) || f10s3 == mychord.at(4) || f10s3 == mychord.at(5)) {s3f10.style.display = "block";}
		else {s3f10.style.display = "none";}
	if (f10s4 == mychord.at(0) || f10s4 == mychord.at(1) || f10s4 == mychord.at(2) || f10s4 == mychord.at(3) || f10s4 == mychord.at(4) || f10s4 == mychord.at(5)) {s4f10.style.display = "block";}
		else {s4f10.style.display = "none";}
	if (f10s5 == mychord.at(0) || f10s5 == mychord.at(1) || f10s5 == mychord.at(2) || f10s5 == mychord.at(3) || f10s5 == mychord.at(4) || f10s5 == mychord.at(5)) {s5f10.style.display = "block";}
		else {s5f10.style.display = "none";}
	if (f10s6 == mychord.at(0) || f10s6 == mychord.at(1) || f10s6 == mychord.at(2) || f10s6 == mychord.at(3) || f10s6 == mychord.at(4) || f10s6 == mychord.at(5)) {s6f10.style.display = "block";}
		else {s6f10.style.display = "none";}
		
	if (f11s1 == mychord.at(0) || f11s1 == mychord.at(1) || f11s1 == mychord.at(2) || f11s1 == mychord.at(3) || f11s1 == mychord.at(4) || f11s1 == mychord.at(5)) {s1f11.style.display = "block";}
		else {s1f11.style.display = "none";}
	if (f11s2 == mychord.at(0) || f11s2 == mychord.at(1) || f11s2 == mychord.at(2) || f11s2 == mychord.at(3) || f11s2 == mychord.at(4) || f11s2 == mychord.at(5)) {s2f11.style.display = "block";}
		else {s2f11.style.display = "none";}
	if (f11s3 == mychord.at(0) || f11s3 == mychord.at(1) || f11s3 == mychord.at(2) || f11s3 == mychord.at(3) || f11s3 == mychord.at(4) || f11s3 == mychord.at(5)) {s3f11.style.display = "block";}
		else {s3f11.style.display = "none";}
	if (f11s4 == mychord.at(0) || f11s4 == mychord.at(1) || f11s4 == mychord.at(2) || f11s4 == mychord.at(3) || f11s4 == mychord.at(4) || f11s4 == mychord.at(5)) {s4f11.style.display = "block";}
		else {s4f11.style.display = "none";}
	if (f11s5 == mychord.at(0) || f11s5 == mychord.at(1) || f11s5 == mychord.at(2) || f11s5 == mychord.at(3) || f11s5 == mychord.at(4) || f11s5 == mychord.at(5)) {s5f11.style.display = "block";}
		else {s5f11.style.display = "none";}
	if (f11s6 == mychord.at(0) || f11s6 == mychord.at(1) || f11s6 == mychord.at(2) || f11s6 == mychord.at(3) || f11s6 == mychord.at(4) || f11s6 == mychord.at(5)) {s6f11.style.display = "block";}
		else {s6f11.style.display = "none";}
		
	if (f12s1 == mychord.at(0) || f12s1 == mychord.at(1) || f12s1 == mychord.at(2) || f12s1 == mychord.at(3) || f12s1 == mychord.at(4) || f12s1 == mychord.at(5)) {s1f12.style.display = "block";}
		else {s1f12.style.display = "none";}
	if (f12s2 == mychord.at(0) || f12s2 == mychord.at(1) || f12s2 == mychord.at(2) || f12s2 == mychord.at(3) || f12s2 == mychord.at(4) || f12s2 == mychord.at(5)) {s2f12.style.display = "block";}
		else {s2f12.style.display = "none";}
	if (f12s3 == mychord.at(0) || f12s3 == mychord.at(1) || f12s3 == mychord.at(2) || f12s3 == mychord.at(3) || f12s3 == mychord.at(4) || f12s3 == mychord.at(5)) {s3f12.style.display = "block";}
		else {s3f12.style.display = "none";}
	if (f12s4 == mychord.at(0) || f12s4 == mychord.at(1) || f12s4 == mychord.at(2) || f12s4 == mychord.at(3) || f12s4 == mychord.at(4) || f12s4 == mychord.at(5)) {s4f12.style.display = "block";}
		else {s4f12.style.display = "none";}
	if (f12s5 == mychord.at(0) || f12s5 == mychord.at(1) || f12s5 == mychord.at(2) || f12s5 == mychord.at(3) || f12s5 == mychord.at(4) || f12s5 == mychord.at(5)) {s5f12.style.display = "block";}
		else {s5f12.style.display = "none";}
	if (f12s6 == mychord.at(0) || f12s6 == mychord.at(1) || f12s6 == mychord.at(2) || f12s6 == mychord.at(3) || f12s6 == mychord.at(4) || f12s6 == mychord.at(5)) {s6f12.style.display = "block";}
		else {s6f12.style.display = "none";}
		
	if (f13s1 == mychord.at(0) || f13s1 == mychord.at(1) || f13s1 == mychord.at(2) || f13s1 == mychord.at(3) || f13s1 == mychord.at(4) || f13s1 == mychord.at(5)) {s1f13.style.display = "block";}
		else {s1f13.style.display = "none";}
	if (f13s2 == mychord.at(0) || f13s2 == mychord.at(1) || f13s2 == mychord.at(2) || f13s2 == mychord.at(3) || f13s2 == mychord.at(4) || f13s2 == mychord.at(5)) {s2f13.style.display = "block";}
		else {s2f13.style.display = "none";}
	if (f13s3 == mychord.at(0) || f13s3 == mychord.at(1) || f13s3 == mychord.at(2) || f13s3 == mychord.at(3) || f13s3 == mychord.at(4) || f13s3 == mychord.at(5)) {s3f13.style.display = "block";}
		else {s3f13.style.display = "none";}
	if (f13s4 == mychord.at(0) || f13s4 == mychord.at(1) || f13s4 == mychord.at(2) || f13s4 == mychord.at(3) || f13s4 == mychord.at(4) || f13s4 == mychord.at(5)) {s4f13.style.display = "block";}
		else {s4f13.style.display = "none";}
	if (f13s5 == mychord.at(0) || f13s5 == mychord.at(1) || f13s5 == mychord.at(2) || f13s5 == mychord.at(3) || f13s5 == mychord.at(4) || f13s5 == mychord.at(5)) {s5f13.style.display = "block";}
		else {s5f13.style.display = "none";}
	if (f13s6 == mychord.at(0) || f13s6 == mychord.at(1) || f13s6 == mychord.at(2) || f13s6 == mychord.at(3) || f13s6 == mychord.at(4) || f13s6 == mychord.at(5)) {s6f13.style.display = "block";}
		else {s6f11.style.display = "none";}
		
	if (f14s1 == mychord.at(0) || f14s1 == mychord.at(1) || f14s1 == mychord.at(2) || f14s1 == mychord.at(3) || f14s1 == mychord.at(4) || f14s1 == mychord.at(5)) {s1f14.style.display = "block";}
		else {s1f14.style.display = "none";}
	if (f14s2 == mychord.at(0) || f14s2 == mychord.at(1) || f14s2 == mychord.at(2) || f14s2 == mychord.at(3) || f14s2 == mychord.at(4) || f14s2 == mychord.at(5)) {s2f14.style.display = "block";}
		else {s2f14.style.display = "none";}
	if (f14s3 == mychord.at(0) || f14s3 == mychord.at(1) || f14s3 == mychord.at(2) || f14s3 == mychord.at(3) || f14s3 == mychord.at(4) || f14s3 == mychord.at(5)) {s3f14.style.display = "block";}
		else {s3f14.style.display = "none";}
	if (f14s4 == mychord.at(0) || f14s4 == mychord.at(1) || f14s4 == mychord.at(2) || f14s4 == mychord.at(3) || f14s4 == mychord.at(4) || f14s4 == mychord.at(5)) {s4f14.style.display = "block";}
		else {s4f14.style.display = "none";}
	if (f14s5 == mychord.at(0) || f14s5 == mychord.at(1) || f14s5 == mychord.at(2) || f14s5 == mychord.at(3) || f14s5 == mychord.at(4) || f14s5 == mychord.at(5)) {s5f14.style.display = "block";}
		else {s5f14.style.display = "none";}
	if (f14s6 == mychord.at(0) || f14s6 == mychord.at(1) || f14s6 == mychord.at(2) || f14s6 == mychord.at(3) || f14s6 == mychord.at(4) || f14s6 == mychord.at(5)) {s6f14.style.display = "block";}
		else {s6f14.style.display = "none";}
		
	if (f15s1 == mychord.at(0) || f15s1 == mychord.at(1) || f15s1 == mychord.at(2) || f15s1 == mychord.at(3) || f15s1 == mychord.at(4) || f15s1 == mychord.at(5)) {s1f15.style.display = "block";}
		else {s1f15.style.display = "none";}
	if (f15s2 == mychord.at(0) || f15s2 == mychord.at(1) || f15s2 == mychord.at(2) || f15s2 == mychord.at(3) || f15s2 == mychord.at(4) || f15s2 == mychord.at(5)) {s2f15.style.display = "block";}
		else {s2f15.style.display = "none";}
	if (f15s3 == mychord.at(0) || f15s3 == mychord.at(1) || f15s3 == mychord.at(2) || f15s3 == mychord.at(3) || f15s3 == mychord.at(4) || f15s3 == mychord.at(5)) {s3f15.style.display = "block";}
		else {s3f15.style.display = "none";}
	if (f15s4 == mychord.at(0) || f15s4 == mychord.at(1) || f15s4 == mychord.at(2) || f15s4 == mychord.at(3) || f15s4 == mychord.at(4) || f15s4 == mychord.at(5)) {s4f15.style.display = "block";}
		else {s4f15.style.display = "none";}
	if (f15s5 == mychord.at(0) || f15s5 == mychord.at(1) || f15s5 == mychord.at(2) || f15s5 == mychord.at(3) || f15s5 == mychord.at(4) || f15s5 == mychord.at(5)) {s5f15.style.display = "block";}
		else {s5f15.style.display = "none";}
	if (f15s6 == mychord.at(0) || f15s6 == mychord.at(1) || f15s6 == mychord.at(2) || f15s6 == mychord.at(3) || f15s6 == mychord.at(4) || f15s6 == mychord.at(5)) {s6f15.style.display = "block";}
		else {s6f11.style.display = "none";}
		
	if (f16s1 == mychord.at(0) || f16s1 == mychord.at(1) || f16s1 == mychord.at(2) || f16s1 == mychord.at(3) || f16s1 == mychord.at(4) || f16s1 == mychord.at(5)) {s1f16.style.display = "block";}
		else {s1f16.style.display = "none";}
	if (f16s2 == mychord.at(0) || f16s2 == mychord.at(1) || f16s2 == mychord.at(2) || f16s2 == mychord.at(3) || f16s2 == mychord.at(4) || f16s2 == mychord.at(5)) {s2f16.style.display = "block";}
		else {s2f16.style.display = "none";}
	if (f16s3 == mychord.at(0) || f16s3 == mychord.at(1) || f16s3 == mychord.at(2) || f16s3 == mychord.at(3) || f16s3 == mychord.at(4) || f16s3 == mychord.at(5)) {s3f16.style.display = "block";}
		else {s3f16.style.display = "none";}
	if (f16s4 == mychord.at(0) || f16s4 == mychord.at(1) || f16s4 == mychord.at(2) || f16s4 == mychord.at(3) || f16s4 == mychord.at(4) || f16s4 == mychord.at(5)) {s4f16.style.display = "block";}
		else {s4f16.style.display = "none";}
	if (f16s5 == mychord.at(0) || f16s5 == mychord.at(1) || f16s5 == mychord.at(2) || f16s5 == mychord.at(3) || f16s5 == mychord.at(4) || f16s5 == mychord.at(5)) {s5f16.style.display = "block";}
		else {s5f16.style.display = "none";}
	if (f16s6 == mychord.at(0) || f16s6 == mychord.at(1) || f16s6 == mychord.at(2) || f16s6 == mychord.at(3) || f16s6 == mychord.at(4) || f16s6 == mychord.at(5)) {s6f16.style.display = "block";}
		else {s6f11.style.display = "none";}
		
	if (f17s1 == mychord.at(0) || f17s1 == mychord.at(1) || f17s1 == mychord.at(2) || f17s1 == mychord.at(3) || f17s1 == mychord.at(4) || f17s1 == mychord.at(5)) {s1f17.style.display = "block";}
		else {s1f17.style.display = "none";}
	if (f17s2 == mychord.at(0) || f17s2 == mychord.at(1) || f17s2 == mychord.at(2) || f17s2 == mychord.at(3) || f17s2 == mychord.at(4) || f17s2 == mychord.at(5)) {s2f17.style.display = "block";}
		else {s2f17.style.display = "none";}
	if (f17s3 == mychord.at(0) || f17s3 == mychord.at(1) || f17s3 == mychord.at(2) || f17s3 == mychord.at(3) || f17s3 == mychord.at(4) || f17s3 == mychord.at(5)) {s3f17.style.display = "block";}
		else {s3f17.style.display = "none";}
	if (f17s4 == mychord.at(0) || f17s4 == mychord.at(1) || f17s4 == mychord.at(2) || f17s4 == mychord.at(3) || f17s4 == mychord.at(4) || f17s4 == mychord.at(5)) {s4f17.style.display = "block";}
		else {s4f17.style.display = "none";}
	if (f17s5 == mychord.at(0) || f17s5 == mychord.at(1) || f17s5 == mychord.at(2) || f17s5 == mychord.at(3) || f17s5 == mychord.at(4) || f17s5 == mychord.at(5)) {s5f17.style.display = "block";}
		else {s5f17.style.display = "none";}
	if (f17s6 == mychord.at(0) || f17s6 == mychord.at(1) || f17s6 == mychord.at(2) || f17s6 == mychord.at(3) || f17s6 == mychord.at(4) || f17s6 == mychord.at(5)) {s6f17.style.display = "block";}
		else {s6f17.style.display = "none";}
	
	if (f18s1 == mychord.at(0) || f18s1 == mychord.at(1) || f18s1 == mychord.at(2) || f18s1 == mychord.at(3) || f18s1 == mychord.at(4) || f18s1 == mychord.at(5)) {s1f18.style.display = "block";}
		else {s1f18.style.display = "none";}
	if (f18s2 == mychord.at(0) || f18s2 == mychord.at(1) || f18s2 == mychord.at(2) || f18s2 == mychord.at(3) || f18s2 == mychord.at(4) || f18s2 == mychord.at(5)) {s2f18.style.display = "block";}
		else {s2f18.style.display = "none";}
	if (f18s3 == mychord.at(0) || f18s3 == mychord.at(1) || f18s3 == mychord.at(2) || f18s3 == mychord.at(3) || f18s3 == mychord.at(4) || f18s3 == mychord.at(5)) {s3f18.style.display = "block";}
		else {s3f18.style.display = "none";}
	if (f18s4 == mychord.at(0) || f18s4 == mychord.at(1) || f18s4 == mychord.at(2) || f18s4 == mychord.at(3) || f18s4 == mychord.at(4) || f18s4 == mychord.at(5)) {s4f18.style.display = "block";}
		else {s4f18.style.display = "none";}
	if (f18s5 == mychord.at(0) || f18s5 == mychord.at(1) || f18s5 == mychord.at(2) || f18s5 == mychord.at(3) || f18s5 == mychord.at(4) || f18s5 == mychord.at(5)) {s5f18.style.display = "block";}
		else {s5f18.style.display = "none";}
	if (f18s6 == mychord.at(0) || f18s6 == mychord.at(1) || f18s6 == mychord.at(2) || f18s6 == mychord.at(3) || f18s6 == mychord.at(4) || f18s6 == mychord.at(5)) {s6f18.style.display = "block";}
		else {s6f18.style.display = "none";}
	}