(function() {
  var $;

  $ = jQuery;

  $.fn.text_tips = function(options) {
    var defaults, settings;
    options = options || {};
    defaults = {
      attribute: 'title',
      inputClass: 'text_tip'
    };
    settings = $.extend(defaults, options);
    this.each(function() {
      var $this, value;
      $this = $(this);
      value = $this.attr(settings.attribute);
      $this.val(value);
      $this.addClass(settings.inputClass);
      $this.on('blur', function(e) {
        if (!$this.val()) {
          $this.val(value);
          return $this.addClass(settings.inputClass);
        }
      });
      return $this.on('click', function(e) {
        if ($this.val() === value) {
          $this.val('');
          return $this.removeClass(settings.inputClass);
        }
      });
    });
    return this;
  };

}).call(this);
