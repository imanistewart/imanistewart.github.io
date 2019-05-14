/*function showPic(whichpic) {
var source = whichpic.getAttribute("href");
var placeholder = document.getElementByID("placeholder");
placeholder.setAttribute("src", source);
}
var text = whichpic.getAttribute("title");
var body_element = document.getElementsByTagName("body")[0];
body_element.childNodes.length; */
//functionality of adding multiple js scripts to load after HTML loads - outdated technique
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function () {
			oldonload();
			func();
		}
	}
}
//creating an insertAfter function
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;
	if (parent.lastChild == targetElement) {
		parent.appendChild(newElement);
	} else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}
}
function preparePlaceholder() {
	if (!document.getElementById("imagegallery")) {
		return false;
	}
	var placeholderEl = document.createElement("img");
	placeholderEl.id = "placeholder";
	placeholderEl.src = "images/placeholder.jpg";
	placeholderEl.alt = "my image gallery";
	placeholderEl.width = 400;
	
	var descriptionEl = document.createElement("p");
	descriptionEl.id = "description";
	descriptionEl.innerHTML = "Choose an image";
	
	//using insertAfter in preparePlaceholder
	var headerEl = document.getElementById("header");
	insertAfter(placeholderEl, headerEl);
	insertAfter(descriptionEl, placeholderEl);
}
//El is for elements
function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
//alert (body_element.childNodes.length);
}
//window.onload = countBodyChildren;
//onclick = "showPic(this);"

function prepareGallery() {
	if (!document.getElementsByTagName || !document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for ( var i=0; i < links.length; i++) {
		links[i].onclick = function() {
		 return showPic(this) ? false : true;
		}
		links[i].onkeypress = links[i].onclick;
	}
}

function showPic(whichpic) {
	if (!document.getElementById("placeholder")) return true;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src", source);
	if (document.getElementById("description")) {
		var text = whichpic.getAttribute("title") ? whichpic.getAttribute("title") : "";
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
		//console.log("description", description);
	}
	return true;
}


addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);
//moving placeholder showPic script to js from html





