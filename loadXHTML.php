<?php

$xmlFile = $_GET['xml'];
$xslFile = $_GET['xsl'];

/* Command line debugging */
//$xmlFile = $argv[1];
//$xslFile = $argv[2];

// Load xml file
$xmlDoc = new DOMDocument;
$xmlDoc->load($xmlFile);

// load xsl file
$xslDoc = new DOMDocument;
$xslDoc->load($xslFile);

$proc = new XSLTProcessor;

$proc->importStylesheet($xslDoc);

echo $proc->transformToXML($xmlDoc);

?>
