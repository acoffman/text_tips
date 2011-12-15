$ = jQuery
$.fn.text_tips = (options) ->
  options = options || {};
  defaults =
    attribute: 'title'

  settings = $.extend(defaults, options)
  this.each ->
    value = $(this).attr(settings.attribute)
    $(this).val(value)

    $(this).on 'blur', (e) ->
      e.preventDefault()
      $(this).val(value) if !$(this).val()

    $(this).on 'click', (e) ->
      e.preventDefault()
      $(this).val('') if $(this).val() == value
  this
