function do_election(dataurl){ 
	
   $.ajax({
     url: dataurl,
     context: document.body,
     dataType: 'json'
   }).done(function(data) {
   	 var cdata = data[0];
   	 var table = $('<table>');

 	 	 header = $('<tr ><th colspan=3>' + cdata['election'] + '</th></tr>');
 	 	 header2 = $('<tr ><th colspan=3>' + cdata['reporting'] + '</th></tr>');
     header3 = $('<tr><th>Candidate</th><th>Votes</th><th>Percent</th></tr>');
 	 	 table.append(header);
 	 	 table.append(header2);
 	 	 table.append(header3);

   	 for(var candidate in cdata){
   	 	 if(candidate != 'election' && candidate != 'reporting'){
   	 	   tdata = '<tr>';
   	 	   tdata += '<td>'+candidate+'</td>';
   	 	   tdata += '<td align="middle">'+ cdata[candidate]['votes']+'</td>';
   	 	   tdata += '<td align="middle">' + cdata[candidate]['percent']+ '</td>'
   	 	   tdata += '</tr>';   	 	
   	 	   table.append($(tdata));
   	 	 }
   	 }

     
     $('.result').append(table.html());
  
   });
}

function do_measures(dataurl){
   $.ajax({
     url: dataurl,
     context: document.body,
     dataType: 'json'
   }).done(function(data) {
   	 var mdata = data[0];
   	 var table = $('<table>');

 	 	 header = $('<tr ><th colspan=6>' + mdata['election'] + '</th></tr>');
 	 	 header2 = $('<tr><th colspan=6>' + mdata['reporting'] + '</th></tr>');
     header3 = $('<tr><th width="4em">#</th><th>Proposition</th><th>No Votes</th><th>No Percent</th><th>Yes Votes</th><th>Yes Percent</th></tr>');
 	 	 table.append(header);
 	 	 table.append(header2);
 	 	 table.append(header3);

   	 for(var measure in mdata){
   	 	 if(measure != 'election' && measure != 'reporting'){
   	 	   tdata = '<tr>';
   	 	   tdata += '<td align="middle">'+measure+'</td>'; 
   	 	   tdata += '<td align="left">'+ mdata[measure]['title']+'</td>';
   	 	   tdata += '<td align="middle">'+ mdata[measure]['novotes']+'</td>';
   	 	   tdata += '<td align="middle">' + mdata[measure]['nopercent']+ '</td>'
   	 	   tdata += '<td align="middle">'+ mdata[measure]['yesvotes']+'</td>';
   	 	   tdata += '<td align="middle">' + mdata[measure]['yespercent']+ '</td>'
   	 	   tdata += '</tr>';   	 	
   	 	   table.append($(tdata));
   	 	 }
   	 }

     
     $('.result').append(table.html());
  
   });
}

function init(){
  do_election('ca_pres.json');
  do_election('ca_senate.json'); 
  do_measures('ca_measures.json');
  do_election('pa_pres.json');
  do_election('oh_pres.json');
}

$(document).ready(init) ;