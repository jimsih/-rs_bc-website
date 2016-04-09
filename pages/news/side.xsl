<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:variable name="lang">sv</xsl:variable>
<xsl:variable name="number">1</xsl:variable><!--INCREASE THIS NUMBER FOR OLDER NEWS-->
<xsl:template match="/">
  <html>
    <head>
    </head>
    <body>
    <xsl:for-each select="root/news">
      <xsl:sort select="date/year" data-type="number" order="descending"/>
      <xsl:sort select="date/month" data-type="number" order="descending"/>
      <xsl:sort select="date/day" data-type="number" order="descending"/>
      <xsl:sort select="date/hour" data-type="number" order="descending"/>
      <xsl:sort select="date/minute" data-type="number" order="descending"/>
    <!--  <xsl:if test="position()&lt;=10">-->
      <li class="sidelink">
      <xsl:attribute name="link">
        <xsl:value-of select="link"/>
      </xsl:attribute>

        <span class="title bigtext"><xsl:value-of select="title[@lang=$lang]"/></span>
	  <span class="date smalltext"><xsl:value-of 
	  select="date/year"/>/<xsl:value-of 
	  select="date/month"/>/<xsl:value-of 
	  select="date/day"/></span>
 	  <span class="time smalltext"><xsl:value-of 
	  select="date/hour"/>:<xsl:value-of 
	  select="date/minute"/></span>
      </li>
      <!--</xsl:if>-->
    </xsl:for-each>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
