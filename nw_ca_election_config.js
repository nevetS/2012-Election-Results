pjs.addSuite({
                       url: 'http://vote.sos.ca.gov/returns/president/'
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
           results2['election'] = 'CA President';
           return results2
         }
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
         
pjs.addSuite({
                       url: 'http://vote.sos.ca.gov/returns/ballot-measures/'
                      ,scraper: function(){
           var tbl = $('table.stateCountyResultsTbl tr').map(function() {
                    return $(this).find('td').map(function() {
                      return $(this).text();
                    }).get();
                 }).get();
           var results2 = {};
           for (i = 0; i < tbl.length / 7; i++){
             var s = i*;
             results2[tbl[s+1]] = {};
             results2[tbl[s+1]]['title'] = tbl[s+2];
             results2[tbl[s+1]]['yesvotes'] = tbl[s+3];
             results2[tbl[s+1]]['yespercent'] = tbl[s+4];
             results2[tbl[s+1]]['novotes'] = tbl[s+5];
             results2[tbl[s+1]]['nopercent'] = tbl[s+4];
             
           }
           results2['reporting'] = $('.precinctRptgMsg').text();
           results2['election'] = 'CA Props';
           
           return results2
         }
         });         