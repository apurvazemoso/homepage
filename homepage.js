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
		div.innerHTML = '<a target="_blank" href=' + obj[i].img1 + '><img src=' + obj[i].img1 + ' width="300" height="200"></a><h4>' + obj[i].name + '</h4><h5>' + obj[i].info + '</h5><h5>' + obj[i].updatedDate + '</h5>';
		document.getElementById('gallery1').appendChild(div);
	}
}

function addIngallery(obj){
	var list = document.getElementById("gallery1");
	var div = document.createElement('div');
	div.className = 'gallery item';
	console.log();
	div.innerHTML = '<a target="_blank" href=' + obj.img1 + '><img src=' + obj.img1 + ' width="300" height="200"></a><h4>' + obj.name + '</h4><h5>' + obj.info + ' </h5><h5>' + obj.updatedDate + '</h5>';
	list.appendChild(div);
}

function removegallery(num){
	var list = document.getElementById("gallery1");
	list.removeChild(list.childNodes[num]);
}

function editgallery(num, obj){
	
	var list = document.getElementById("gallery1");
	var div = document.createElement('div');
	var d = list.childNodes[num];
	var url11 = d.firstChild;
	var url1 = d.firstChild.innerHTML;
	var name1 = url11.nextSibling;
	var name = url11.nextSibling.innerHTML;
	var info1  = name1.nextSibling;
	var info = name1.nextSibling.innerHTML;
	var date1 = info1.nextSibling;
	var date = info1.nextSibling.innerHTML;
	
	
	console.log(url1 + ' ' + name + ' ' + info + ' ' + date);
	var q1,q2,q3,q4;
	div.className = 'gallery item';	
	if(obj.img1 !== '')
		q1 = '<img src = ' + obj.img1 + ' width="300" height="200">';
	else
		q1 = url1;
	if(obj.name !== '')
		q2 = obj.name;
	else
		q2 = name;
	if(obj.info !== '')
		q3 = obj.info;
	else
		q3 = info;
	if(obj.updatedDate !== '')
		q4 = obj.updatedDate;
	else
		q4 = date;

	console.log(list.childNodes[num]);
	div.innerHTML = '<a target="_blank" href=' + obj.img1 + '>' + q1+ '</a><h4>' + q2 + '</h4><h5>' + q3 + ' </h5><h5>' + q4 + '</h5>';
	console.log(div);
	list.replaceChild(div, d);
	
}

function submitJson(){
	 if(document.getElementById("myCheck1").checked == true){
	 	var a = ({
    			"img1": document.getElementById("myInput11").value,
    			"name" : document.getElementById("myInput12").value,
				"info" : document.getElementById("myInput13").value,
				"updatedDate" : document.getElementById("myInput14").value
			});
	 	addIngallery(a);
	 };

	  if(document.getElementById("myCheck2").checked == true){
	  	var r = parseInt(document.getElementById("myInput2").value);
		removegallery(r+1);
	 };

	 if(document.getElementById("myCheck3").checked == true){
	  	var num = parseInt(document.getElementById("myInput3").value);
	  	var a = ({
    			"img1": document.getElementById("myInput41").value,
    			"name" : document.getElementById("myInput42").value,
				"info" : document.getElementById("myInput43").value,
				"updatedDate" : document.getElementById("myInput44").value
			});
		editgallery(num+2, a);
	 };
}

function updateJson(){
	 loadjsonn();
}