
        $('#sunshineBtn').click(function () {//if button for going outside is clicked, display div id = sunshine
        $('.sunshine').css('display', "block");
        $('#btnDiv').hide();//hides div that contains sunshine or spirit buttons

    });
$('#spiritBtn').click(function () {//if button for staying in is clicked, display div id = spirit
    $('.spirit').css('display', "block");
    $('#btnDiv').hide();//hides div that contains sunshine or spirit buttons

});
