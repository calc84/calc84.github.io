/*  Copyright © 2014 SmartCAS, N. PUJOL
    contact at contact@calcenstock.fr
	
    This file is part of SmartCAS, developed for <http://www.calcenstock.fr>.
    SmartCAS is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    SmartCAS is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with SmartCAS (file:COPYING.txt).
	If not, see <http://www.gnu.org/licenses/gpl.html>.
*/

var jqr=jQuery;    // $ en conflit avec giac.js
var keyb = 1;
var input;
var exprlatex='';
var exprscas='';
var resultat='';
var complex=['complex_mode:=',0,'#number','réel','complexe','#c','passer en complexe','passer en réel'];   //0 pour mode réel (défaut) 1 pour complexe
var radian=['angle_radian:=',1,'#angle','degré','radian','#r','passer en radian','passer en degré'];     //1 pour angle en radian (défaut) 0 pour degré
//var sys = 1;
var fct='';
var vari='';
var msg = '';
var alpha = false;
var second = false;
let curr = 0;
let graphing = true;


function parenthese(x,pos){
	var parenouv = 1;
    var parenferm = 0;
    var pos2 = pos;
    while(parenouv!=parenferm){
      if(x.indexOf("(",pos2+1) < x.indexOf(")",pos2+1) && x.indexOf("(",pos2+1)>-1){
		parenouv = parenouv+1;
		pos2 = x.indexOf("(",pos2+1);
	  }
	  else {
		parenferm = parenferm+1;
		pos2 = x.indexOf(")",pos2+1);
		
	  };
	  };
    return pos2;
};

function set(tab){                                                            //réglages réel-complexe ou radian-degré
	caseval = Module.cwrap('caseval', 'string', ['string']);
	tab[1]=1-1*(tab[1]==1);
	caseval(tab[0]+tab[1]);
	if(tab[1]){
		jqr(tab[2]).text(tab[4]);
		jqr(tab[5]).prop('value',tab[7]);
	}else{
		jqr(tab[2]).text(tab[3]);
		jqr(tab[5]).prop('value',tab[6]);
	};
	jqr(input).mathquill('cmd','1').mathquill('onKey','Backspace');
};

function calcthis(x){
    caseval = Module.cwrap('caseval', 'string', ['string']);
	return caseval(x);	
}

function resoudeq(x){
    if(exprscas.indexOf('desolve')>-1){
	    if(resultat=='impossible') affichage(exprlatex,'',x);
		else{
		   x = traiteresultat(x);
		   affichage(exprlatex,fct+'('+vari+')=',x);
		}
	}
	else{
	x = x.replace("\\{","\\left\\{");
	x = x.replace("\\}","\\right\\}");
	if(x.indexOf('>')>-1 || x.indexOf('<')>-1 || x.indexOf('\\geq')>-1){
	         x = x.replace(/,/g,"\\esp ou\\esp ");
			 x = x.replace(/\\mbox{ and }/g,"\\esp et\\esp ");
	}
	else if(x.indexOf('array')>-1){
	              x = x.replace(/\\begin{array}{c*}/g,"");
		          x = x.replace(/\\end{array}/g,"");
		          x = x.replace(/&/g,";");
				  x = x.replace(/\\\\/g,"\\right);\\left(");
		          x = "\\left\\{"+x+"\\right\\}";
	     }
		 else x = x.replace(/,/g,";");
	x = traiteresultat(x);
	if(exprlatex.indexOf('system')>-1){
	     jqr('<span class="expreval"/>').appendTo('#fenetre').mathquill('editable');
		 input=jqr("#fenetre").find(".expreval").last();
		 affsys(jqr('#prop').mathquill('text'));
		 jqr(input).removeClass('mathquill-editable');
	     input='#prop';
		 affichage('','S=',x); 
		 jqr('#newsyslin').remove();
		 }   
	else affichage(exprlatex,'S=',x);
	}
	clearp();
	return x;
};

function simplifie(){
	exprlatex=jqr(input).mathquill('latex');
    exprlatex=exprlatex.replace(/\\:/g,"" );
    if(exprlatex==''){alert('saisir une expression à simplifier');jqr(input).mathquill('cmd','');}
    else{
       exprscas=jqr(input).mathquill('scas');
	   if(exprscas.indexOf("solve")>-1){
		  alert('pas une expression à simplifier');
	   }
	   else{
		  exprscas='latex(simplify('+exprscas+'))';
		  resultat = calcthis(exprscas);
	      resultat = traiteresultat(resultat);
	      affichage(exprlatex,'=\\esp ',resultat);
	    };
    };
	clearp();
};

function factorise(){
	exprlatex=jqr(input).mathquill('latex');
    exprlatex=exprlatex.replace(/\\:/g,"" );
    if(exprlatex==''){alert('saisir une expression à factoriser');jqr(input).mathquill('cmd','');}
    else{
       exprscas=jqr(input).mathquill('scas');
	   if(exprscas.indexOf("solve")>-1){
		  alert('pas une expression à factoriser');
	   }
	   else{
		  if(!jqr.isNumeric(calcthis(exprscas)) || exprscas.indexOf(".")>-1){
		    exprscas='latex(factor('+exprscas+'))';
		  }
		  else{
		    exprscas='latex(ifactor('+exprscas+'))';
		  }
		  resultat = calcthis(exprscas);
	      resultat = traiteresultat(resultat);
	      affichage(exprlatex,'=\\esp ',resultat);
	    };
    };
	clearp();
};

function teste(x,y){
	   var totest = "normal("+x+"-("+y+"))";
	   caseval = Module.cwrap('caseval', 'string', ['string']);
	   var test = caseval(totest);
	   if(test==0 || test.indexOf('0 %')>-1){          //0%*  pour les classes de Z/*Z 
		   test="vrai";
	   }
	   else{
	       test="faux";
	   };
	   return test;
};

function traiteapprox(y){           //enleve les zeros inutiles a l'ecriture decimale
    var nb;
	var pt = -1;
	do{
	    nb=0;
		pt = y.indexOf(".",pt+1);
		while(y.charAt(pt+6-nb)==0){
			nb=nb+1;
		};
		y = y.substring(0,pt+7-nb-1*(nb==6))+y.substring(pt+7);
	}while(y.indexOf(".",pt+1)>-1);
	return y;
};

function traitefrac(z){
    var on =0;
	do{
      var debfrac = z.indexOf('frac{(',on);
	  var finfrac = parenthese(z,debfrac+5);
	  if(z.indexOf(')}{')==finfrac) z = z.substring(0,debfrac+5)+ z.substring(debfrac+6,finfrac) + z.substring(finfrac+1);
	  on = z.indexOf('frac{(',finfrac+1);
	} while (z.indexOf('frac{(',on)>-1); 
    return z;
}


function traiteresultat(x){
		x=x.replace(/"/g,"");
		x=x.replace(/\*/g,"");
		x=x.replace(/\+\-/g,"-");
		x=x.replace(/\-\-/g,"+");
	    if(x.indexOf(".")>-1) x=traiteapprox(x);
	    x=x.replace(/acos/g,"cos^{-1}");
	    x=x.replace(/asin/g,"sin^{-1}");
	    x=x.replace(/atan/g,"tan^{-1}");
	    x=x.replace(/\\partial/g,"d");
	    while(x.indexOf("abs")>-1){                      //vers notation valeur absolue
		   var debutabs = x.indexOf("abs");             //exemple : \mathrm{abs}\left(valeur\right)
		   var finabs = parenthese(x,debutabs+9);       //         en |valeur|
		   x = x.substring(0,debutabs-8)+"\\left|"+x.substring(debutabs+10,finabs-6)+"\\right|"+x.substring(finabs+1);
	    };
	    while(x.indexOf("inv")>-1){                      //vers notation inverse
		   var debutinv = x.indexOf("inv");             
		   var fininv = parenthese(x,debutinv+9);       
		   x = x.substring(0,debutinv-8)+"\\frac{1}{"+x.substring(debutinv+10,fininv-6)+"}"+x.substring(fininv+1);
	    };
	    while(x.indexOf("factorial")>-1){                      //vers notation factorielle
		   var debutfac = x.indexOf("factorial");             
		   var finfac = parenthese(x,debutfac+15); 
           if(finfac-6-debutfac-15>2)		   
		       x = x.substring(0,debutfac-8)+x.substring(debutfac+15,finfac-6)+")!"+x.substring(finfac+1);
		   else x = x.substring(0,debutfac-8)+x.substring(debutfac+16,finfac-6)+"!"+x.substring(finfac+1);
	    };
		if(x.indexOf('frac{(')>-1) x=traitefrac(x);
		x=x.replace(/e\^\{1\}/g,"e");
	return x;
};

function evalue(k){                               //k=0 pour calcul approché  et k=1 pour calcul exact
	exprlatex = jqr(input).mathquill('latex');


  exprlatex=exprlatex.replace(/\\:/g,"");
  if(exprlatex==''){alert('saisir une expression à calculer');jqr(input).mathquill('cmd','');}
  else{
    exprscas=jqr(input).mathquill('scas');
	exprscas=exprscas.replace(/Re/g,"re");
    exprscas=exprscas.replace(/Im/g,"im");
	if(msg != '') {alert(msg);msg='';}
	else{
	if(exprscas.indexOf("=")>-1 && exprscas.indexOf("solve")<0 && exprscas.indexOf("subst")<0 && exprscas.indexOf("<")<0 && exprscas.indexOf(">")<0 ){       //&& exprscas.indexOf("]_")==-1
	    if(exprscas.indexOf("=")==exprscas.indexOf(":=")+1){
	        resultat = calcthis(exprscas);
			affichage(exprlatex,'','');        //ne pas écrire de résultat quand on définit avec := 
		}	
		else{
	           var egal = exprscas.indexOf("=");              //test d'une égalité
	           var gauche = exprscas.substring(0,egal);
	           var droite = exprscas.substring(egal+1);
			   resultat = teste(gauche,droite);    
			   affichage(exprlatex,"",resultat);
		};
	}
	else{
		if (k) { exprscas = 'normal(' + exprscas + ')'; } else { exprscas = 'approx(' + exprscas + ',6)'; };     //valeur exacte ou approchée suivant k
		

		resultat = calcthis(exprscas);


		resultat = 'latex('+resultat+')';
		resultat = calcthis(resultat);
		if(exprscas.indexOf("solve")>-1) {                        //cas d'une résolution : équations, inéquations, équation différentielle, système
		   if(resultat.indexOf("]")==resultat.indexOf("[")+1){
	           if(exprscas.indexOf("desolve")>-1) resultat="impossible"; else resultat = "\\nothing";
	       }
	       resultat=resoudeq(resultat);
		   return;
		};
	    resultat = traiteresultat(resultat);
		if(resultat=='true'){affichage(exprlatex,'','vrai');clearp();return}         //test d'inégalités
		else if(resultat=='false'){affichage(exprlatex,'','faux');clearp();return}
		     else if(exprscas.indexOf('iquorem')>-1){affichage(exprlatex,"[q,r]=\\esp ",resultat);clearp();return}   //quotient et reste division
		if(k){
		   affichage(exprlatex,"=\\esp ",resultat);
		}
		else {
		    affichage(exprlatex,"\\approx\\esp ",resultat);
		};
	};clearp();
	};
  };
  
};

function affichage(expr1, inter, expr2) {
	

	if (expr1 != '') {
		
    	var champ = jqr('<span class="expreval"/>').mathquill('editable').appendTo('#fenetre');input=champ;
		/*if(expr1.indexOf('matrixblabla')>-1){
		   champ.mathquill('editable');
		   input=champ;
		   affwithmat(expr1);
		   jqr(input).removeClass('mathquill-editable');
	       input='#prop';
		} else */champ.mathquill('write',expr1);
    jqr(input).removeClass('mathquill-editable');
	       input='#prop';
	}
	if(inter!=''){
	  jqr('<span class="inter"/>').mathquill().appendTo('#fenetre').mathquill('write',inter);
	}
	if(expr2!=''){
	    var champrep = jqr('<span class="resultat"/>').mathquill().appendTo('#fenetre');
		if(expr2.indexOf('array')>-1){
		   expr2 = expr2.replace(/\\left\(\\begin{array}{c*}/g,"");
		   expr2 = expr2.replace(/\\end{array}\\right\)/g,"");
		   //expr2 = expr2.replace(/ /g,"");
		   //expr2 = expr2.replace(/cdot/g,"cdot ");
		   expr2 = expr2.replace(/\n/g,'');
		   champrep.mathquill('editable');  //.mathquill('latex',inter);
		   input=champrep;
		   affmat(expr2);
		   jqr(input).removeClass('mathquill-editable');
	       input='#prop';
		} else champrep.mathquill('write',/*inter+*/expr2);
	}
	jqr('#fenetre .selectable').remove();
	jqr('#fenetre .textarea').remove();
	jqr('#fenetre').find('.cursor').remove();
	jqr('body').scrollTop(0);
	jqr("#fenetre").scrollTop(999999);
	jqr("#fenetre").scrollLeft(0);
}

function affsys(lines){
	var line = lines.split("&");
	jqr(input).mathquill('cmd','system').mathquill('write',line[0]);
    for(var k=1;k<line.length-1;k++){
	   newlin();
	   jqr(input).mathquill('write',line[k]);
	};
	jqr(input).mathquill('onKey','Right').mathquill('write',line[line.length-1]);
}

function affmat(el){
   var mat = [];
   var lines = el.split('\\\\');
   for(var k=0;k<lines.length;k++) mat[k] = lines[k].split('&');
   jqr(input).mathquill('cmd','matrix').mathquill('write',mat[0][0]);
   for(var k=1;k<mat[0].length;k++){
   	  newmatcol();
	  jqr(input).mathquill('write',mat[0][k]);
   }
   for(var j=1;j<lines.length;j++){
      newmatlin();
	  jqr(input).mathquill('write',mat[j][0]);
	  for(var k=1;k<mat[j].length;k++){
	    jqr(input).mathquill('onKey','Right').mathquill('write',mat[j][k]);
	  }
   }
   jqr(input).mathquill('onKey','Right');//.mathquill('cmd','');
}

function affwithmat(x){
  var block = x.split('matrix');
  for(j=0;j<block.length;j++){
     if(j%2 == 0) jqr(input).mathquill('write',block[j]);
	 else affmat(block[j]);
  }
}

function ouverture(){
	jqr(input).mathquill('latex','');
	aidemoi();
}

function keyd(event) {
	
	if (graphing) {
		input = `#${curr}`;
	} else {
		input = '#prop';
	}

     if(keyb || event.which ==13){
	    keyb = 0;
		jqr(input).focus();
		var keyval = event.which;
        switch(keyval){
		  case 13:event.preventDefault();evalue(1);break;
		  default : jqr(input).trigger(event);
        }
	}
}

function move(dir){
    //if(dir=='Up' || dir=='Down')  jqr(input).mathquill('onKey',dir);
    //else
	jqr(input).mathquill('onKey',dir);
}

function clearp(){
	jqr(input).mathquill('latex','');
	if(jqr('#newsyslin')) jqr('#newsyslin').remove();
	if(jqr('#boutmat')) jqr('#boutmat').remove();
	if(jqr('#boutidn')) jqr('#boutidn').remove();
}

function clearall(){
	jqr('#fenetre').html('').width('95%');
}

function bis(){
    var precedent = jqr("#fenetre").find(".expreval").last();
	if(precedent) {

	   if(precedent.mathquill('latex').indexOf('system')>-1){
	      affsys(precedent.mathquill('text'));
		  boutsys();
	   }	  
	   else jqr(input).mathquill('write',precedent.mathquill('latex'));
	   if(precedent.mathquill('latex').indexOf('idn')>-1) boutidn();
	   if(precedent.mathquill('latex').indexOf('matrix')>-1) boutmat();
	}
}

function ans(){
	//if(resultat != '') jqr(input).mathquill('write',resultat);
	var precedent = jqr("#fenetre").find(".resultat").last();
	if(precedent){
    	jqr(input).mathquill('write',precedent.mathquill('latex'));
	    if(precedent.mathquill('latex').indexOf('idn')>-1) boutidn();
	    if(precedent.mathquill('latex').indexOf('matrix')>-1) boutmat();
	}
}

function action(kb) {
	
	if (graphing) {
		input = `#${curr}`;
	} else {
		input = '#prop';
	}

	jqr(input).mathquill('cmd',kb);
	switch(kb){
		case 'ln': jqr(input).mathquill('cmd', '(');return;
		case 'cos': jqr(input).mathquill('cmd', '(');return;
		case 'sin': jqr(input).mathquill('cmd', '(');return;
		case 'tan': jqr(input).mathquill('cmd', '(');return;
		default : return;
	}
}

function menu(me){
    jqr('.visible').removeClass("visible").addClass("cache");
	jqr('#'+me).removeClass("cache").addClass("visible");
}

function back(me){
    jqr('#'+me).removeClass("visible").addClass("cache");
    jqr('#standard').removeClass("cache").addClass("visible");
}

function rel(){
    jqr('.toprel').find("ul.subrel").slideUp('fast').show();
}

function optn(){
    jqr('#option').find("ul.suboptn").slideUp('fast').show();
}

function system(){
   action('system');
   boutsys();
}

function matrix(){
   action('matrix');
   boutmat();
}

function idn(){
   action('idn');
   boutidn();
}

function clavier(code){
  var evt = jQuery.Event( 'keydown', { keyCode: code } );
  keyb = 0;
  jqr(input).trigger(evt);
}

function newlin(){
  var evt = jQuery.Event( 'keydown', { keyCode: 45 } );
  keyb = 0;
  jqr(input).trigger(evt);
}

function newmatlin(){
  var evt = jQuery.Event( 'keydown', { keyCode: 45 } );
  keyb = 0;
  jqr(input).trigger(evt);
}

function newmatcol(){
  var evt = jQuery.Event( 'keydown', { keyCode: 35 } );
  keyb = 0;
  jqr(input).trigger(evt);
}

function boutsys(){
   jqr('#newsyslin').remove();
   jqr('<input type="button" style="height:35px" id="newsyslin" value="EQ+" onclick="newlin()">').appendTo('#saisie');
}

function boutmat(){
   jqr('#boutmat').remove();
   jqr('<span id="boutmat"></span>').appendTo('#saisie');
   jqr('<input type="button" style="height:35px" value="L+" onclick="newmatlin()">').appendTo('#boutmat');
   jqr('<input type="button" style="height:35px" value="C+" onclick="newmatcol()">').appendTo('#boutmat');
}

function boutidn(){
   jqr('#boutidn').remove();
   jqr('<input type="button" style="height:35px" id="boutidn" value="&#9654;MAT" onclick="clavier(45)">').appendTo('#saisie');
}

function backsp(){
var evt = jQuery.Event( 'keydown', { which: 8 } );
keyb = 0;
jqr(input).trigger(evt);
}

function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click();
}

function downloadto(content, filename, contentType)
{
    if(!contentType) contentType = 'application/octet-stream';
        var a = document.createElement('a');
        var blob = new Blob([content], {'type':contentType});
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.click();
}

function print(){
   jqr('body').append('<div id="fake"></div>');
   var element = jqr('#fake');
   var styles = {
      'background' : 'white',
      'color': 'blue',
	  'font-size': '130%',
	  'min-height': '150px',
	  'max-width': '1024px',
	  'padding-top': '5px',
	  'text-align': 'center'
   };
   element.css(styles);
   element.html(jqr('#fenetre').html());
   html2canvas(element, {
        onrendered: function(canvas) {
           document.body.appendChild(canvas);
		}
   });
   setTimeout(function() { jQuery('#fake').remove() }, 100);
}


function toggleAlpha() {
	if (alpha) {
		alpha = false;
		document.getElementById('alp').innerHTML = '';
	} else {
		alpha = true;
		document.getElementById('alp').innerHTML = 'A';
	}

	second = false;
	
}

function toggleSecond() {
	if (second) {
		second = false;
		document.getElementById('alp').innerHTML = '';
	} else {
		second = true;
		document.getElementById('alp').innerHTML = '2nd';
	}

	alpha = false;

}

function alphaFalse() {

	alpha = false;
	second = false; 
	document.getElementById('alp').innerHTML = '';

}

function handleAction(mainInput, alphaInput, secondInput) {
	if (alpha) {
		action(alphaInput);
	} else if (second) {
		if (secondInput === '10^') {
			action('1');
			action('0');
			action('^');
		} else {
			action(secondInput);
		}

	} else {
		action(mainInput);
	}
	alphaFalse();
}

function testing() {


	/* var champ = jqr('<span class="expreval function"/>').mathquill('editable').appendTo('#curr');
	input = champ;

	champ.mathquill('write', '\\logb{10}{1}');
	jqr(input).removeClass('mathquill-editable');
	input = '#prop'; */


	jqr(input).mathquill('cmd', kb);

	console.log("Here");

}


function changeCurr(id) {
	

	document.getElementById(`${curr}`).classList.remove('curr');
	curr = id;

	document.getElementById(`${curr}`).classList.add('curr');



}

function graph() {
	let lines = 0; 
	let datasets = [];

	for (let i = 0; i < 5; i++) {
		let data = [];

		exprscas = jqr(`#${i}`).mathquill('scas');
		exprscas = exprscas.replace(/Re/g, "re");
		exprscas = exprscas.replace(/Im/g, "im");
		 exprscas = 'normal(' + exprscas + ')';
		resultat = calcthis(exprscas);


		if (resultat !== 'NULL') {

			for (let x = -10; x < 10; x += .25){
				data.push({
					x:x,
					y: calcthis(`evalf(subst(${resultat}, x = ${x}))`)
			});
			}

			datasets.push(
				{
					label: 'Scatter Dataset',
					showLine: true,
					data: data,
					borderColor: Utils.NAMED_COLORS[lines],
					backgroundColor: Utils.transparentize(NAMED_COLORS[lines], 0.64),

				});
				/* datasets.push({
					label: 'Scatter Dataset',
					showLine: true,
					data: [{
						x: -10,
						y:11
					}, {
						x: 0,
						y: 11
					}, {
						x: 10,
						y: 11
					}],
					borderColor: Utils.NAMED_COLORS[lines],
					backgroundColor: Utils.transparentize(NAMED_COLORS[lines], 0.64),
					fill:'-1'

				}); */
			
			lines++;

		}


	}
	addLine(myChart, datasets);

}