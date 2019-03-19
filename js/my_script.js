$(document).ready(function() {
    
    /*// code currently displays user info modal on first visit to site
    TO DO: Display only if it doesn't have user info yet
    if ($.cookie('pop') == null) {
        $('#userInfoModal').modal('show');
        $.cookie('pop', '7');
    }*/ 
    
    // flips game card and plays audio on click
    $('.flip-card').click(function() {
        $(this).toggleClass('active');
        $(this).find('audio')[0].play();
    });
    
    $('.btn').click(function() {
        $(this).children('audio')[0].play();
    });
    
    $(':radio').click(function() {
        $(this).sibling('audio')[0].play();
    });
    
})
