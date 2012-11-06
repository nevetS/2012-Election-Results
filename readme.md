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
 * ca_senate.json
 * ca_pres.json
 * ca_measures.json

JSON files contain a list of candidates/measures and the vote counts. 

Output example:
[
 {"Barack Obama (DEM)":{"percent":"0.0%","votes":"0"},
  "Gary Johnson (LIB)":{"percent":"0.0%","votes":"0"},
  "Jill Stein (GRN)":{"percent":"0.0%","votes":"0"},
  "Mitt Romney (REP)":{"percent":"0.0%","votes":"0"},
  "Roseanne Barr (P&F)":{"percent":"0.0%","votes":"0"},
  "Thomas Hoefling (AI)":{"percent":"0.0%","votes":"0"},
  "election":"CA President",
  "reporting":"\n            0.0% ( 0 of 24,491 ) precincts partiallyreporting as of November 6, 2012, 12:59 p.m. \n\t\t\t\t\tVisit the County Reporting Status page to determine when a county has submitted its latest report.\n\t\t"}
]