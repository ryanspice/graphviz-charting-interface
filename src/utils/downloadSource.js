export default source =>{

  var link = document.createElement('a');
  //link.download = 'Example.graphviz';
  link.type="application/octet-stream";
  link.target="_blank"
  var blob = new Blob([source], {type: 'text/plain'});
  link.href = window.URL.createObjectURL(blob);
  link.click();

}
