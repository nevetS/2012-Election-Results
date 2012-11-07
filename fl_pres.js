pjs.config({ 
    // options: 'stdout', 'file' (set in config.logFile) or 'none'
    log: 'stdout',
    // options: 'json' or 'csv'
    format: 'json',
    // options: 'stdout' or 'file' (set in config.outFile)
    writer: 'file',
    outFile: 'fl_pres.json'
});

pjs.addSuite({
                       url: 'http://enight.dos.state.fl.us/FederalOffices/President/'
                      ,scraper: function(){
           var tbl = $('.grid-table').map(function() {
                    return $(this).find('td').map(function() {
                      return $(this).text();
                    }).get();
                 }).get();
           tbl.splice(74);
           var results2 = {};
           for (i = 0; i < tbl.length / 4; i++){
             var s = i*4;
             results2[tbl[s]] = {};
             results2[tbl[s]]['votes'] = tbl[s+2];
             results2[tbl[s]]['percent'] = tbl[s+3];
           }
           results2['reporting'] = 'Unknown % Precincts Reporting'
           results2['election'] = 'FL President';
           
           return results2
         }
         });
         
