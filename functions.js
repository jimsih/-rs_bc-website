function loadXMLDoc(filename)
{
if (window.ActiveXObject)
  {
  xhttp = new ActiveXObject("Msxml2.XMLHTTP");
  }
else
  {
  xhttp = new XMLHttpRequest();
  }
xhttp.open("GET", filename, false);
try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
xhttp.send("");
return xhttp.responseXML;
}

function displayResult(file,style,target)
{
xml = loadXMLDoc(file+".xml");
xsl = loadXMLDoc(style+".xsl");
// code for IE
if (window.ActiveXObject || xhttp.responseType == "msxml-document")
  {
  ex = xml.transformNode(xsl);
  document.getElementById(target).innerHTML = ex;
  }
// code for Chrome, Firefox, Opera, etc.
else if (document.implementation && document.implementation.createDocument)
  {
  xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(xsl);
  resultDocument = xsltProcessor.transformToFragment(xml, document);
  document.getElementById(target).appendChild(resultDocument);
  }
}
function replaceResult(file,style,target)
{
//document.getElementById(target).removeChild(document.getElementById(target).firstChild);
var element = document.getElementById(target);
element.innerHTML = '';
displayResult(file,style,target);
}
function replaceTwoResult(file1,style1,target1,file2,style2,target2)
{
replaceResult(file1,style1,target1);
replaceResult(file2,style2,target2);
}
function setUpDouble(file1,style1,target1,file2,style2,target2,file3,style3,target3)
{
displayResult(file1,style1,target1);
displayResult(file2,style2,target2);
displayResult(file3,style3,target3);
}
function setUp(file1,style1,target1,file2,style2,target2)
{
displayResult(file1,style1,target1);
displayResult(file2,style2,target2);
}
