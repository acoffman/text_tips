$ = jQuery
$.fn.text_tips = (options) ->
  options = options || {};
  defaults =
    attribute: 'title',
    inputClass: 'text_tip'

  settings = $.extend(defaults, options)
  this.each ->
    value = $(this).attr(settings.attribute)
    $(this).val(value)
    $(this).addClass(settings.inputClass)

    $(this).on 'blur', (e) ->
      if !$(this).val()
        $(this).val(value)
        $(this).addClass(settings.inputClass)

    $(this).on 'click', (e) ->
      if $(this).val() == value
        $(this).val('')
        $(this).removeClass(settings.inputClass)
  this
