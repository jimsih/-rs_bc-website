<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:variable name="lang">sv</xsl:variable>
<xsl:template match="/">
  <html>
    <head>
    <script type="text/javascript" src="functions.js"></script>
    </head>
    <body>
    <h2><xsl:value-of select="root/head/members[@lang=$lang]"/></h2>
      <xsl:for-each select="root/member">
    <div style="border:3px groove; padding:0px 10px 30px 10px; margin:10px auto; width:70%">
      <figure>
        <img style="width:10%; float:right" src="../../pictures/arsbc.svg"></img>
      </figure>
      <div style="text-align:justify; clear:left; width:100%">
        <div style="float:left; width:20%"><xsl:value-of select="../head/name[@lang=$lang]"/></div>
        <div style="float:left; width:40%"><xsl:value-of select="name[@lang=$lang]"/></div>
      </div>
      <div style="text-align:justify; clear:left; width:100%">
        <div style="float:left; width:20%"><xsl:value-of select="../head/office[@lang=$lang]"/></div>
        <div style="float:left; width:40%"><xsl:value-of select="office[@lang=$lang]"/></div>
      </div>
      <div style="text-align:justify; clear:left; width:100%">
        <div style="float:left; width:20%"><xsl:value-of select="../head/email[@lang=$lang]"/></div>
        <div style="float:left; width:40%"><xsl:value-of select="email[@lang=$lang]"/></div>
      </div>
    </div>
      </xsl:for-each>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
