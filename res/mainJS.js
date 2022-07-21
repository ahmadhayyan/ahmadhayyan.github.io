// Set Contact Detail ---------------------------------------------------------------
function setContactDetail(text, url, idx){
	let contactDetail = document.getElementById('contact-detail');
	contactDetail.innerHTML = "<a href='"+ url +"' rel='noopener noreferrer' target='_blank' class='contactlink'>"+ text +"</a>";

	let contactList = ['contact-email', 'contact-linkedin', 'contact-github', 'contact-instagram', 'contact-twitter'];
	for (let i = 0; i < contactList.length; i++){
		if (i == idx){
			document.getElementById(contactList[i]).classList.add('home-contact-icon');
		} else{
			if (document.getElementById(contactList[i]).classList.contains('home-contact-icon')){
				document.getElementById(contactList[i]).classList.remove('home-contact-icon');
			}
		}
	}
}

// Set Copyright Footer ---------------------------------------------------------------
var year = new Date().getFullYear();
document.getElementById('copyright').innerHTML = "&copy; "+ year + " <a href='https://ahmadhayyan.github.io'>ahmadhayyan</a>" + ". All Rights Reserved.";

// Set Share Buttons ---------------------------------------------------------------
function setShareButtons(){
	let wrapper = document.getElementById('share-wrapper');
	if (wrapper != null){
		let text = document.querySelector('meta[name="title"]').content;
		text = text.split('-');
		text = text[0];
		wrapper.innerHTML = `
				<text style="vertical-align: top;">Share: </text>
				<a href="https://www.linkedin.com/cws/share?url=` + window.location.href + `" rel="noopener noreferrer" target="_blank" class="shareBtn">
					<i class="fa fa-linkedin-square icon"></i>
				</a>
				<a href="https://www.facebook.com/sharer.php?u=` + window.location.href + `" rel="noopener noreferrer" target="_blank" class="shareBtn">
					<i class="fa fa-facebook-square icon"></i>
				</a>
				<a href="https://twitter.com/share?text=` + text + `by%20Ahmad%20Hayyan&url=` + window.location.href + `" rel="noopener noreferrer" target="_blank" class="shareBtn">
					<i class="fa fa-twitter-square icon"></i>
				</a>
				<a href="https://www.reddit.com/submit?url=` + window.location.href + `&title=` + text + `by%20Ahmad%20Hayyan" rel="noopener noreferrer" target="_blank" class="shareBtn">
					<i class="fa fa-reddit-square icon"></i>
				</a>
		`;
	}
}

setShareButtons();

// Scroll Effect ---------------------------------------------------------------
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function revealElement(){
	let reveals = document.querySelectorAll('.reveal');

	for (let i = 0; i < reveals.length; i++){
		let elementTop = reveals[i].getBoundingClientRect().top;
		let elementVisible = 10;

		// Add delay to show many elements at once
		let orderToReveal = 0;
		if (reveals[i].classList.contains('active') === false){
			orderToReveal += 1;
		}

		// Reveal only when the element is visible for the first time (for desktop),
		// or reveal all when the web load (for mobile)
		if ((elementTop < window.innerHeight - elementVisible) || (window.innerWidth < 500)){
			reveals[i].classList.add('active');
			await sleep(orderToReveal * 300);
		}
	}
}

revealElement();
window.addEventListener('scroll', revealElement);

// Open and Close Mobile Menu ---------------------------------------------------------------
var menuWrapper = document.getElementById('title_wrapper');
var menuBtnWrapper = document.getElementsByClassName('menuBtnWrapper')[0];

function mobileMenu(){
	let totalMenuBtn = menuBtnWrapper.childElementCount;

	if (menuWrapper.style.height === '1.1em' || menuWrapper.style.height === undefined){
		if (window.innerWidth < 499 || (window.innerWidth < 900 && window.innerHeight < 499)){
			menuWrapper.style.height = 'calc(('+ totalMenuBtn +' * (0.7 * 0.8em)) + ('+ totalMenuBtn +' * (0.7 * 1.7em)) + 1.1em + 0.5em)';
		}
		else {
			menuWrapper.style.height = 'calc( ('+ totalMenuBtn +' * 0.8em) + ('+ totalMenuBtn +' * 1.8em) + 1.1em + 0.5em )';
		}
	} else{
		menuWrapper.style.height = '1.1em';
	}
}

if (window.innerWidth < 1230 && menuWrapper.style.height !== '1.1em') mobileMenu();

// Close mobile menu if screen is larger than 1229
window.addEventListener('resize', function (event) {
	if (window.innerWidth > 1229) menuWrapper.style.height = null;
	else if (window.innerWidth < 1230 && menuWrapper.style.height !== '1.1em') mobileMenu();
});

// Fullscreen Image ---------------------------------------------------------------
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
