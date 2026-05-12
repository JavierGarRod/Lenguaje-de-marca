<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/">
        <html>
        <head>
            <title>Recetario</title>
            <style>
                body { font-family: Arial; margin: 40px; background:#fafafa; }
                h1 { color: #8B0000; }
                .card {
                    background: white;
                    border: 1px solid #ccc;
                    padding: 15px;
                    margin-bottom: 20px;
                    border-radius: 8px;
                    width: 350px;
                }
                .grid {
                    display: flex;
                    gap: 20px;
                    flex-wrap: wrap;
                }
                .titulo { font-size: 1.3em; font-weight: bold; color:#333; }
                .info { color: #666; font-size: 0.9em; }
            </style>
        </head>

        <body>

            <h1>Recetario</h1>

            <div class="grid">
                <xsl:for-each select="recetario/receta">
                    <xsl:sort select="nombre" order="ascending"/>

                    <div class="card">
                        <div class="titulo">
                            <xsl:value-of select="nombre"/>
                        </div>

                        <p class="info">
                            Tiempo: <xsl:value-of select="tiempo"/>
                        </p>

                        <p class="info">
                            Dificultad: <xsl:value-of select="dificultad"/>
                        </p>

                        <p>
                            <xsl:value-of select="descripcion"/>
                        </p>
                    </div>

                </xsl:for-each>
            </div>

        </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
