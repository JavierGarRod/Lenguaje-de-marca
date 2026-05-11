<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <!-- Salida HTML -->
    <xsl:output method="html" indent="yes"/>

    <!-- Plantilla principal -->
    <xsl:template match="/">
        <html>
        <head>
            <title>Mi Blog Transformado con XSLT</title>
            <style>
                body { font-family: Arial; margin: 40px; }
                h1 { color: #336699; }
                .post { border-bottom: 1px solid #ccc; margin-bottom: 20px; padding: 10px; }
                .fecha { color: gray; font-size: 0.9em; }
                .menu a { margin-right: 15px; }
            </style>
        </head>

        <body>
            <h1>Bienvenidos a Mi Blog</h1>

            <!-- Menú generado automáticamente y ordenado -->
            <div class="menu">
                <xsl:for-each select="blog/pagina">
                    <xsl:sort select="fecha" order="descending"/>
                    <a href="#{titulo}">
                        <xsl:value-of select="titulo"/>
                    </a>
                </xsl:for-each>
            </div>

            <!-- Contenido ordenado por fecha -->
            <xsl:for-each select="blog/pagina">
                <xsl:sort select="fecha" order="descending"/>
                <xsl:apply-templates select="."/>
            </xsl:for-each>

        </body>
        </html>
    </xsl:template>

    <!-- Plantilla para cada página -->
    <xsl:template match="pagina">

        <!-- Alternancia de colores según posición -->
        <xsl:choose>
            <xsl:when test="position() mod 2 = 0">
                <div class="post" style="background:#eef;"></div>
            </xsl:when>
            <xsl:otherwise>
                <div class="post" style="background:#fff;"></div>
            </xsl:otherwise>
        </xsl:choose>

            <!-- Título de las páginas -->
            <h2 id="{titulo}">
                <xsl:value-of select="titulo"/>
            </h2>

            <!-- Fecha de publicación de las páginas-->
            <p class="fecha">
                Publicado el: <xsl:value-of select="fecha"/>
            </p>

            <!-- Contenido de las páginas-->
            <p>
                <xsl:value-of select="contenido"/>
            </p>

            <!-- Enlace sin dirección -->
            <p>
                <a href="pagina{id}.html">Leer más</a>
            </p>

        
    </xsl:template>

</xsl:stylesheet>