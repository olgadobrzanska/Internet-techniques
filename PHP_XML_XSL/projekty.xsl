<?xml version="1.0"  standalone="no" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="xml" encoding="UTF-8" 
indent="no" 
doctype-public="-//W3C//DTD XHTML 1.0 Strict//EN" 
doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"/>
<xsl:template match="/">
	<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>zadanie 1 - przetwarzanie dokumentow XML</title>
		<meta name="author" content="Olga Dobrzanska" />
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<link type="text/css" href="projekty.css" rel="stylesheet" />
	</head> 
		<body>
			<table>
				<xsl:for-each select="//projekt" >
					<tr>
						<td colspan="5"><xsl:value-of select="./temat"/></td>
					</tr>
					<tr>
						<td></td>
						<td>Kierownik:</td>
						<td><xsl:value-of select="./kierownik/nazwisko" /></td>
						<td><xsl:value-of select="./kierownik/imie" /></td>
						<td><xsl:value-of select="./kierownik/email" /></td>
					</tr>
					<tr>
						<td></td>
						<td>Termin zakończenia:</td>
						<td colspan="3"><xsl:value-of select="./termin"/></td>
					</tr>
					<tr>
						<td></td>
						<td colspan="4">Zadania:</td>
					</tr>
					<tr>
						<td></td>
						<td colspan="3"><xsl:value-of select="./zadanie/temat"/></td>
						<td><xsl:value-of select="./zadanie/termin-zakonczenia"/></td>
					</tr>
						<xsl:for-each select="./zadanie/projektanci/uczestnik" >
						<xsl:sort select="./nazwisko/text()" />
					<tr>
						<td></td>
						<td><xsl:if test="position()=1">Projektanci:</xsl:if></td>
						<td><xsl:value-of select="./nazwisko"/></td>
						<td><xsl:value-of select="./imie"/></td>
						<td><xsl:value-of select="./email"/></td>
					</tr>
					</xsl:for-each>
				</xsl:for-each>
			</table>   
		</body>
	</html>
</xsl:template>           
</xsl:stylesheet>