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

//var jqr=jQuery;    // $ en conflit avec giac.js --- déclarer ici dans smartcas.js
var interaide;
var aide = {
//OPTIONS
   'optionmenu':'<span class="titremenu"><img alt="optn" src="images/settingmin.png" style="background:#0F056B"/>&nbsp;<strong>CHANGER LES PARAMETRES</strong></span>',
   'nbmenu':'<h3>Passer en complexe/passer en réel</h3>'
             +'<p>'
		     +'Permet de trvailler en mode complexe ou en mode réel (par défaut).'
		     +'</p>',
   'anglemenu':'<h3>Passer en degré/passer en radian</h3>'
             +'<p>'
		     +'Permet de travailler en mode degré ou en mode radian (par défaut).'
		     +'</p>',
   'aidemenu':'<h3>Afficher aide</h3>'
             +'<p>'
		     +'Permet d\'activer ou de désactiver l\'affichage de l\'aide lors de la saisie de commandes particulières.'
		     +'</p>',
//menu CALC	
   'standmenu':'<span class="titremenu"><strong>MENU STANDARD</strong></span>',
   'paren':'<h3>Parenthèses</h3>',
   'frac':'<h3>Fraction</h3>',
   'sqrt':'<h3>Racine carrée</h3>',
   'square':'<h3>Carré</h3>',
   'sup':'<h3>Puissance</h3>',
   'sub':'<h3>Indice</h3>',
   'infty':'<h3>Symbole infini</h3>',
   'equal':'<h3>Symbole égal</h3>',    
   'def':'<h3>Définir une variable</h3>'
          +'<p>'
		  +'Stocke le second argument dans la variable ou fonction donnée comme premier argument.'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">a:=3</span><br />'
		  +'<span class="aidetex">f(x):=x^2+1</span>',
   'virg':'<h3>Virgule</h3>'
          +'<p>'
		  +'Sépare les éléments d\'une liste.'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'Equation et condition initiale dans une équation différentielle : <span class="aidetex">y\'-2y=0,y(2)=3</span><br />'
		  +'Variables dans un système : <span class="aidetex">vars=x,y,z</span>',
   'rel':'<h3>Inégalités</h3>'
          +'<p>'
		  +'Regroupe tous les symboles des inégalités.<br />'
		  +'<img alt="inf" src="images/leb.png"/><img alt="sup" src="images/geb.png"/><img alt="infegal" src="images/leqb.png"/><img alt="supegal" src="images/geqb.png"/>'
		  +'</p>', 
//menu CALC	
    'calcmenu':'<span class="titremenu"><strong>MENU "CALC"</strong></span>',  
	'diff':'<h3>Dérivée</h3>'
          +'<span class="aidetex">\\diff{\\< variable\\>}{\\< expr\\esp ou \\esp fct\\>}</span>'
          +'<p>'
		  +'Dérivée d\'une expression ou d\'une fonction préalablement définie par rapport à la variable.'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">\\diff{x}{\\left(a\\cdot x^3+2x^2\\right)}</span><br />'
		  +'<span class="aidetex">\\diff{t}{f(t)}</span>',
	'diff2':'<h3>Dérivée</h3>'
	      +'<span class="aidetex">\\< fonction\\>\'</span>'
          +'<p>'
		  +'Dérivée (éventuellement multiple si répétée) d\'une fonction préalablement définie.'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">f\'(x)</span><br />'
		  +'<span class="aidetex">g\'\'\'(t)</span>',
	'diffn':'<h3>Dérivée d\'ordre supérieur</h3>'
          +'<span class="aidetex">\\diffn{\\< ordre\\>}{\\< variable\\>}{\\< ordre\\>}{\\< expr\\esp ou \\esp fct\\>}</span>'
          +'<p>'
		  +'Dérivée d\'ordre \< ordre\> d\'une expression ou d\'une fonction préalablement définie par rapport à la variable.'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">\\diffn{5}{x}{5}{a\\cdot x^7}</span><br />'
		  +'<span class="aidetex">\\diffn{3}{t}{3}{f(t)}</span>',
	'prim':'<h3>Primitive</h3>'
          +'<span class="aidetex">\\prim{\\< expr\\esp ou \\esp fct\\>}{\\< variable\\>}</span>'
          +'<p>'
		  +'Primitive d\'une expression ou d\'une fonction préalablement définie.'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">\\prim{3t^2+a\\esp }{t}</span><br />'
		  +'<span class="aidetex">\\prim{g(x)}{x}</span>',
	'integ':'<h3>Intégrale définie ou généralisée</h3>'
          +'<span class="aidetex">\\integ{\\< borne1\\>}{\\< borne2\\>}{\\< fct\\>}{\\< variable\\>}</span>'
          +'<p>'
		  +'Intégrale d\'une expression ou d\'une fonction préalablement définie entre les bornes borne1 et borne2 qui peuvent être infinies.'
		  +'<br />Pour une intégrale double ou plus, cumuler la commande.'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">\\integ{-1}{5}{3t^2\\esp }{t}</span><br />'
		  +'<span class="aidetex">\\integ{0}{+\\infty}{\\frac{1}{1+t^2}}{t}</span><br />'
		  +'<span class="aidetex">\\integ{0}{2}{\\integ{0}{1}{x^2+y\\esp }{x}}{y}</span>',
	'lim':'<h3>Limite</h3>'
          +'<span class="aidetex">\\limperso{\\< variable\\>}{\\< borne\\>}{\\< fct\\>}</span>'
          +'<p>'
		  +'Limite d\'une fonction quand la variable tend vers borne qui peut être infinie.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\limperso{x}{+\\infty}{\\frac{1}{x}}</span>',
	'limsi':'<h3>Limite inférieure ou supérieure</h3>'
          +'<span class="aidetex">\\limsupinf{\\< variable\\>}{\\< nombre\\>}{\\pm}{\\< fct\\>}</span>'
          +'<p>'
		  +'Limite d\'une fonction quand la variable tend vers un nombre par valeurs inférieures si <span class="aidetex">-</span> ou par valeurs supérieures si <span class="aidetex">+</span>.'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">\\limsupinf{x}{2}{+}{\\frac{1}{x-2}}</span><br />'
		  +'<span class="aidetex">\\limsupinf{x}{0}{-}{e^\\frac{1}{x}}</span>',	
	'somme':'<h3>Somme des valeurs d\'une expression</h3>'
          +'<span class="aidetex">\\somme{\\< var\\>}{\\< début\\>}{\\< fin\\>}{\\< expression\\>}</span>'
          +'<p>'
		  +'Somme des valeurs de l\'expression pour var variant de début à fin avec un pas de 1.<br />'
		  +'Si début > fin, renvoie l\'opposé de la somme de fin+1 à début-1.'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">\\somme{n}{1}{10}{\\frac{1}{n}}</span>',
	'produit':'<h3>Produit des valeurs d\'une expression</h3>'
          +'<span class="aidetex">\\produit{\\< var\\>}{\\< début\\>}{\\< fin\\>}{\\< expression\\>}</span>'
          +'<p>'
		  +'Produit des valeurs de l\'expression pour var variant de début à fin avec un pas de 1.<br />'
		  +'Si début > fin, renvoie l\'inverse du produit de fin+1 à début-1.'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">\\produit{k}{1}{4}{\\left(k^2+1\\right)}</span>',	
//menu EXPR
    'exprmenu':'<span class="titremenu"><strong>MENU "EXPR"</strong></span>',
	'eq':'<h3>Résolution d\'équation et d\'inéquation</h3>'
          +'<span class="aidetex">\\equation{\\< eq\\esp ou \\esp ineq\\>}{\\< inconnue\\>}</span>'
          +'<p>'
		  +'Résout l\'équation ou l\'inéquation saisie.<br />'
		  +'Si le symbole = est omis dans eq, l\'équation résolue sera eq=0'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">\\equation{3t^2-1=5}{t}</span><br />'
		  +'<span class="aidetex">\\equation{(x-1)(x+3)>0}{x}</span>',
	'system':'<h3>Résolution de système</h3>'
          +'<span class="aidetex">\\system{\\< les\\esp eq\\>}{\\< liste\\esp des\\esp inconnues\\>}</span>'
          +'<p>'
		  +'Résout le système d\'équations saisies.<br />'
		  +'Pour ajouter une équation, appuyer sur le bouton EQ+ ou sur la touche \'Inser\' du clavier.<br />'
		  +'Séparer les inconnues par une virgule.<br />'
		  +'Si le symbole = est omis dans une eq, l\'équation considérée sera eq=0'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">\\sysexemple{x+y-2z=0}{-2x+3y+z=-1}{3x-2y+3z=5}{x,y,z}</span>',
	'eqdiff':'<h3>Résolution d\'équation différentielle</h3>'
          +'<span class="aidetex">\\eqdiff{eq\\esp (,cond\\esp ini)\\esp}{\\< fct\\>}{\\< variable\\>}</span>'
          +'<p>'
		  +'Résout une équation différentielle, avec éventuellement des conditions initiales séparées par une virgule.<br />'
		  +'Si le symbole = est omis dans eq, l\'équation résolue sera eq=0'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">\\eqdiff{g\'=-x\\cdot g}{g}{x}</span><br />'
		  +'<span class="aidetex">\\eqdiff{y\'\'+4y=0\\esp ,\\esp y(0)=1\\esp ,\\esp y\'(0)=2}{y}{t}</span>',
	'subst':'<h3>Substitution de variable</h3>'
          +'<span class="aidetex">\\subst{\\< expression\\>}{\\< variable\\>}{\\< nombre\\esp ou\\esp var\\>}</span>'
          +'<p>'
		  +'Remplace dans une expression une variable non affectée par un nombre ou une autre variable.'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">\\subst{x^2-2x-2}{x}{-3}</span><br />'
		  +'<span class="aidetex">\\subst{2y-1}{y}{a}</span>',
//menu NUM
    'nummenu':'<span class="titremenu"><strong>MENU "NUM"</strong></span>',
	'floor':'<h3>Partie entière</h3>'
          +'<span class="aidetex">\\floor{\\< nombre\\>}</span>'
          +'<p>'
		  +'Renvoie la partie entière d\'un nombre réel, c\'est à dire le plus petit entier inférieur ou égal à ce nombre.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\floor{-2.4}</span>',
	'pgcd':'<h3>PGCD</h3>'
          +'<span class="aidetex">\\pgcd{\\< liste\\esp nombres\\>}</span>'
          +'<p>'
		  +'Renvoie le Plus Grand Commun Diviseur de deux ou plusieurs nombres entiers.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\pgcd{36,48,60}</span>',
	'ppcm':'<h3>PPCM</h3>'
          +'<span class="aidetex">\\ppcm{\\< liste\\esp nombres\\>}</span>'
          +'<p>'
		  +'Renvoie le Plus Petit Commun Multiple de deux ou plusieurs nombres entiers.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\ppcm{36,48,60}</span>',
	'quotient':'<h3>Quotient euclidien</h3>'
          +'<span class="aidetex">\\quotient{\\< dividende\\>}{\\< diviseur\\>}</span>'
          +'<p>'
		  +'Renvoie le quotient de la division de deux nombres entiers.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\quotient{125}{41}</span>',
	'reste':'<h3>Reste euclidien</h3>'
          +'<span class="aidetex">\\reste{\\< dividende\\>}{\\< diviseur\\>}</span>'
          +'<p>'
		  +'Renvoie le reste de la division de deux nombres entiers.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\reste{125}{41}</span>',
	'resquo':'<h3>Quotient et reste euclidien</h3>'
          +'<span class="aidetex">\\resquo{\\< dividende\\>}{\\< diviseur\\>}</span>'
          +'<p>'
		  +'Renvoie le quotient et le reste de la division de deux nombres entiers.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\resquo{125}{41}</span>',
	'modulo':'<h3>Congruence</h3>'
          +'<span class="aidetex">\\modulo{\\< entier\\esp a\\>}{\\< entier\\esp n\\>}</span>'
          +'<p>'
		  +'Renvoie la classe a modulo n, c\'est à dire un nombre de <span class="aidetex">\\frac{\\integers}{n\\integers}</span>.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\modulo{125}{41}</span>',
//menu COMP
    'compmenu':'<span class="titremenu"><strong>MENU "COMP"</strong></span>',
	're':'<h3>Partie réelle</h3>'
          +'<span class="aidetex">\\re{\\< nombre\\esp complexe\\>}</span>'
          +'<p>'
		  +'Renvoie la partie réelle d\'un nombre complexe.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\re{\\frac{1+2i}{1+i}}</span>',
	'im':'<h3>Partie imaginaire</h3>'
          +'<span class="aidetex">\\im{\\< nombre\\esp complexe\\>}</span>'
          +'<p>'
		  +'Renvoie la partie imaginaire d\'un nombre complexe.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\im{(1+3i)^2}</span>',
	'abs':'<h3>Valeur absolue ou module</h3>'
          +'<span class="aidetex">\\abs{\\< nombre\\esp réel\\esp ou \\esp complexe\\>}</span>'
          +'<p>'
		  +'Renvoie la valeur absolue d\'un nombre réel ou le module d\'un nombre complexe.'
		  +'</p>'
		  +'<h4>exemples:</h4>'
		  +'<span class="aidetex">\\abs{-4}</span><br />'
		  +'<span class="aidetex">\\abs{1+2i}</span>',
	'arg':'<h3>Argument</h3>'
          +'<span class="aidetex">\\arg{\\< nombre\\esp complexe\\>}</span>'
          +'<p>'
		  +'Renvoie l\'argument d\'un nombre complexe.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\arg{1+i}</span>',
	'conj':'<h3>Conjugué</h3>'
          +'<span class="aidetex">\\conj{\\< nombre\\esp complexe\\>}</span>'
          +'<p>'
		  +'Renvoie le conjugué d\'un nombre complexe.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\conj{-2+3i}</span>',
//menu MAT
    'matmenu':'<span class="titremenu"><strong>MENU "MAT"</strong></span>',
	'matrix':'<h3>Matrice</h3>'
          +'<p>'
		  +'Saisir une matrice.<br />'
		  +'Pour ajouter une ligne, appuyer sur le bouton L+ ou sur la touche \'Inser\' du clavier.<br />'
		  +'Pour ajouter une colonne, appuyer sur le bouton C+ ou sur la touche \'Fin\' du clavier.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\exempmat{2}{-1}{5}{3}{-4}{0}</span>',
	'idn':'<h3>Matrice Identité</h3>'
	      +'<span class="aidetex">\\idn{\\< entier \\esp n\\>}</span>'
          +'<p>'
		  +'Renvoie la matrice identité d\'ordre n (entier naturel).<br />'
		  +'Pour l\'afficher sous sa forme matricielle après avoir saisi n, appuyer sur le bouton \'&#9654;MAT\' ou sur la touche \'Inser\' du clavier.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\idn{3}\\esp\\esp\\esp \\text{ou} \\esp\\esp\\esp\\idnnn</span>',
	'det':'<h3>Déterminant</h3>'
	      +'<span class="aidetex">\\det{\\< matrice\\>}</span>'
          +'<p>'
		  +'Renvoie le déterminant d\'une matrice carrée.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\det{\\exempmatcar{2}{3}{-4}{1}}</span>',
	'tran':'<h3>Transposée</h3>'
	      +'<span class="aidetex">\\tran{\\< matrice\\>}</span>'
          +'<p>'
		  +'Renvoie la transposée d\'une matrice.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\tran{\\exempmat{2}{-1}{5}{3}{-4}{0}}</span>',
//menu PROB
    'probmenu':'<span class="titremenu"><strong>MENU "PROB"</strong></span>',
	'fact':'<h3>Factorielle</h3>'
          +'<span class="aidetex">\\< nombre\\esp entier\\>!</span>'
          +'<p>'
		  +'Renvoie la factorielle d\'un nombre entier naturel.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">5!</span>',
	'binom':'<h3>Coefficient binomial</h3>'
          +'<span class="aidetex">\\binom{\\< nombre\\esp n\\>}{\\< nombre\\esp k\\>}</span>'
          +'<p>'
		  +'Renvoie le coefficient binomial <span class="aidetex">\\binom{n}{k}</span> (lire k parmi n) qui donne le nombre de parties de k éléments dans un ensemble de n éléments.'
		  +'</p>'
		  +'<h4>exemple:</h4>'
		  +'<span class="aidetex">\\binom{5}{3}</span>'		  
};

function noaide(){
   jqr('#aide').html('').hide();
}

function affaide(ch){
     jqr('#aide').html(aide[ch]).show();
     jqr('.aidetex').mathquill();
}

jqr('#checkaide').change(function(){
   if(jqr('#checkaide').is(':checked')) aidemoi();
   else {clearInterval(interaide);noaide();}
});

function aidemoi(){
 interaide = setInterval(function(){
    var aidetoaff = jqr('#prop').find('.hasCursor').eq(0);
    var aidetype = 0;
	if(aidetoaff.html()) {
	   do{
	      aidetype = aidetoaff.data('aide');
	      aidetoaff = aidetoaff.parent();
	   } while(!aidetype && aidetoaff.attr('id')!='prop');
	};
	if(aidetype) affaide(aidetype);
	else if(jqr('#prop').mathquill('latex').indexOf(':=')>-1) affaide('def');
	     else if(jqr('#prop').mathquill('latex').indexOf('\'')>-1) affaide('diff2');
	          else if(jqr('#prop').mathquill('latex').indexOf('!')>-1) affaide('fact');
	               else noaide();
			  
  },500);
}
