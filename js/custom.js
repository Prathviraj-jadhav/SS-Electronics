$(window).on('scroll', function() {
if($('.header').length){
    var strickyScrollPos=100;
    if($(window).scrollTop()>strickyScrollPos){
        $('.header').addClass('header-fixed');
    }
    else if($(this).scrollTop()<=strickyScrollPos){
        $('.header').removeClass('header-fixed');
    }
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
        $('.scrollTop, .floating').addClass('active');
    }
    else {$('.scrollTop, .floating').removeClass('active');}
})

$(".scrollTop").click(function() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});

$('body').on('click', '.more-link', function(){
      $(this).toggleClass('active');
      $(this).closest('.more-content').toggleClass('active');
      $(this).find('.btn').text('Read Less');
    })
    $('body').on('click', '.more-link.active', function(){
      $(this).find('.btn').html('Read More');
    })

// ********** IntlTelInput **********
var intlScript = document.createElement('script');
intlScript.setAttribute('src','js/intlTelInput.js');
intlScript.setAttribute('type','text/javascript');
intlScript.setAttribute('class','intl-js');
var intlStyle = document.createElement('link');
intlStyle.setAttribute('rel','stylesheet');
intlStyle.setAttribute('class','intl-css');
intlStyle.setAttribute('href','css/intlTelInput.css');
var intlFreeScript = document.createElement('script');
intlFreeScript.setAttribute('class','intl-js');

$('body').on('click', '[data-bs-target="#LaptopRepairBook"]', function(){
    $('body').append(intlScript);
    $('body').append(intlStyle);
    $('body').append(intlFreeScript);
});
$(intlFreeScript).append('$("#mobile, #mobile2").intlTelInput({preferredCountries: [\'in\', \'jp\', \'us\', \'cn\', \'ru\'],})');