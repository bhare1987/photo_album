// function buildAlbumRows(array) {
//   var row = "<div class='row'";
//   array.forEach(function(el, idx){
//     row += "<div class='rowItem'>"
//         + "<img src='"
//         + el.
//     if (idx % 3 === 0) {
//
//     }
//   })
// }

function buildImageRows(array) {
  var row = "<div class="
}

function albumMap(array){
  var result = array.map(function(el){
    return {
      type: "album",
      name: el.album,
      url: el.album_url,
      cover: el.album_cover
    }
  });
  return result;
}

function imageMap(array){
  var result = [];
  array.forEach(function(el){
  result.push( _.flatten(el.photos, true));
  })
  return _.flatten(result, true);
}
