function main() {
	$('#dropdown').change(function(){
		var lang = $('#dropdown').val(); //this should be the language
		changeLanguage(lang);
	});
	$('#dropdown2').change(function(){
		var country = $('#dropdown2').val();
		changeCountryCounts(country);
	})
	var parsedTaxonomy = parseInput(taxonomyJSON);
	jsonCallback(parsedTaxonomy);
}

function jsonCallback(parsedTaxonomy) {
  $("#viewLinear").change(function() {
    $("#treeVisContainer").empty();
    doLayout(parsedTaxonomy, d3.select("#treeVisContainer"));
  });
  $("#viewRadial").change(function() {
    $("#treeVisContainer").empty();
    doLayoutMike(parsedTaxonomy, d3.select("#treeVisContainer"));
  });
  doLayoutMike(parsedTaxonomy, d3.select("#treeVisContainer"));
}
