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
    <table>

      <tr>
        <th><xsl:value-of select="root/head/member[@lang=$lang]"/></th>
        <th><xsl:value-of select="root/head/office[@lang=$lang]"/></th>
      </tr>
      <xsl:for-each select="root/member">
      <tr>
        <td><xsl:value-of select="name[@lang=$lang]"/></td>
        <td><xsl:value-of select="office[@lang=$lang]"/></td>
      </tr>
      </xsl:for-each>
      <tr>
       <td><button onclick="replaceResult('members','members','content')">SWITCH</button></td>
      </tr>
    </table>
    </body>
  </html>
</xsl:template>
</xsl:stylesheet>
