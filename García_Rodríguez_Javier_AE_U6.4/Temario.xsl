<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
        <html>
        <head>
            <title>Catálogo de Cursos</title>
            <style>
                body { font-family: Arial; margin: 40px; }
                table { border-collapse: collapse; width: 60%; }
                th, td { border: 1px solid #ccc; padding: 10px; }
                th { background: #336699; color: white; }
            </style>
        </head>

        <body>

            <h1>Catálogo de Cursos</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Duración</th>
                    <th>Nivel</th>
                </tr>

                <xsl:for-each select="cursos/curso">
                    <xsl:sort select="nombre" order="ascending"/>
                    <tr>
                        <td><xsl:value-of select="nombre"/></td>
                        <td><xsl:value-of select="duracion"/></td>
                        <td><xsl:value-of select="nivel"/></td>
                    </tr>
                </xsl:for-each>

            </table>

        </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
