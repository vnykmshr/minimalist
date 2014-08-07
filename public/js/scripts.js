// user scripts

if (typeof hljs !== 'undefined') {
    hljs.tabReplace = '    ';
    hljs.initHighlightingOnLoad();
}

$(document).ready(function () {
    // //add extra content to permit the 3D rotation on links
    // $('body > section.content > article > footer > section.author > h1 > a')
    //     .each(function () {
    //         var content = ($(this).attr("data-hover")) ? $(this).attr(
    //             "data-hover") : $(this).text();
    //         $(this).html('<span data-hover="' + content + '">' +
    //             content + '</span>');
    //     });


    //open/close navbar
    $('#trigger-nav').click(function (e) {
        $('body').toggleClass('aside-expanded');
        e.preventDefault();
    });
});
