<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:variable name="lang">sv</xsl:variable>
<xsl:variable name="number">1</xsl:variable><!--INCREASE THIS NUMBER FOR OLDER NEWS-->
<xsl:template match="/">
  <html>
    <head>
    </head>
    <body>
	<xsl:for-each select="root/index/link">
	<div class="padding news hidden">
		<xsl:if test="position()=$number">
		  <xsl:attribute name="class">
			<xsl:text>padding news seen</xsl:text>
		  </xsl:attribute>
		</xsl:if>
		<xsl:attribute name="id">
		  <xsl:text>news</xsl:text><xsl:value-of select="position()"/>
		</xsl:attribute>
	<xsl:for-each select="section">
	  <h2><xsl:value-of select="title[@lang=$lang]"/></h2>
	  <xsl:for-each select="ingress">
		<div class="ingress"><p><xsl:value-of select="."/></p></div>
	  </xsl:for-each>
	  <xsl:for-each select="p">
		<p class="text"><xsl:value-of select="."/></p>
	  </xsl:for-each>
	
	</xsl:for-each>
	</div>
	</xsl:for-each>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
