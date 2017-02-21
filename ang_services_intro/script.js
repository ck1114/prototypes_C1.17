var app = angular.module("ang_prototype", []);

app.controller("mainController", function($log, $http){
    var self = this;
    self.artistName ='';
    self.url;

    //create the url from the input field
    self.make_url = function () {
        self.url = "https://itunes.apple.com/search?term=" + self.artistName + "&callback=JSON_CALLBACK";
        return self.url;
    };

    //grab data from itunes
    self.getData = function(){
        $log.log("getting data");
        $log.log(self.make_url(self.artistName));

        $http({
            url: self.make_url(),
            method:"jsonp",
            cache: false
        })
        .then(
            function(response){
                $log.log("success", response.data);
                self.results =  response.data.results;
                return self.results;
            },
            function(response){
                $log.log("error", response);
            });
    };
});

