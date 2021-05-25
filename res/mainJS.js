var year = new Date().getFullYear();
document.getElementById('copyright').innerHTML = "&copy; "+ year + " <a href='https://ahmadhayyan.github.io'>ahmadhayyan</a>" + ". All Rights Reserved.";

function openMenu(){
	document.getElementById('title').style.display='none';
	document.getElementsByClassName('content')[0].style.display='none';
	document.getElementById('copyright').style.display='none';
	
	var home = document.getElementById("Home");
    if(home != null){
        home.style.display='none';
    }
	
	document.getElementById('mobileMenuFull').style.display='block';
	document.body.style.overflowY='hidden';
}
function closeMenu(){
	document.getElementById('title').style.display='block';
	document.getElementsByClassName('content')[0].style.display='block';
	document.getElementById('copyright').style.display='block';
	
	var home = document.getElementById("Home");
    if(home){
        home.style.display='block';
		document.getElementById('mobileMenuFull').style.display='none';
    }
	
	document.body.style.overflowY='auto';
}

window.addEventListener("resize", function(event) {
	var home = document.getElementById("Home");
	if (home && window.innerWidth > 1229){
		closeMenu();
	}
});

var image;
function openImage(id, imageURL){
	if (id != ""){
		image = id;
		document.getElementById(id).classList.add('imgClick');
	}
	if (imageURL != undefined){
		var html = document.createElement("div");
		html.id = "openedImg";
		html.className = "imgPost imgClick";
		html.style.cssText  = "background-image: url("+imageURL+");";
		document.body.appendChild(html);
		
		image = "openedImg";
	}
	
	document.getElementById('coverImg').style.display = 'block';
	document.getElementById('closeImg').style.display = 'block';
	document.body.style.overflow = 'hidden';
}
function closeImage(){
	document.getElementById(image).classList.remove('imgClick');
	document.getElementById('closeImg').style.display='none';
	document.getElementById('coverImg').style.display='none';
	document.body.style.overflow = 'auto';
	
	var html = document.getElementById("openedImg");
	if (html){
		html.parentNode.removeChild(html);
	}
}
