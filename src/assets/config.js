$("#choice").change(function(){
    $("#table tbody tr").hide();
    $("#table tbody tr."+$(this).val()).show('fast');
  });

  //this JS calls the tablesorter plugin that we already use on our site
  $("#table").tablesorter( {sortList: [[0,0]]} );
