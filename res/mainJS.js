var year = new Date().getFullYear();
document.getElementById('copyright').innerHTML = "&copy; "+ year + " <a class='footer_link' href='https://ahmadhayyan.github.io'>ahmadhayyan</a>" + ". All Rights Reserved.";

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
    if(home != null){
        home.style.display='block';
    }
	
	document.getElementById('mobileMenuFull').style.display='none';
	document.body.style.overflowY='auto';
}

function openImage(id){
	document.getElementById(id).classList.add('imgClick');
	document.getElementById('coverImg').style.display = 'block';
	document.getElementById('closeImg').style.display = 'block';
	document.body.style.overflow = 'hidden';
}
function closeImage(id){
	document.getElementById(id).classList.remove('imgClick');
	document.getElementById('closeImg').style.display='none';
	document.getElementById('coverImg').style.display='none';
	document.body.style.overflow = 'auto';
}

window.addEventListener("resize", function(event) {
	if (window.innerWidth < 1229){
		closeMenu();
	}
});