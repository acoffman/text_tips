(function ($) {
  $.fn.text_tips = function(options){
    options = options || {};
    var defaults = {
      attribute: 'title',
    }
    var settings = $.extend(defaults, options)
    this.each( function() {
      var value = $(this).attr(settings.attribute);
      $(this).val(value);
      $(this).on('blur', function(e){
        e.preventDefault();
        if(!$(this).val()){
          $(this).val(value);
        }
      });
      $(this).on('click',function(e){
        e.preventDefault();
        if($(this).val() == value){
          $(this).val('');
        }
      });
    });
    return this
  }
})(jQuery);
