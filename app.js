$(document).ready(function(){
  $(".albums").append(buildAlbumRows(albumMap(imgs)));
  $("i").addClass("fa-lg");
  $(".sideNav").append(buildSideNav(albumMap(imgs)));
  $(".rowItem[data-type='album']").hover(function(){
    $(this).children("i").addClass("fa-folder-open-o").removeClass("fa-folder-o");
  }, function(){
    $(this).children("i").addClass("fa-folder-o").removeClass("fa-folder-open-o");
  });
  $(".rowItem[data-type='album']").on("click", function() {
    var images = imageMap(imgs);
    var albumName = $(this).children("img").attr("rel");
    images = images.filter(function(el){
      return el.album === albumName;
    });
    $(".images").append(buildImageRows(images));
    $(".imagesContainer").addClass("active");
    $(".albums").removeClass("active");
    var sideNavItem = ".sideNav [rel='" + albumName + "']";
    $(sideNavItem).addClass("activeAlbum");
  });
  $(".sideNav li").on("click", function(){
    var images = imageMap(imgs);
    var albumName = $(this).attr("rel");
    images = images.filter(function(el){
      return el.album === albumName;
    });
    $(".images").html("<h2>Images</h2>");
    $(".images").append(buildImageRows(images));
    $(this).siblings().removeClass("activeAlbum");
    $(this).addClass("activeAlbum");
  });
});

function buildAlbumRows(array) {
  var row = "<div class='row'>";
  array.forEach(function(el, idx, arr){
    row += "<div class='rowItem' data-type='"
        + el.type + "'>"
        + "<i class='fa " + el.icon + "'></i>"
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
    row += "<div class='rowItem' data-type='"
        + el.type + "'>"
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
      cover: el.album_cover,
      icon: el.album_icon,
      type: el.type
    }
  });
  return result;
}

function imageMap(array){
  var result = [];
  array.forEach(function(el){
  result.push(el.photos);
  })
  return _.flatten(result, true);
}

function buildSideNav(array) {
  var sideNav = "<ul>";
  array.forEach(function(el){
    sideNav += "<li rel='"
            + el.name
            + "'>"
            + el.name + "</li>"
  });
  sideNav += "</ul>";
  return sideNav;
}
