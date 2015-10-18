<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:variable name="lang">sv</xsl:variable>
<xsl:template match="/">
  <html>
    <head>
    </head>
    <body>
    <div class="center">
      <div id="logo"><img src="../../pictures/arsbc.svg"></img></div>
      <div id="name">
        <div class="top">ÅLIDHEM</div>
        <div class="middle left">ROYAL</div>
        <div class="middle right">STRAIGHT</div>
        <div class="low left clear">BRIDGE</div>
        <div class="low right">CLUB</div>
      </div>
    </div>
    <div class="bar">
       <div class="link active" onclick="window.location.href='index.html'">
         <xsl:value-of select="root/head/home[@lang=$lang]"/></div>
       <div class="link" onclick="window.location.href='news.html'">
         <xsl:value-of select="root/head/news[@lang=$lang]"/></div>
       <div class="link" onclick="window.location.href='events.html'">
         <xsl:value-of select="root/head/events[@lang=$lang]"/></div>
       <div class="link" onclick="window.location.href='association.html'">
         <xsl:value-of select="root/head/association[@lang=$lang]"/></div>
       <div class="link" onclick="window.location.href='members.html'">
         <xsl:value-of select="root/head/members[@lang=$lang]"/></div>
       <div class="link" onclick="window.location.href='apply.html'">
         <xsl:value-of select="root/head/apply[@lang=$lang]"/></div>
    </div>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
