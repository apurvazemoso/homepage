function initial(){
	document.getElementById('aboutme').style.display = 'none';
	}

function funct1(name){
	var x1 = document.getElementById(name);
	var x = document.getElementsByClassName("oo");
	for (i = 0; i < x.length; i++) {
    	x[i].style.display = "none";  
	}
	document.getElementById(name).style.display = "block";
}

function loadjsonn(){

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open('GET', 'galleryimages.json', true);
	xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4) {
        if(xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            addgallery(obj);
         }
    }
};
xmlhttp.send(null);
}

function addgallery(obj){
	var len = obj.length;
	for(var i = 0; i < len; i++){
		var div = document.createElement('div');
		div.className = 'gallery item';
		div.innerHTML = '<a target="_blank" href=' + obj[i].img1 + '><img src=' + obj[i].img1 + ' width="300" height="200"></a>';
		document.getElementById('gallery1').appendChild(div);
}
}