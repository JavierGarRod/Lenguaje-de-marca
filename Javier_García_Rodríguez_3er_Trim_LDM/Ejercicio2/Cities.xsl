<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html" indent="yes"/>

<xsl:template match="/">
<html>
<head>
    <title>Cities</title>
    <style>
        body { font-family: Arial; margin: 0; }
        .header { background-color: #333; color: white; padding: 20px; font-size: 40px; }
        .menu { width: 20%; float: left; background-color: #f2f2f2; height: 100vh; padding: 20px; }
        .menu a { display: block; margin-bottom: 10px; color: blue; text-decoration: none; font-size: 20px; }
        .content { margin-left: 22%; padding: 20px; }
        .footer { background-color: #ccc; padding: 10px; text-align: center; margin-top: 40px; }
    </style>
</head>

<body>

    <div class="header">Cities</div>

    <div class="menu">
        <xsl:for-each select="cities/city">
            <a href="#{@id}">
                <xsl:value-of select="name"/>
            </a>
        </xsl:for-each>
    </div>

    <div class="content">
        <xsl:for-each select="cities/city">
            <h1 id="{@id}">
                <xsl:value-of select="name"/>
            </h1>

            <p><xsl:value-of select="description"/></p>
            <p><xsl:value-of select="details"/></p>

            <hr/>
        </xsl:for-each>
    </div>

    <div class="footer">Footer</div>

</body>
</html>
</xsl:template>

</xsl:stylesheet>