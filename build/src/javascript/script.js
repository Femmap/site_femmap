$(document).ready(function() {

    // if (sessionStorage.getItem("language") !== null){
    //     var button_language = document.getElementsByClassName('btn-change-language');
    //     for(let i=0; i<button_language.length; i++){
    //         if(sessionStorage.getItem("language") === 'pt'){
    //             button_language[i].lang = 'pt'
    //             $('[lang="eng"]').hide();
    //             $('[lang="pt-br"]').show();
    //         } else if(sessionStorage.getItem("language") === 'en'){
    //             button_language[i].lang = 'en'
    //             $('[lang="pt-br"]').hide();
    //             $('[lang="eng"]').show();
    //         }
    //     }
    // }

    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        
        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

});

function removeMsg() { 
    document.getElementById("msg-maintenance").style.display = "none";
}

function changeLanguage() {
    var button_language = document.getElementsByClassName('btn-change-language')
    for(let i=0; i<button_language.length; i++){

        if(button_language[i].lang === 'en'){
            sessionStorage.setItem('language', 'pt')
            button_language[i].lang = 'pt'
            $('[lang="eng"]').hide();
            $('[lang="pt-br"]').show();
        } else if(button_language[i].lang === 'pt'){
            sessionStorage.setItem('language', 'en')
            button_language[i].lang = 'en'
            $('[lang="pt-br"]').hide();
            $('[lang="eng"]').show();
        }  

    }
}



function changeLanguageOnLoad(){

    if (sessionStorage.getItem("language") !== null){

        var button_language = document.getElementsByClassName('btn-change-language');

        for(let i=0; i<button_language.length; i++){

            if(sessionStorage.getItem("language") === 'pt'){

                button_language[i].lang = 'pt'

                $('[lang="eng"]').hide();
                $('[lang="pt-br"]').show();

            } else if(sessionStorage.getItem("language") === 'en'){

                button_language[i].lang = 'en'

                $('[lang="pt-br"]').hide();
                $('[lang="eng"]').show();
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', async (event) => {

    var refreshIntervalId = setInterval(changeLanguageOnLoad, 300);
    setTimeout(function() {clearInterval(refreshIntervalId)},10000);

})