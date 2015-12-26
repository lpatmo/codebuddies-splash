$(document).ready(function() {
    
  $('[data-toggle="tooltip"]').tooltip({
    animated: 'fade',
    placement: 'bottom',
    html: true
})

    var url = "https://slack.com/api/search.messages?token=xoxp-4364220508-4364220524-4392702949-7f6cbd&query=%23todayilearned&count=100";
    $.getJSON(url, function (results) {
       // console.log(results);
        var htmlString = "";
        $.each(results.messages.matches, function (i, item) {
           //console.log(item.text);
            
     
             item.text = item.text.replace(/<@U\w+>/, '@anonymous').replace(/</, '').replace(/>/,'').replace(/#todayilearned/,'<span class="highlight">#todayilearned</span>');

             htmlString += '<div class="box"><p>' + item.text + '</p>' + '<p class="username">@' + item.username + '</p></div>'; 
        

        }); //each
        

         $('#submissions').html(htmlString);

                      $('.box p').html(function(_, html) {
                return  html.replace(/(\S+\.(com|net|org|edu|gov)(\/\S+)?)/g, '<a href="$1" target="_blank">$1</a>')
             });

    });
    
});