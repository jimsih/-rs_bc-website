<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:variable name="lang">sv</xsl:variable>
<xsl:variable name="number">7</xsl:variable><!--INCREASE THIS NUMBER FOR OLDER NEWS-->
<xsl:template match="/">
  <html>
    <head>
    </head>
    <body>
    <xsl:for-each select="root/news">
      <xsl:sort select="date/year" data-type="number" order="descending"/>
      <xsl:sort select="date/month" data-type="number" order="ascending"/>
      <xsl:sort select="date/day" data-type="number" order="ascending"/>
      <xsl:sort select="date/hour" data-type="number" order="ascending"/>
      <xsl:sort select="date/minute" data-type="number" order="ascending"/>
    <!--  <xsl:if test="position()&lt;=10">-->
      <div class="sidelink"><xsl:attribute name="onclick"><xsl:text>replaceTwoResult('../xml/news','news/news</xsl:text><xsl:value-of select="position()"/><xsl:text>','content','../xml/news','news/side</xsl:text><xsl:value-of select="position()"/><xsl:text>','side')</xsl:text></xsl:attribute>
	<xsl:if test="position()=$number"><xsl:attribute name="class"><xsl:text>sidelink active</xsl:text></xsl:attribute></xsl:if>
        <div class="bigtext"><xsl:value-of select="title[@lang=$lang]"/></div>
        <div>
	  <div class="smalltext"><xsl:value-of 
	  select="date/year"/>-<xsl:value-of 
	  select="date/month"/>-<xsl:value-of 
	  select="date/day"/></div>
 	  <div class="smalltext"><xsl:value-of 
	  select="date/hour"/>:<xsl:value-of 
	  select="date/minute"/></div>
        </div>
      </div>
      <!--</xsl:if>-->
    </xsl:for-each>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
