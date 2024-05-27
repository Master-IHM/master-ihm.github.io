var _____WB$wombat$assign$function_____ = function (name) {
    return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name];
};
if (!self.__WB_pmw) {
    self.__WB_pmw = function (obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

    $(document).ready(
            $(".menu__item").click('.menu__link', function (e) {
        $(".menu__item").removeClass("menu__item--current");
        $(this).addClass("menu__item--current");
    })
            );


    $(document).ready(function ()
    {
        // 0/ Masquage des panneaux par dÃ©faut
        $panneaux = $('div.info.panneau').hide();

        // ---------------------------------------------------------------------------------------- //

        // 1/ Initialisation des liens d'accÃ¨s aux panneaux

        $('h4.titre').each(function (i)
        {
            $this = $(this);
            ancre = $this.next($panneaux)[0].id;

            lien = $('<a>',
                    {
                        'href': '#' + ancre,
                        'aria-expanded': 'false',
                        'aria-controls': ancre
                    });

            $this.wrapInner(lien);
        });

        // ---------------------------------------------------------------------------------------- //

        // 2/ Gestion de l'affichage des panneaux
        $('h4.titre > a').click(function ()
        {
            if ($(this).attr('aria-expanded') == 'false')
            {
                $(this).attr('aria-expanded', true).parent().next($panneaux).show();
            } else
            {
                $(this).attr('aria-expanded', false).parent().next($panneaux).hide();
            }
            return false;
        });
    });


// Instantiate the Bootstrap carousel
    const myCarouselElement = document.querySelector('.multi-item-carousel')

    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: false
    });

    // for every slide in carousel, copy the next slide's item in the slide.
    // Do the same for the next, next item.
    $('.multi-item-carousel .carousel-item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });

}
 