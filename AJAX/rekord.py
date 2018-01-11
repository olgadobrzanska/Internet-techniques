#!/usr/bin/python

print "Content-type:text/html\r\n\r\n"

print """\

<fieldset align="center"> 
		<table class="druga" align="center" cellspacing="0" cellpadding="0">
		</br>
			<tr>
			<td align="center"><label>Tytul</label></td>
			<td align="center"><input class="input" type="text" id="data1" name="data1"><br></td>
			</tr><tr>
			<td align="center"><label>Autor</label></td>
			<td align="center"><input class="input" type="text" id="data2" name="data2"><br></td>
			</br>
			</tr>
			
		</table></br>	
		
	<input type="button" value="Wyslij" onclick="sendRequest2();"/>
	
</fieldset>
"""