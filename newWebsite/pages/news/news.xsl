<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:variable name="lang">sv</xsl:variable>
<xsl:variable name="number">1</xsl:variable><!--INCREASE THIS NUMBER FOR OLDER NEWS-->
<xsl:template match="/">
  <html>
    <head>
    </head>
    <body>
    
    <div class="padding">
      <h2><xsl:value-of select="title[@lang=$lang]"/></h2>
      <div class="ingress"><p><xsl:value-of select="ingress[@lang=$lang]"/></p></div>
	  <xsl:if test="image != ''">
	  <figure class="newsimage">
        <img width="100%">
          <xsl:attribute name="src">
            <xsl:text>pictures/</xsl:text><xsl:value-of select="image"/>
          </xsl:attribute>
        </img>
        <figcaption><xsl:value-of select="legend[@lang=$lang]"/></figcaption>
      </figure>
	  </xsl:if>
      <xsl:for-each select="p">
      <p class="text"><xsl:value-of select="."/></p>
      </xsl:for-each>
    </div>

    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
