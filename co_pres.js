pjs.config({ 
    // options: 'stdout', 'file' (set in config.logFile) or 'none'
    log: 'stdout',
    // options: 'json' or 'csv'
    format: 'json',
    // options: 'stdout' or 'file' (set in config.outFile)
    writer: 'file',
    outFile: 'co_pres.json'
});

pjs.addSuite({
                       url: 'http://results.enr.clarityelections.com/CO/43032/106487/en/summary.html'
                      ,scraper: function(){
           var tbl = $('#results table:first').map(function() {
                    return $(this).find('td').map(function() {
                      return $(this).text();
                    }).get();
                 }).get();
           var res = tbl.splice(0,2);
           tbl.splice(64);
           var results2 = {};
           for (i = 0; i < tbl.length / 4; i++){
             var s = i*4;
             results2[tbl[s]] = {};
             results2[tbl[s]]['votes'] = tbl[s+2];
             results2[tbl[s]]['percent'] = tbl[s+3];
           }
           results2['reporting'] = res[0];
           results2['election'] = 'CO President';
           
           return results2
         }
         });
         
