function insertParagraph(text) {
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
}
/*window.onload = function() {
	var testdiv = document.getElementById("testdiv");
	testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
}*/
/*window.onload = function() {
	var para = document.createElement("p");
	var info = "nodeName: ";
	info+= para.nodeName;
	info+= " nodeType: ";
	info+= para.nodeType;
	alert(info);*/
}

window.onload = function() {
  var para = document.createElement("p");
  var txt = document.createTextNode("Hello world");
  para.appendChild(txt);
  var testdiv = document.getElementById("testdiv");
  testdiv.appendChild(para);  
}

/*window.onload = function() {
  var para = document.createElement("p");
  var testdiv = document.getElementById("testdiv");
  testdiv.appendChild(para);
  var txt = document.createTextNode("Hello world");
  para.appendChild(txt);
}*/
