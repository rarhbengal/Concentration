var wms_layers = [];


        var lyr_SATELLITEVIEW_0 = new ol.layer.Tile({
            'title': 'SATELLITE VIEW',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_STREETVIEW_1 = new ol.layer.Tile({
            'title': 'STREET VIEW',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var lyr_TOURISTSPOTSCONCENTRATION_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'TOURIST SPOTS CONCENTRATION<br />\
    <img src="styles/legend/TOURISTSPOTSCONCENTRATION_2_0.png" /> 0.0000<br />\
    <img src="styles/legend/TOURISTSPOTSCONCENTRATION_2_1.png" /> 164.8352<br />\
    <img src="styles/legend/TOURISTSPOTSCONCENTRATION_2_2.png" /> 329.6705<br />\
    <img src="styles/legend/TOURISTSPOTSCONCENTRATION_2_3.png" /> 494.5057<br />\
    <img src="styles/legend/TOURISTSPOTSCONCENTRATION_2_4.png" /> 659.3409<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TOURISTSPOTSCONCENTRATION_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [9553361.202923, 2483409.950919, 9842738.350285, 2824674.610827]
        })
    });
var lyr_HOTELSCONCENTRATION_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HOTELS CONCENTRATION<br />\
    <img src="styles/legend/HOTELSCONCENTRATION_3_0.png" /> 0.0000<br />\
    <img src="styles/legend/HOTELSCONCENTRATION_3_1.png" /> 324.7397<br />\
    <img src="styles/legend/HOTELSCONCENTRATION_3_2.png" /> 649.4794<br />\
    <img src="styles/legend/HOTELSCONCENTRATION_3_3.png" /> 974.2191<br />\
    <img src="styles/legend/HOTELSCONCENTRATION_3_4.png" /> 1298.9589<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HOTELSCONCENTRATION_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [9553361.202923, 2483409.950919, 9842738.350285, 2824674.610827]
        })
    });
var format_HOTELS_4 = new ol.format.GeoJSON();
var features_HOTELS_4 = format_HOTELS_4.readFeatures(json_HOTELS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOTELS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOTELS_4.addFeatures(features_HOTELS_4);
var lyr_HOTELS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOTELS_4, 
                style: style_HOTELS_4,
                popuplayertitle: 'HOTELS',
                interactive: true,
                title: '<img src="styles/legend/HOTELS_4.png" /> HOTELS'
            });
var format_TOURISTSPOTS_5 = new ol.format.GeoJSON();
var features_TOURISTSPOTS_5 = format_TOURISTSPOTS_5.readFeatures(json_TOURISTSPOTS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOURISTSPOTS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOURISTSPOTS_5.addFeatures(features_TOURISTSPOTS_5);
var lyr_TOURISTSPOTS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOURISTSPOTS_5, 
                style: style_TOURISTSPOTS_5,
                popuplayertitle: 'TOURIST SPOTS',
                interactive: true,
                title: '<img src="styles/legend/TOURISTSPOTS_5.png" /> TOURIST SPOTS'
            });
var format_RARHBANGLA_6 = new ol.format.GeoJSON();
var features_RARHBANGLA_6 = format_RARHBANGLA_6.readFeatures(json_RARHBANGLA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RARHBANGLA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RARHBANGLA_6.addFeatures(features_RARHBANGLA_6);
var lyr_RARHBANGLA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RARHBANGLA_6, 
                style: style_RARHBANGLA_6,
                popuplayertitle: 'RARH BANGLA',
                interactive: false,
                title: '<img src="styles/legend/RARHBANGLA_6.png" /> RARH BANGLA'
            });

lyr_SATELLITEVIEW_0.setVisible(true);lyr_STREETVIEW_1.setVisible(true);lyr_TOURISTSPOTSCONCENTRATION_2.setVisible(true);lyr_HOTELSCONCENTRATION_3.setVisible(true);lyr_HOTELS_4.setVisible(true);lyr_TOURISTSPOTS_5.setVisible(true);lyr_RARHBANGLA_6.setVisible(true);
var layersList = [lyr_SATELLITEVIEW_0,lyr_STREETVIEW_1,lyr_TOURISTSPOTSCONCENTRATION_2,lyr_HOTELSCONCENTRATION_3,lyr_HOTELS_4,lyr_TOURISTSPOTS_5,lyr_RARHBANGLA_6];
lyr_HOTELS_4.set('fieldAliases', {'Name': 'Name', 'DISTRICT': 'DISTRICT', });
lyr_TOURISTSPOTS_5.set('fieldAliases', {'Name': 'Name', 'DISTRICT': 'DISTRICT', 'VIEW': 'VIEW', });
lyr_RARHBANGLA_6.set('fieldAliases', {'DIST_NAME': 'DISRICT NAME :', });
lyr_HOTELS_4.set('fieldImages', {'Name': '', 'DISTRICT': '', });
lyr_TOURISTSPOTS_5.set('fieldImages', {'Name': 'TextEdit', 'DISTRICT': 'TextEdit', 'VIEW': 'ExternalResource', });
lyr_RARHBANGLA_6.set('fieldImages', {'DIST_NAME': 'TextEdit', });
lyr_HOTELS_4.set('fieldLabels', {'Name': 'inline label - always visible', 'DISTRICT': 'inline label - always visible', });
lyr_TOURISTSPOTS_5.set('fieldLabels', {'Name': 'inline label - always visible', 'DISTRICT': 'inline label - always visible', 'VIEW': 'inline label - always visible', });
lyr_RARHBANGLA_6.set('fieldLabels', {'DIST_NAME': 'inline label - always visible', });
lyr_RARHBANGLA_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});