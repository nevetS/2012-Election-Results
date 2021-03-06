Election Results 2012
=============

This will run on Windows As-Is.  On other platforms, you will need to install
[PJScrape](https://raw.github.com/nrabinowitz/pjscrape/)
and
[PhantomJS](http://code.google.com/p/phantomjs/downloads/list)

For Non Techie Types:
=============
 * There's a "ZIP" link above.  Click on it to download all the stuff here.
 * Extract the zip to somewhere on your hard disk
 * double click on scrape.bat inside the new folder
 * double click on index.html 
 
 Any time you want an update, simply double click on scrape.bat again and refresh or re-open index.html

Usage:
=============
 * Run scrape.bat from the command line
 * Open up index.html to view results


Status 
=============
 Currently a few different official state election pages. 
 * Added CA presidential election, senate, and ballot measures
 * Added PA presidential election
 * Added OH presidential election
 * Added FL presidential election
 * Added CO presidential election
 
 To enable the senate and ballot measures being displayed, find and uncomment two lines in pagebuilder.js:
  
  //do_election('ca_senate.json'); 
  
  //do_measures('ca_measures.json');

Sample listing:
![alt text][logo]
[logo]: https://raw.github.com/nevetS/2012-Election-Results/master/sample.png "Example Results"


Outputs json data to various .json files (e.g. ca_pres.json)

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




Adding Sites to pull data from
==============
each site to scrape from get's it's on javascript file:

eg: ca_pres.js

inside that file is essentially two lines of code:
 1. the config that sets the output file
 2. the scraping rule
 
have a look at ca_pres.js for how it works, or reference the [pjscrape quickstart page](http://nrabinowitz.github.com/pjscrape/#quickstart)

Once that's done, add the appropriate line to pjscrape.bat. 

The format is: path-to-pahntomjs.exe path-to-pjscrape.js path-to-scrapingJavascriptFile
  
  phantomjs-1.7.0-windows\phantomjs.exe nrabinowitz-pjscrape-19fd7c1\pjscrape.js ca_pres.js

Help Wanted
==============
 * Adding more states - I need help identifying the right web pages and building scraping functions
 * Data Visualization - that would be pretty cool
 * Styling the web page
 * Automating the scrapes
 * Auto-posting results to a web site so they can be crowdsourced