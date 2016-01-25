<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:variable name="lang">sv</xsl:variable>
<xsl:variable name="number">1</xsl:variable><!--INCREASE THIS NUMBER FOR OLDER NEWS-->
<xsl:template match="/">
  <html>
    <head>
    <link rel="stylesheet" type="text/css" href="/stylesheet.css"/>
    <script type="text/javascript" src="functions.js"></script>
    </head>
    <body>
    <xsl:for-each select="root/bylaw">
      <xsl:sort select="date/year" data-type="number" order="descending"/>
      <xsl:sort select="date/month" data-type="number" order="ascending"/>
      <xsl:sort select="date/day" data-type="number" order="ascending"/>
      <xsl:sort select="date/hour" data-type="number" order="ascending"/>
      <xsl:sort select="date/minute" data-type="number" order="ascending"/>
<!--	<object data="../../documents/ARSBCStadgar.pdf" type="application/pdf" width="100%" height="800px">-->
	<object type="application/pdf" width="100%" height="800px"><xsl:attribute name="data"><xsl:text>../../documents/</xsl:text><xsl:value-of select="document[@lang=$lang]"/></xsl:attribute>
	 
	  <p>It appears you don't have a PDF plugin for this browser.
	  No biggie... you can <a href="../../documents/ARSBCStadgar.pdf">click here to
	  download the PDF file.</a></p>
	  
	</object>
    </xsl:for-each>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
