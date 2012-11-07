pjs.config({ 
    // options: 'stdout', 'file' (set in config.logFile) or 'none'
    log: 'stdout',
    // options: 'json' or 'csv'
    format: 'json',
    // options: 'stdout' or 'file' (set in config.outFile)
    writer: 'file',
    outFile: 'pa_pres.json'
});

pjs.addSuite({
                       url: 'http://www.electionreturns.state.pa.us/ElectionsInformation.aspx?FunctionID=13&ElectionID=53&OfficeID=1'
                      ,scraper: function(){
           var tbl = $('#_ctl4_lblText tbody').map(function() {
                    return $(this).find('td').map(function() {
                      return $(this).text();
                    }).get();
                 }).get();
           tbl.splice(0,3);
           tbl.splice(24,10);      
           var results2 = {};
           for (i = 0; i < tbl.length / 6; i++){
             var s = i*6;
             results2[tbl[s]] = {};
             results2[tbl[s]]['votes'] = tbl[s+3];
             results2[tbl[s]]['percent'] = tbl[s+4];
           }
           results2['reporting'] = $("font:contains('9,257 Districts')").text();
           results2['election'] = 'PA President';
           return results2;
         }
         });