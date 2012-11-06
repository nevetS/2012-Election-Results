Election Results 2012
=============

This will run on Windows As-Is.  On other platforms, you will need to install
[PJScrape](https://raw.github.com/nrabinowitz/pjscrape/)
and
[PhantomJS](http://code.google.com/p/phantomjs/downloads/list)

Usage:
=============
Run scrape.bat from the command line

Status 
=============
Currently scrapes the CA Secretary of State site for vote counts.

Outputs json data to:
ca_senate.json
ca_pres.json
ca_measures.json

JSON files contain a list of candidates/measures and the vote counts.