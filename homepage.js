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
	var q1,q2,q3,q4;
	/*if(ValidURL(a.img1) && ValidDate(a.updatedDate) && isPastDate(a.updatedDate))
	 		addIngallery(a);
	 	else
	 		alert("url or date not valid");*/
	div.className = 'gallery item';	
	if(obj.img1 !== ''){
		if(ValidURL(obj.img1))
			q1 = '<img src = ' + obj.img1 + ' width="300" height="200">';
		else
			alert('Enter valid URL');
	}
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
	if(obj.updatedDate !== ''){
		if(ValidDate(obj.updatedDate) && isPastDate(obj.updatedDate))
			q4 = obj.updatedDate;
		else
			alert('Enter valid and past or present date');
	}
	else
		q4 = date;

	div.innerHTML = '<a target="_blank" href=' + obj.img1 + '>' + q1+ '</a><h4>' + q2 + '</h4><h5>' + q3 + ' </h5><h5>' + q4 + '</h5>';
	list.replaceChild(div, d);
	
}

function ValidURL(url) {
  /*  regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        if (regexp.test(url))
        {
          return true;
        }
        else
        {
          return false;
        }*/

   var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
   return regexp.test(url);
}

// Expect input as d/m/y
function ValidDate(s) {
  var bits = s.split('/');
  var d = new Date(bits[2], bits[1] - 1, bits[0]);
  return d && (d.getMonth() + 1) == bits[1];
}

function isPastDate(idate){
    var today = new Date().getTime(),
        idate = idate.split("/");
    idate = new Date(idate[2], idate[1] - 1, idate[0]).getTime();
    return (today - idate) >= 0 ? true : false;
}

function submitJson(){

	/*
	All the above fields are required and have to be validated - URL cannot be empty 
	and must be valid, Name cannot be empty, Uploaded Date cannot be empty, 
	must be valid and cannot be in the future
	*/

	if(document.getElementById("myCheck1").checked == true){
		document.getElementById("myInput11").attributes["required"] = "required"; 
		document.getElementById("myInput12").attributes["required"] = "required";
		document.getElementById("myInput14").attributes["required"] = "required"; 
	 	var a = ({
    			"img1": document.getElementById("myInput11").value,
    			"name" : document.getElementById("myInput12").value,
				"info" : document.getElementById("myInput13").value,
				"updatedDate" : document.getElementById("myInput14").value
			});
	 	if(ValidURL(a.img1) && ValidDate(a.updatedDate) && isPastDate(a.updatedDate))
	 		addIngallery(a);
	 	else
	 		alert("url or date not valid");
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