var request;
function getRequestObject(){
	var xhr = false;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else if(window.ActiveObject){
		try { xhr = new XMLHttpRequest();}
		catch(e){
			try {xhr= new ActiveXObject("Microsoft.XMLHTTP");}
			catch(e) {xhr=false;}
		}
	}
	return xhr;
}

function sendRequest1(){

	request=getRequestObject();
	if (request) {
		try {
			request.onreadystatechange = handleResponse1;
			request.open("GET","../../cgi-bin/rekord.py",true);
			request.send(null);
		}
		catch (e) {
			alert ("Nie mozna polaczyc sie z serwerem: " + e.toString()) ;
		}
		} else {
			alert ("Blad") ;
		}
	}

function handleResponse1(){
	myDiv = document.getElementById("dane");
	if (request.readyState == 4) {
		if ( request.status == 200 )  {
			response = request.responseText;
			myDiv.innerHTML="";
			myDiv.innerHTML += response + "<br/>" ;
			}
		}  
}

function sendRequest2(){
	request=getRequestObject();
	if (request) {
		try {
			var data1=document.getElementById('data1').value;
			var data2=document.getElementById('data2').value;
			request.onreadystatechange = handleResponse2;
			var data="data1="+encodeURIComponent(data1)+"&data2="+encodeURIComponent(data2);
			request.open("POST","../../cgi-bin/dodaj.py",true);
			request.setRequestHeader("Content-Type","application/x-www-form-urlencoded") ;
			request.send(data);
		}catch (e) {
			alert ("Nie mozna polaczyc sie z serwerem: " + e.toString()) ;
		}
	} else {
		alert ("Blad") ;
	}
}


function handleResponse2(){
	myDiv = document.getElementById("dane");
	if (request.readyState == 4) {
		if ( request.status == 200 )  {

			response = request.responseText;
			alert("Dodano nowy rekord");
			myDiv.innerHTML="";
			myDiv.innerHTML += response + "<br/>" ;
		}
	}
}


function sendRequest3(){
	request=getRequestObject();
	if (request) {
		try {
			request.onreadystatechange = handleResponse3;
			request.open("GET","../../cgi-bin/pobierz_rek.py",true);
			request.send(null);
		}catch (e) {
			alert ("Nie mozna polaczyc sie z serwerem: " + e.toString()) ;
		}
	} else {
		alert ("Blad") ;
	}
}


function handleResponse3(){
	myDiv = document.getElementById("dane");
	if (request.readyState == 4) {
		if ( request.status == 200 )  {

			response = request.responseText;
			myDiv.innerHTML="";
			myDiv.innerHTML += response + "<br/>" ;

		}
	}
}

