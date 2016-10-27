jQuery(document).ready(function() {
    jQuery('.tabs .links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');

        // Show/Hide Tabs
        // jQuery('.content ' + currentAttrValue).fadeIn(400).siblings().hide();
        jQuery('.content ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});