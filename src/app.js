import L from 'leaflet';
import "leaflet/dist/leaflet.css";

(function(global) {
  
  var map = L.map('business_map', { 
    zoomControl: false,
    crs: L.CRS.Simple,
    minZoom: 0.3
  }).fitWorld();
  var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
  svgElement.setAttribute('viewBox', "0 0 1703 862");
  svgElement.innerHTML = '<g inkscape:groupmode="layer" id="layer2" inkscape:label="Layer 2"> </g> ';
  var svgElementBounds = [ [ 0, 0 ], [ 1703, 862 ] ];
  var mySvgOverLay = L.svgOverlay(svgElement, svgElementBounds).addTo(map);
  map.fitBounds(svgElementBounds);
  
  map.scrollWheelZoom.disable()
  map.dragging.disable()
  map.touchZoom.disable()
  map.doubleClickZoom.disable()
  map.boxZoom.disable()
  map.keyboard.disable()
})
