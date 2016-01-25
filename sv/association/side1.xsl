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

      <div class="sidelink"><xsl:attribute name="onclick"><xsl:text>replaceTwoResult('../xml/association','association/association','content','../xml/association','association/side</xsl:text><xsl:value-of select="position()"/><xsl:text>','side')</xsl:text></xsl:attribute>
	<xsl:if test="position()=$number"><xsl:attribute name="class"><xsl:text>sidelink active</xsl:text></xsl:attribute></xsl:if>
        <div class="bigtext"><xsl:value-of select="../head/bylaws[@lang=$lang]"/></div>
      </div>

    </xsl:for-each>

    <xsl:for-each select="root/annual">
      <xsl:sort select="date/year" data-type="number" order="descending"/>
      <xsl:sort select="date/month" data-type="number" order="ascending"/>
      <xsl:sort select="date/day" data-type="number" order="ascending"/>
      <xsl:sort select="date/hour" data-type="number" order="ascending"/>
      <xsl:sort select="date/minute" data-type="number" order="ascending"/>

      <div class="sidelink"><xsl:attribute name="onclick"><xsl:text>replaceTwoResult('../xml/association','association/association','content','../xml/association','association/side</xsl:text><xsl:value-of select="position()"/><xsl:text>','side')</xsl:text></xsl:attribute>
	<xsl:if test="position()=$number"><xsl:attribute name="class"><xsl:text>sidelink active</xsl:text></xsl:attribute></xsl:if>
        <div class="bigtext"><xsl:value-of select="../head/annual[@lang=$lang]"/></div>
      </div>

    </xsl:for-each>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
