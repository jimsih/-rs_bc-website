<?php

$xmlFile = $_GET['xml'];
$xslFile = $_GET['xsl'];

// Load xml file
$xmlDoc = new DOMDocument;
$xmlDoc->load($xmlFile.".xml");

// load xsl file
$xslDoc = new DOMDocument;
$xslDoc->load($xslFile.".xsl");

$proc = new XSLTProcessor;

$proc->importStylesheet($xslDoc);

echo $proc->transformToXML($xmlDoc);

?>
