var map = new L.Map("map", {
    center: new L.LatLng(34.414, -119.86),
    zoom: 15
});

var stamen = L.tileLayer('http://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by Stamen Design, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 4,
	maxZoom: 18
});
var esri = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});


map.addLayer(stamen);


var histlayers = {};

for(var propt in histimgnames) {
  histlayers[propt] = L.tileLayer('https://tiles.arcgis.com/tiles/4TXrdeWh0RyCqPgB/arcgis/rest/services/'+histimgnames[propt]+'/MapServer/tile/{z}/{y}/{x}', {
	  attribution: 'UCSB Dept. Geography'
  });
}

// map.addLayer(histlayers[11]);

popHistoric();

$('.histlayer').on('click',function() {
    var x = this.id.split("_");
    if(map.hasLayer(histlayers[x[1]]))
	map.removeLayer(histlayers[x[1]]);
    else
	map.addLayer(histlayers[x[1]]);
    $(this).toggleClass('selected');
    
});

function popHistoric() {
  
  var content = "";
  for(var propt in histimgnames) {
      content += "<div class='histlayer' id='h_"+propt+"'>"+propt+"</div>";
  }
  $('#lhistoric').html(content);
}

function toggleHistory() {
    if ($('#lhistoric').css('display') == "none") {
      $('#lhistoric').slideDown();
      $('#tHistory').css("background-image","url('img/downarrow.png')");
    } else {
      $('#lhistoric').slideUp();
      $('#tHistory').css("background-image","url('img/rightarrow.png')");
    }
}