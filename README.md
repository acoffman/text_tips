#TextTips
###Lightweight input field help text.

What is this?
---------------

This is a JQuery plugin that can be used to display help text or prompts in your input controls that will disappear when the user clicks on the field. The text will reappear when they click off unless they have entered their own value. The plugin attaches a custom class when the default text is displayed so that you can style it differently than user input if you'd like.


Usage
-----

Setup is super simple and there is only one field that you're required to pass.

1. Include JQuery, either from a CDN or your local copy

        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
2. Include the TextTips plugin

        <script type="text/javascript" src="jquery.text_tips.js"></script>
3. Call the plugin on any text input JQuery selector. This example will apply it to all text inputs, but you could always use a more specific selector if needed.

        $('input[type=text]').text_tips();


Configuration
--------

- `attribute`: By default TextTips will use the `title` attribute of each input to populate the text, but you can change it to any attribute you'd like by passing in a different attribute name

- `inputClass`: By default TextTips will apply the class `text_tip` to your inputs when the default text is displayed, and remove it when the user enters something. You can change this class by passing in a different class name

You can specify either, both, or neither of these two options and TextTips will work just fine. As an example, if you wanted to apply the css class `help` to the inputs instead, you could use TextTips like this:

    $('input[type=text]').text_tips({inputClass: 'help'});

Preview
------------
Coming soon, need to make a .gif file


Author
-------

[Adam Coffman](http://thecoffman.com) :: [coffman.adam@gmail.com](mailto:coffman.adam@gmail.com) :: [@thecoffman](http://twitter.com/thecoffman)

