// ==UserScript==
// @id             scribd-unlocker
// @name           scribd unlocker
// @version        1.0
// @author         Aditya Vartak
// @description    Unlock Scribd.com document pages
// @include        http*://*.scribd.com/*
// @run-at         document-end
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @homepageURL    https://github.com/adiv5/scribd-unlocker
// @updateURL      https://github.com/ayltai/Hack-Scribd-Unblurer/blob/master/scribdcomunblurer.meta.js
// @downloadURL    https://github.com/ayltai/Hack-Scribd-Unblurer/blob/master/scribdunlocker.js
// ==/UserScript==
setInterval(function() {
    $('.page-blur-promo-overlay').remove();
    $('.page_missing_explanation_inner').remove();
    $('.autogen_class_views_read2_page_blur_promo').remove();
    $('.outer_page only_ie6_border blurred_page').remove();
    $('.page-blur-promo').removeClass('page-blur-promo');
     $('.page_blur_promo').remove();
    $('.promo').remove();
    $('.absimg').css('opacity', '1.0');
    $('.text_layer').css('color', '#000');
    $('.text_layer').css('text-shadow', '0px 0px 0px #000');
    $('.autogen_class_views_pdfs_page_blur_promo').css('display','none');
}, 1000);
