$( document ).ready(function(){
    $('.readmore').click(function() {
        $('.bio').show();
        $('#name').text($(this).parent().children('.name').children('h3').text());
        // alert('./bio.html ".' + $(this).attr('id') + '"')
        $('.bio').children('span').load('./bio.html');
    });
    $('.close').click(function(){
        $(this).parent().parent().hide()
    })
});
