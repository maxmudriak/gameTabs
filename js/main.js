;(function($){
    "use strict";
    $( document ).ready(function() {
        var cardUl = $('.ba-card__tabs'),
            tabItem = $('.ba-card__tabs-item'),
            cardElem = $('.ba-card-element');

        tabItem.on('click', function () {
            if(!$(this).hasClass('active')) {
                var indexLi = $("li").index($(this));
                indexLi++;
                //console.log(indexLi);
                tabItem.removeClass('active');
                $(this).addClass('active');
                cardElem.removeClass('active');
                $('.ba-card-element:nth-of-type('+ indexLi + ')').addClass('active');
            }
        });
    });
})(jQuery);
