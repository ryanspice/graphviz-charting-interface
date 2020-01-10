export default svg =>{

  //get svg source.
  let serializer = new XMLSerializer();
  let source = serializer.serializeToString(svg);

  //add name spaces.
  if(!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)){
	source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if(!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)){
	source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
  }

  //add xml declaration
  source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

  var link = document.createElement('a');
  link.download = 'Example.graphviz.svg';
  link.type="application/octet-stream";
  var blob = new Blob([source], {type: 'img/svg+xml'});
  link.href = window.URL.createObjectURL(blob);
  link.click();

}
