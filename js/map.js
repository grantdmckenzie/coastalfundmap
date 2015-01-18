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
	  attribution: 'UCSB Dept. Geography',
	  unloadInvisibleTiles: true, 
	  maxZoom:18
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

var _INSTAGRAM =  [];
var  inst_layer = null;

var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var greenIcon = L.icon({
    iconUrl: 'img/instagram.png',
    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -6] // point from which the popup should open relative to the iconAnchor
});
  
$.ajax({
   url: 'handlers/instagram.php',
   error: function(a, b, c) {
      alert('error');
   },
   dataType: 'json',
   success: function(data) {
      for(var i=0;i<data.length;i++) {
	  var da = new Date(data[i].ts*1000);
	  var df = da.getMonth()+1 +"/"+da.getDate()+"/"+da.getFullYear() + " " + da.getHours() + ":" + (da.getMinutes()<10?'0':'') + da.getMinutes();
	  _INSTAGRAM.push(L.marker([data[i].lat, data[i].lng],{icon: greenIcon}).bindPopup("<div style='text-align:center;width:200px;'><img src='"+unescape(data[i].thumb)+"'/>" + "<br/>" + data[i].caption+"<br/>"+df+"<br/><img src='img/instagram2.png' style='width:16px;margin-top:5px'/><a href='"+data[i].photo+"' target='_blank'>Full Photo</a></div>"));
      }
      inst_layer = L.layerGroup(_INSTAGRAM);
      
   },
   type: 'GET'
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

function toggleSocial() {
  
    if ($('#lsocial').css('display') == "none") {
      $('#lsocial').slideDown();
      $('#tSocial').css("background-image","url('img/downarrow.png')");
      inst_layer.addTo(map); 
    } else {
      $('#lsocial').slideUp();
      $('#tSocial').css("background-image","url('img/rightarrow.png')");
      map.removeLayer(inst_layer);
    }
}