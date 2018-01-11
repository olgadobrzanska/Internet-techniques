#!/usr/bin/python

import cgi
import os
import datetime
import sys

with open('data.csv','r') as f:
        lines = f.readlines()

print "Content-type:text/html\r\n\r\n"

print '</br>'
print '<div align="center" >'
print '<h3 align="center"><b>REKORDY DOSTEPNE W BAZIE DANYCH</b></h3>'


print '</br>'
print '</br>'
print '<table align="center" margin="auto" style="text-align:center;">'

print '<tr><th>tytul</th><th>autor</th>'
for line in lines:
        line = line.split(";")
        if line[0]!='(no data)' and line[1]!='(no data)':
                print '<tr><td>'+line[0]+'</td><td>'+line[1]+'</td>'

print '</table>'
print "</div>"
