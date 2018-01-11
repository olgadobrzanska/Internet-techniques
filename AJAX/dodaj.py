#!/usr/bin/python

import cgi
import os
import datetime
import sys

form =cgi.FieldStorage()
text1 =form.getvalue("data1","(no data)")
text2 =form.getvalue("data2","(no data)")
now=datetime.datetime.now().strftime("%Y/%m/%d %H:%M:%S")
ip = os.environ["REMOTE_ADDR"]

with open('data.csv','a') as file1:
       file1.write('%s; %s; %s; %s\n'%(text1, text2, now,ip))

print "Content-type:text/html\r\n\r\n"
