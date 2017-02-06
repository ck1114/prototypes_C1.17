//Create GLOBAL variable below here on line 2
var global_result;


$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function (result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result;
                var first_movie_info = global_result.feed.entry[0]["im:image"][2].label;
                console.log("the third image from the first movie", first_movie_info)
                for(var i=0; i<global_result.feed.entry.length; i++) {
                    var images = $("<img>", {src: global_result.feed.entry[i]["im:image"][2].label});
                    var figcaption = $("<figcaption>");
                    var movie_title = $("<h3>",{
                        text: global_result.feed.entry[i]["im:name"].label
                    });
                    var movie_director = $("<h4>", {
                        text: global_result.feed.entry[i]["im:artist"].label
                    });
                    figcaption.append(movie_title, movie_director);
                    $("#main").append(figcaption, images);
                }
            }
        });
        console.log('End of click function');
    });
});