// Set Copyright Year Footer ---------------------------------------------------------------
document.getElementById('copyright-current-year').innerHTML = new Date().getFullYear();

// Open and Close Mobile Menu ---------------------------------------------------------------
function toggleMenu() {
    const nav = document.querySelector('nav');

    if (nav.style.height === undefined || nav.style.height === '') {
        nav.style.height = '19em';
    } else {
        nav.style.height = null;
    }
}

// Close mobile menu on larger screen
window.addEventListener('resize', function (event) {
    const nav = document.querySelector('nav');    
    if (window.innerWidth > 670) nav.style.height = null;
});

// Show All Technologies ---------------------------------------------------------------
async function toggleShowAllTech() {
	let parent_element = document.getElementById('technologies');
	let button = parent_element.getElementsByClassName('primary-button')[0];
	let element = parent_element.getElementsByClassName('hide-first')[0];

	if (element.style.opacity !== '1') {
		element.style.maxHeight = '100em';
		element.style.opacity = '1';
		element.style.visibility = 'visible';
		element.style.marginBottom = null;
		button.innerHTML = 'Show less technologies';
	} else {
		element.style.maxHeight = null;
		element.style.opacity = null;
		element.style.visibility = null;
		element.style.marginBottom = '0';
		button.innerHTML = 'Show all technologies';
	}

	for (let i = 0; i < element.childElementCount; i++) {
		if (element.style.opacity === '1') {
			element.children[i].classList.add('active');
			await sleep(50);
		} else {
			element.children[i].classList.remove('active');
		}
	}
}

// Scroll Effect ---------------------------------------------------------------
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function revealElement() {
	let reveals = document.querySelectorAll('.reveal');

	for (let i = 0; i < reveals.length; i++) {
		let elementTop = reveals[i].getBoundingClientRect().top;
		let elementVisible = 10;

		// To avoid sleep when the element already have class 'active'
		if (reveals[i].classList.contains('active')) {
			continue;
		}

		// Reveal only when the element is visible for the first time (for desktop),
		// or reveal all when the web load (for mobile)
		// but do not reveal elements that have class 'hide-first' on their parent elements
		if ( !reveals[i].parentElement.classList.contains('hide-first') && ((elementTop < window.innerHeight - elementVisible) || (window.innerWidth < 500))) {
			await sleep(50);
			reveals[i].classList.add('active');
		}
	}
}

(async () => {
	await revealElement();
	window.addEventListener('scroll', async () => {
		await revealElement();
	}, false);
})();

// Fullscreen Image ---------------------------------------------------------------
var image;

function openImage(id, imageURL) {
	if (id != "") {
		image = id;
		document.getElementById(id).classList.add('img-open');
	}
	if (imageURL != undefined) {
		var html = document.createElement("div");
		html.id = "opened-img";
		html.className = "img-post img-open";
		html.style.cssText  = "background-image: url("+imageURL+");";
		document.body.appendChild(html);
		
		image = "opened-img";
	}
	
	document.getElementById('cover-img').style.display = 'block';
	document.getElementById('close-img').style.display = 'block';
	document.body.style.overflow = 'hidden';
}

function closeImage() {
	document.getElementById(image).classList.remove('img-open');
	document.getElementById('close-img').style.display='none';
	document.getElementById('cover-img').style.display='none';
	document.body.style.overflow = 'auto';
	
	var html = document.getElementById("opened-img");
	if (html) {
		html.parentNode.removeChild(html);
	}
}

// Set Share Buttons ---------------------------------------------------------------
function setShareButtons() {
	let wrapper = document.getElementById('share-wrapper');
	if (wrapper != null) {
		let text = document.querySelector('meta[name="title"]').content;
		text = text.split('-');
		text = text[0];
		wrapper.innerHTML = `
				<span>Share: </span>
				<a href="https://www.linkedin.com/cws/share?url=` + window.location.href + `" rel="noopener noreferrer" target="_blank">
					<i class="fa fa-linkedin-square icon"></i>
				</a>
				<a href="https://www.facebook.com/sharer.php?u=` + window.location.href + `" rel="noopener noreferrer" target="_blank">
					<i class="fa fa-facebook-square icon"></i>
				</a>
				<a href="https://twitter.com/share?text=` + text + `by%20Ahmad%20Hayyan&url=` + window.location.href + `" rel="noopener noreferrer" target="_blank">
					<i class="fa fa-twitter-square icon"></i>
				</a>
				<a href="https://www.reddit.com/submit?url=` + window.location.href + `&title=` + text + `by%20Ahmad%20Hayyan" rel="noopener noreferrer" target="_blank">
					<i class="fa fa-reddit-square icon"></i>
				</a>
		`;
	}
}

setShareButtons();
