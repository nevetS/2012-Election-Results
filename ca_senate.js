pjs.config({ 
    // options: 'stdout', 'file' (set in config.logFile) or 'none'
    log: 'stdout',
    // options: 'json' or 'csv'
    format: 'json',
    // options: 'stdout' or 'file' (set in config.outFile)
    writer: 'file',
    outFile: 'ca_senate.json'
});

pjs.addSuite({
                       url: 'http://vote.sos.ca.gov/returns/us-senate/'
                      ,scraper: function(){
           var tbl = $('table.stateCountyCandResultsTbl tr').map(function() {
                    return $(this).find('td').map(function() {
                      return $(this).text();
                    }).get();
                 }).get();
           var results2 = {};
           for (i = 0; i < tbl.length / 4; i++){
             var s = i*4;
             results2[tbl[s+1]] = {};
             results2[tbl[s+1]]['votes'] = tbl[s+2];
             results2[tbl[s+1]]['percent'] = tbl[s+3];
           }
           results2['reporting'] = $('.precinctRptgMsg').text();
           results2['election'] = 'CA Senate';
           
           return results2
         }
         });