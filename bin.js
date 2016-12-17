function fullon(e){
	if (e=='hot') {
		document.getElementById('main_hot').classList.remove('tile_hot');
		document.getElementById('main_hot').classList.add('big_tile');
		document.getElementById('main_hot').onclick=function(){fulloff('hot')}
		document.getElementById('main_hot').innerHTML+=hot_menu;
	} else if (e=='classic') {
		document.getElementById('main_classic').classList.remove('tile_classic');
		document.getElementById('main_classic').classList.add('big_tile');
		document.getElementById('main_classic').onclick=function(){fulloff('classic')}
		document.getElementById('main_classic').innerHTML+=classic_menu;
	} else if (e=='jp') {
		document.getElementById('main_jp').classList.remove('tile_jp');
		document.getElementById('main_jp').classList.add('big_tile');
		document.getElementById('main_jp').onclick=function(){fulloff('jp')}
		document.getElementById('main_jp').innerHTML+=jp_menu;
	};
}

function fulloff(e){
	if (e=='hot') {
		document.getElementById('main_hot').classList.add('tile_hot');
		document.getElementById('main_hot').classList.remove('big_tile');
		del('hot_menu')
		document.getElementById('main_hot').onclick=function(){fullon('hot')}
	} else if (e=='classic') {
		document.getElementById('main_classic').classList.remove('big_tile');
		document.getElementById('main_classic').classList.add('tile_classic');
		document.getElementById('main_classic').onclick=function(){fullon('classic')}
		del('classic_menu')
	} else if (e=='jp') {
		document.getElementById('main_jp').classList.remove('big_tile');
		document.getElementById('main_jp').classList.add('tile_jp');
		document.getElementById('main_jp').onclick=function(){fullon('jp')}
		del('jp_menu')
	};
}

hot_menu='<div id="hot_menu" class="center_box_table"><img src="hot/alaska.jpg" class="dpic2"><img src="hot/geisha.jpg" class="dpic2"><img src="hot/caiso_unagi.jpg" class="dpic2"><img src="hot/ebi_tempura.png" class="dpic2"><img src="hot/gorjchaj_mexico.jpg" class="dpic2"><img src="hot/imperia.png" class="dpic2"><img src="hot/lady_roll.jpg" class="dpic2"><img src="hot/maguro_tempura.jpg" class="dpic2"><img src="hot/midzu.png" class="dpic2"><img src="hot/teplaj_feladilfia.jpg" class="dpic2"><img src="hot/unagi.png" class="dpic2"><img src="hot/zapechenii.jpg" class="dpic2"></div>'
classic_menu='<div id="classic_menu" class="center_box_table"><img src="classic/chuka_maki.jpg" class="dpic2"> <img src="classic/ebi_maki.jpg" class="dpic2"> <img src="classic/futo_maki_ebi.jpg" class="dpic2"> <img src="classic/futo_maki_sake.jpg" class="dpic2"> <img src="classic/futo_maki_unagi.jpg" class="dpic2"> <img src="classic/in-jn.jpg" class="dpic2"> <img src="classic/jasai_roll.jpg" class="dpic2"> <img src="classic/kappa_maki.jpg" class="dpic2"> <img src="classic/nara.jpg" class="dpic2"> <img src="classic/nidzi.jpg" class="dpic2"> <img src="classic/teishoku.jpg" class="dpic2"> <img src="classic/tekka_maki.jpg" class="dpic2"> <img src="classic/unagi_maki.jpg" class="dpic2"> <img src="classic/xxx.jpg" class="dpic2"> </div>'
jp_menu='<div id="jp_menu" class="center_box_table"> <img src="jp/adjizu.jpg" class="dpic2"> <img src="jp/daikoky.jpg" class="dpic2"> <img src="jp/enoki.jpg" class="dpic2"> <img src="jp/filadelfia.jpg" class="dpic2"> <img src="jp/gampi.jpg" class="dpic2"> <img src="jp/hotate.jpg" class="dpic2"> <img src="jp/ikuta.jpg" class="dpic2"> <img src="jp/inari.jpg" class="dpic2"> <img src="jp/jru.jpg" class="dpic2"> <img src="jp/maikery.jpg" class="dpic2"> <img src="jp/matava.jpg" class="dpic2"> <img src="jp/megumi.jpg" class="dpic2"> <img src="jp/nakime.jpg" class="dpic2"> <img src="jp/oishi.jpg" class="dpic2"> <img src="jp/saman.jpg" class="dpic2"> <img src="jp/savara.jpg" class="dpic2"> <img src="jp/sitori.jpg" class="dpic2"> <img src="jp/sladkii_roll.jpg" class="dpic2"> <img src="jp/sqigo.jpg" class="dpic2"> <img src="jp/vatashi.jpg" class="dpic2"> <img src="jp/zapechenaj_filadelfia.jpg" class="dpic2"> <img src="jp/zapechenie.jpg" class="dpic2"> </div>'

function del(nid){
	idElem = document.getElementById(nid);
	idElem.parentNode.removeChild(idElem);
}