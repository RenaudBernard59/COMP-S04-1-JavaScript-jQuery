/*
CONSIGNE : Avec l'aide de jQuery, chaque bouton provoque une action sur le rectangle : 

Bouton 1 : met le rectangle en vert
Bouton 2 : remet les couleurs initiales
Bouton 3 : fait disparaitre le rectangle
Bouton 4 : fait réaparaitre le rectangle
Bouton 5 : augmente la hauteur de 10px, s'il dépasse 100px, il remet la hauteur à 10px

*/
//On sélectionne le rectangle
var rec = $('#rectangle');
//On sélectionne les boutons
var btn1 = $('#bouton1'), btn2 = $('#bouton2'), btn3 = $('#bouton3'), btn4 = $('#bouton4'), btn5 =$('#bouton5')


btn1.on('click', function() {
	//Color=Vert
	rec.css("background-color", "green");
});

btn2.on('click', function() {
	//Color=#356188
	rec.css("background-color", "#356188");
});

btn3.on('click', function() {
	//Disparaître
	rec.hide();
});

btn4.on('click', function() {
	//Apparaître
	rec.show();
});

btn5.on('click', function() {
	//+10px IF >100px == 10px
	var hg = rec.height()
	if (hg < 100) {
		rec.css("height", hg + 10);
	} else {
		rec.css("height", 10);
	}
});


/*



*/
