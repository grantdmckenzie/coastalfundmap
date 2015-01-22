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

var nationalmap = L.tileLayer('http://basemap.nationalmap.gov/ArcGIS/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var nationalimagery = L.tileLayer('http://services.nationalmap.gov/arcgis/rest/services/USGSImageryTopoLarge/MapServer/tile/{z}/{y}/{x}', {
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

// http://raster.nationalmap.gov/arcgis/rest/services/Orthoimagery/USGS_EROS_Ortho_NAIP/ImageServer
// map.addLayer(histlayers[11]);

popHistoric();

$('#nLayers').on('click',function() {
    if($('#wLayers').css("display") == "none")
      $('#wLayers').slideDown();
    else
      $('#wLayers').slideUp();
    $(this).toggleClass('selected');
});

$('.histlayer').on('click',function() {
    var x = this.id.split("_");
    if(map.hasLayer(histlayers[x[1]]))
	map.removeLayer(histlayers[x[1]]);
    else
	map.addLayer(histlayers[x[1]]);
    $(this).toggleClass('selected');
});

$('#linstagram').on('click',function() {
    if(map.hasLayer(inst_layer))
      map.removeLayer(inst_layer);
    else
      inst_layer.addTo(map);
    $(this).toggleClass('selected');
});

$('#lfoursquare').on('click',function() {
    if(map.hasLayer(fs_layer))
      map.removeLayer(fs_layer);
    else
      fs_layer.addTo(map);
    $(this).toggleClass('selected');
});

$('#ltweets').on('click',function() {
    if(map.hasLayer(tw_layer))
      map.removeLayer(tw_layer);
    else
      tw_layer.addTo(map);
    $(this).toggleClass('selected');
});

var _INSTAGRAM =  [];
var  inst_layer = null;

var _FOURSQUARE =  [];
var  fs_layer = null;

var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

var instaIcon = L.icon({
    iconUrl: 'img/instagram.png',
    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -6] // point from which the popup should open relative to the iconAnchor
});

var fsIcon = L.icon({
    iconUrl: 'img/foursquare.png',
    iconSize:     [23, 23], // size of the icon
    iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -6] // point from which the popup should open relative to the iconAnchor
});
var twIcon = L.icon({
    iconUrl: 'img/twitter24.png',
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
	  var da = new Date((data[i].ts*1000 - 28800000));
	  var df = da.getMonth()+1 +"/"+da.getDate()+"/"+da.getFullYear();
	  var caption = (data[i].caption.length <= 128) ? data[i].caption : data[i].caption.substring(0, 100)+"<a href='http://instagram.com/"+data[i].username+"' target='_blank'>...</a>";	
	  _INSTAGRAM.push(L.marker([data[i].lat, data[i].lng],{icon: instaIcon}).bindPopup("<div style='text-align:center;width:200px;'><a href='"+data[i].photo+"' target='_blank'><img src='"+unescape(data[i].thumb)+"'/></a>" + "<br/>" +caption+"<br/><span style='color:#999'>"+df+"</span><br/><a href='http://instagram.com/"+data[i].username+"' target='_blank'><img src='img/instagram2.png' style='width:16px;'/></a></div>"));
      }
      inst_layer = L.layerGroup(_INSTAGRAM);
      
   },
   type: 'GET'
});

$.ajax({
   url: 'handlers/foursquare.php',
   error: function(a, b, c) {
      alert('error');
   },
   dataType: 'json',
   success: function(data) {
      for(var i=0;i<data.length;i++) {
	  _FOURSQUARE.push(L.marker([data[i].lat, data[i].lng],{icon: fsIcon}).bindPopup("<div style='text-align:center;width:200px;'><u>Foursquare Point of Interest</u><br/><span style='font-size:1.2;font-weight:bold;'>"+data[i].name+"</span><br/>Category: "+data[i].cat+"<br/><a href='http://foursquare.com/venue/"+data[i].id+"' target='_blank'>More Information</a></div>"));
      }
      fs_layer = L.layerGroup(_FOURSQUARE);
      // fs_layer.addTo(map);
   },
   type: 'GET'
});

var _TWITTER =  [];
var  tw_layer = null;

$.ajax({
   url: 'handlers/twitter.php',
   error: function(a, b, c) {
      alert('error');
   },
   dataType: 'json',
   success: function(data) {
      for(var i=0;i<data.length;i++) {
	  _TWITTER.push(L.marker([data[i].lat, data[i].lng],{icon: twIcon}).bindPopup("<div style='text-align:center;width:200px;'><u>Tweet</u><br/><span style='font-size:1.2;font-weight:bold;'>"+data[i].tweet+"</span><br/>Category: "+data[i].src+"<br/><a href='http://foursquare.com/venue/"+data[i].id+"' target='_blank'>More Information</a></div>"));
      }
      tw_layer = L.layerGroup(_TWITTER);
      // tw_layer.addTo(map);
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
      //inst_layer.addTo(map); 
    } else {
      $('#lsocial').slideUp();
      $('#tSocial').css("background-image","url('img/rightarrow.png')");
      //map.removeLayer(inst_layer);
    }
}


