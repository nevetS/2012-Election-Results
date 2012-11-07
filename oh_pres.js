pjs.config({ 
    // options: 'stdout', 'file' (set in config.logFile) or 'none'
    log: 'stdout',
    // options: 'json' or 'csv'
    format: 'json',
    // options: 'stdout' or 'file' (set in config.outFile)
    writer: 'file',
    outFile: 'oh_pres.json'
});

pjs.addSuite({
                       url: 'http://www2.sos.state.oh.us/pls/enrpublic/f?p=212:41:135238791157703::NO::P41_REGION,P41_RACE_CODE:Statewide,PR'
                      ,scraper: function(){
           var tbl = $('#R5301016563267310 table table').map(function() {
                    return $(this).find('td').map(function() {
                      return $(this).text();
                    }).get();
                 }).get();
           tbl.splice(0,3);
           tbl.splice(42)
           var results2 = {};
           for (i = 0; i < tbl.length / 6; i++){
             var s = i*6;
             results2[tbl[s]] = {};
             results2[tbl[s]]['votes'] = tbl[s+1];
             results2[tbl[s]]['percent'] = tbl[s+2];
           }
           results2['reporting'] = $(".report-col-hdr:contains('Precincts reporting') + .report-col-val").text() + '% Precincts Reporting'
           results2['election'] = 'OH President';
           
           return results2
         }
         });
         
