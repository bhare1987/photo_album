$(document).ready(function(){
  $(".albums").html(buildAlbumRows(albumMap(imgs)));
  $(".images").html(buildImageRows(imageMap(imgs)));

});

function buildAlbumRows(array) {
  var row = "<div class='row'>";
  array.forEach(function(el, idx, arr){
    row += "<div class='rowItem'>"
        + "<img src='"
        + el.url + "thumbnails/" + el.cover + ".png"
        + "' rel='" + el.name + "'>"
        + "<span>"
        + el.name
        + "</span>"
        + "</div>"
    if ((idx + 1) % 3 === 0 || (idx + 1) === arr.length) {
      row += "</div>";
    }
    if ((idx + 1) % 3 === 0 && (idx + 1) !== arr.length) {
      row += "<div class='row'>"
    }
  });
  return row;
}

function buildImageRows(array) {
  var row = "<div class='row'>";
  array.forEach(function(el, idx, arr){
    row += "<div class='rowItem'>"
        + "<img src='"
        + el.photo_path_thumb
        + "' rel='" + el.photo_name + "'>"
        + "<span>"
        + el.photo_name
        + "</span>"
        + "</div>"
    if ((idx + 1) % 3 === 0 || (idx + 1) === arr.length) {
      row += "</div>";
    }
    if ((idx + 1) % 3 === 0 && (idx + 1) !== arr.length) {
      row += "<div class='row'>"
    }
  });
  return row;
}

function albumMap(array){
  var result = array.map(function(el){
    return {
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
