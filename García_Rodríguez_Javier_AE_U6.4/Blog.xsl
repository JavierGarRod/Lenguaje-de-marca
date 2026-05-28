<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
        <html>
        <head>
            <title>Blog Navegable</title>
            <style>
                body { font-family: Arial; margin: 40px; }
                h1 { color: #AA3333; }
                h2 { color: #336699; }
                .post { border-bottom: 1px solid #ccc; margin-bottom: 20px; padding: 10px; }
                .fecha { color: gray; font-size: 0.9em; }
                ul { font-size: 1.1em; }
                li { margin-bottom: 10px; }
            </style>
        </head>

        <body>

            <h1>Índice del Blog</h1>

            <ul>
                <xsl:for-each select="blog/pagina">
                    <xsl:sort select="titulo" order="ascending"/>
                    <li>
                        <a href="#post{position()}">
                            <xsl:value-of select="titulo"/>
                        </a>
                    </li>
                </xsl:for-each>
            </ul>

            <h1>Contenido</h1>

            <xsl:for-each select="blog/pagina">
                <div class="post" id="post{position()}">
                    <h2><xsl:value-of select="titulo"/></h2>
                    <p class="fecha">Publicado el: <xsl:value-of select="fecha"/></p>
                    <p><xsl:value-of select="contenido"/></p>
                </div>
            </xsl:for-each>

        </body>
        </html>
    </xsl:template>

</xsl:stylesheet>