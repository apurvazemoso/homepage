var hg = [];

function initial(){
	document.getElementById('aboutme').style.display = 'none';
	}

function funct1(naem){
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
            obj = JSON.parse(xmlhttp.responseText);
            
            for (var r = 1; r < obj.length; r++){
            	hg.push(obj[r]);
            }
            
            hg.push({
    			"img1":"me.jpg"
			});
			addgallery(hg);
         }
    }
};
xmlhttp.send(null);
}

function addgallery(obj){
	var len = obj.length;
	console.log(len);
	for(var i = 0; i < len; i++){
		var div = document.createElement('div');
		div.className = 'gallery item';
		div.innerHTML = '<a target="_blank" href=' + obj[i].img1 + '><img src=' + obj[i].img1 + ' width="300" height="200"></a>';
		document.getElementById('gallery1').appendChild(div);
	}
}

function removegallery(num){
	var list = document.getElementById("gallery1");
	list.removeChild(list.childNodes[num]);
}

function editgallery(num, img){
	var list = document.getElementById("gallery1");
	list.childNodes[num].innerHTML = '<a target="_blank" href=' + img + '><img src=' + img + ' width="300" height="200"></a>';
}

function submitJson(){
	 if(document.getElementById("myCheck1").checked == true){
	 	hg.push({
    			"img1": document.getElementById("myInput1").value
			});
	 	addgallery(hg);
	 };

	  if(document.getElementById("myCheck2").checked == true){
	  	var r = parseInt(document.getElementById("myInput2").value);
		removegallery(r+1);
	 };

	 if(document.getElementById("myCheck3").checked == true){
	  	var num = parseInt(document.getElementById("myInput3").value);
		var img = document.getElementById("myInput4").value;
		editgallery(num+2, img);
	 };


}

function updateJson(){
	 loadjsonn();
	 
}