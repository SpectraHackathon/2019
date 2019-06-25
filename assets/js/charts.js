google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Location' });
  dataTable.addColumn({ type: 'string', id: 'Activity' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });
  dataTable.addRows([
    [ 'Main Room', 'Opening Ceremony', new Date(0,0,0,10,0,0), new Date(0,0,0,12,0,0) ],
    [ 'Main Room', 'Hacking', new Date(0,0,0,12,0,0), new Date(0,0,0,21,0,0) ],
    [ 'Main Room', 'Closing Ceremony', new Date(0,0,0,21,0,0), new Date(0,0,0,22,0,0)],
    [ 'Workshop Room 1', 'Service Now', new Date(0,0,0,13,0,0), new Date(0,0,0,14,0,0)],
    [ 'Workshop Room 1', 'Sisu', new Date(0,0,0,14,30,0), new Date(0,0,0,15,30,0)],
    [ 'Workshop Room 1', 'Braintree/Venmo', new Date(0,0,0,16,0,0), new Date(0,0,0,17,0,0)],
    [ 'Workshop Room 2', 'MongoDB', new Date(0,0,0,13,15,0), new Date(0,0,0,14,15,0)],
    [ 'Workshop Room 2', 'Flask API', new Date(0,0,0,14,45,0), new Date(0,0,0,15,45,0)],
    [ 'Kitchen', 'Beverages', new Date(0,0,0,8,30,0), new Date(0,0,0,21,0,0)],
    [ 'Kitchen', 'Lunch', new Date(0,0,0,12,0,0), new Date(0,0,0,13,0,0)],
    [ 'Kitchen', 'Dinner', new Date(0,0,0,19,0,0), new Date(0,0,0,20,0,0)],]);

  chart.draw(dataTable);
}