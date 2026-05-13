var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Locations_1 = new ol.format.GeoJSON();
var features_Locations_1 = format_Locations_1.readFeatures(json_Locations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Locations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Locations_1.addFeatures(features_Locations_1);
cluster_Locations_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Locations_1
});
var lyr_Locations_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Locations_1, 
                style: style_Locations_1,
                popuplayertitle: 'Locations',
                interactive: true,
    title: 'Locations<br />\
    <img src="styles/legend/Locations_1_0.png" /> Food & Cofee<br />\
    <img src="styles/legend/Locations_1_1.png" /> Section<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Locations_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Locations_1];
lyr_Locations_1.set('fieldAliases', {'categ': 'categ', 'Start': 'Start', 'Hall': 'Hall', 'inf': 'inf', 'Adress': 'Adress', 'Name': 'Name', });
lyr_Locations_1.set('fieldImages', {'categ': 'TextEdit', 'Start': 'TextEdit', 'Hall': 'TextEdit', 'inf': 'TextEdit', 'Adress': 'TextEdit', 'Name': 'TextEdit', });
lyr_Locations_1.set('fieldLabels', {'categ': 'no label', 'Start': 'inline label - visible with data', 'Hall': 'inline label - visible with data', 'inf': 'inline label - visible with data', 'Adress': 'inline label - visible with data', 'Name': 'inline label - visible with data', });
lyr_Locations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});