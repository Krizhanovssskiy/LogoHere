$('header .cmn-toggle-switch').click(function(){
    $(this).toggleClass('active');
    $('nav').toggleClass('active');
});

var $grid = $('.grid').imagesLoaded( function() {
    // init Masonry after all images have loaded
    $grid.masonry({
        // options...
        percentPosition: true,
        columnWidth: '.grid-sizer',
        itemSelector: '.grid-item'
    });
});