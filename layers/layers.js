var wms_layers = [];

var format_sdn_admin2_0 = new ol.format.GeoJSON();
var features_sdn_admin2_0 = format_sdn_admin2_0.readFeatures(json_sdn_admin2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sdn_admin2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sdn_admin2_0.addFeatures(features_sdn_admin2_0);
var lyr_sdn_admin2_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sdn_admin2_0, 
                style: style_sdn_admin2_0,
                popuplayertitle: 'sdn_admin2',
                interactive: true,
                title: '<img src="styles/legend/sdn_admin2_0.png" /> sdn_admin2'
            });
var format_ssd_admin3_1 = new ol.format.GeoJSON();
var features_ssd_admin3_1 = format_ssd_admin3_1.readFeatures(json_ssd_admin3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ssd_admin3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ssd_admin3_1.addFeatures(features_ssd_admin3_1);
var lyr_ssd_admin3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ssd_admin3_1, 
                style: style_ssd_admin3_1,
                popuplayertitle: 'ssd_admin3',
                interactive: true,
                title: '<img src="styles/legend/ssd_admin3_1.png" /> ssd_admin3'
            });
var format_MediaReviewInteractiveMapSpreadsheetSeptember_2 = new ol.format.GeoJSON();
var features_MediaReviewInteractiveMapSpreadsheetSeptember_2 = format_MediaReviewInteractiveMapSpreadsheetSeptember_2.readFeatures(json_MediaReviewInteractiveMapSpreadsheetSeptember_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MediaReviewInteractiveMapSpreadsheetSeptember_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MediaReviewInteractiveMapSpreadsheetSeptember_2.addFeatures(features_MediaReviewInteractiveMapSpreadsheetSeptember_2);
var lyr_MediaReviewInteractiveMapSpreadsheetSeptember_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MediaReviewInteractiveMapSpreadsheetSeptember_2, 
                style: style_MediaReviewInteractiveMapSpreadsheetSeptember_2,
                popuplayertitle: 'Media Review Interactive Map Spreadsheet (September)',
                interactive: true,
    title: 'Media Review Interactive Map Spreadsheet (September)<br />\
    <img src="styles/legend/MediaReviewInteractiveMapSpreadsheetSeptember_2_0.png" /> Humanitarian<br />\
    <img src="styles/legend/MediaReviewInteractiveMapSpreadsheetSeptember_2_1.png" /> Photo<br />\
    <img src="styles/legend/MediaReviewInteractiveMapSpreadsheetSeptember_2_2.png" /> Politics & Governance<br />\
    <img src="styles/legend/MediaReviewInteractiveMapSpreadsheetSeptember_2_3.png" /> Resilience & Extras<br />\
    <img src="styles/legend/MediaReviewInteractiveMapSpreadsheetSeptember_2_4.png" /> Security<br />\
    <img src="styles/legend/MediaReviewInteractiveMapSpreadsheetSeptember_2_5.png" /> <br />' });

lyr_sdn_admin2_0.setVisible(true);lyr_ssd_admin3_1.setVisible(true);lyr_MediaReviewInteractiveMapSpreadsheetSeptember_2.setVisible(true);
var layersList = [lyr_sdn_admin2_0,lyr_ssd_admin3_1,lyr_MediaReviewInteractiveMapSpreadsheetSeptember_2];
lyr_sdn_admin2_0.set('fieldAliases', {'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm2_ref_n': 'adm2_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_ssd_admin3_1.set('fieldAliases', {'adm3_name': 'adm3_name', 'adm3_name1': 'adm3_name1', 'adm3_name2': 'adm3_name2', 'adm3_name3': 'adm3_name3', 'adm3_pcode': 'adm3_pcode', 'adm2_name': 'adm2_name', 'adm2_name1': 'adm2_name1', 'adm2_name2': 'adm2_name2', 'adm2_name3': 'adm2_name3', 'adm2_pcode': 'adm2_pcode', 'adm1_name': 'adm1_name', 'adm1_name1': 'adm1_name1', 'adm1_name2': 'adm1_name2', 'adm1_name3': 'adm1_name3', 'adm1_pcode': 'adm1_pcode', 'adm0_name': 'adm0_name', 'adm0_name1': 'adm0_name1', 'adm0_name2': 'adm0_name2', 'adm0_name3': 'adm0_name3', 'adm0_pcode': 'adm0_pcode', 'valid_on': 'valid_on', 'valid_to': 'valid_to', 'area_sqkm': 'area_sqkm', 'version': 'version', 'lang': 'lang', 'lang1': 'lang1', 'lang2': 'lang2', 'lang3': 'lang3', 'adm3_ref_n': 'adm3_ref_n', 'center_lat': 'center_lat', 'center_lon': 'center_lon', });
lyr_MediaReviewInteractiveMapSpreadsheetSeptember_2.set('fieldAliases', {'Title': 'Title', 'Date': 'Date', 'Type': 'Type', 'Link': 'Link', 'Source Name': 'Source Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_sdn_admin2_0.set('fieldImages', {'adm2_name': 'TextEdit', 'adm2_name1': 'TextEdit', 'adm2_name2': 'TextEdit', 'adm2_name3': 'TextEdit', 'adm2_pcode': 'TextEdit', 'adm1_name': 'TextEdit', 'adm1_name1': 'TextEdit', 'adm1_name2': 'TextEdit', 'adm1_name3': 'TextEdit', 'adm1_pcode': 'TextEdit', 'adm0_name': 'TextEdit', 'adm0_name1': 'TextEdit', 'adm0_name2': 'TextEdit', 'adm0_name3': 'TextEdit', 'adm0_pcode': 'TextEdit', 'valid_on': 'DateTime', 'valid_to': 'DateTime', 'area_sqkm': 'TextEdit', 'version': 'TextEdit', 'lang': 'TextEdit', 'lang1': 'TextEdit', 'lang2': 'TextEdit', 'lang3': 'TextEdit', 'adm2_ref_n': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', });
lyr_ssd_admin3_1.set('fieldImages', {'adm3_name': '', 'adm3_name1': '', 'adm3_name2': '', 'adm3_name3': '', 'adm3_pcode': '', 'adm2_name': '', 'adm2_name1': '', 'adm2_name2': '', 'adm2_name3': '', 'adm2_pcode': '', 'adm1_name': '', 'adm1_name1': '', 'adm1_name2': '', 'adm1_name3': '', 'adm1_pcode': '', 'adm0_name': '', 'adm0_name1': '', 'adm0_name2': '', 'adm0_name3': '', 'adm0_pcode': '', 'valid_on': '', 'valid_to': '', 'area_sqkm': '', 'version': '', 'lang': '', 'lang1': '', 'lang2': '', 'lang3': '', 'adm3_ref_n': '', 'center_lat': '', 'center_lon': '', });
lyr_MediaReviewInteractiveMapSpreadsheetSeptember_2.set('fieldImages', {'Title': '', 'Date': '', 'Type': '', 'Link': '', 'Source Name': '', 'Location': '', 'Latitude': '', 'Longitude': '', });
lyr_sdn_admin2_0.set('fieldLabels', {'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm2_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_ssd_admin3_1.set('fieldLabels', {'adm3_name': 'no label', 'adm3_name1': 'no label', 'adm3_name2': 'no label', 'adm3_name3': 'no label', 'adm3_pcode': 'no label', 'adm2_name': 'no label', 'adm2_name1': 'no label', 'adm2_name2': 'no label', 'adm2_name3': 'no label', 'adm2_pcode': 'no label', 'adm1_name': 'no label', 'adm1_name1': 'no label', 'adm1_name2': 'no label', 'adm1_name3': 'no label', 'adm1_pcode': 'no label', 'adm0_name': 'no label', 'adm0_name1': 'no label', 'adm0_name2': 'no label', 'adm0_name3': 'no label', 'adm0_pcode': 'no label', 'valid_on': 'no label', 'valid_to': 'no label', 'area_sqkm': 'no label', 'version': 'no label', 'lang': 'no label', 'lang1': 'no label', 'lang2': 'no label', 'lang3': 'no label', 'adm3_ref_n': 'no label', 'center_lat': 'no label', 'center_lon': 'no label', });
lyr_MediaReviewInteractiveMapSpreadsheetSeptember_2.set('fieldLabels', {'Title': 'no label', 'Date': 'no label', 'Type': 'no label', 'Link': 'no label', 'Source Name': 'no label', 'Location': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_MediaReviewInteractiveMapSpreadsheetSeptember_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});