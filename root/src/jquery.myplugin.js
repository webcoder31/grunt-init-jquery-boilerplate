;( function( $, window, document ) {

    // Strict mode.
    "use strict";

    // Plugin name.
    var pluginName = "{%= js_safe_name %}";

    // Defaults parameters.
    var defaults = {
            propertyName: document.title
        };

    // Plugin instance constructor.
    function Plugin ( element, options ) {

        // Store the DOM element who plugin is attached to.
        this.element = element;

        // Merge defaults parameters with passed-in options.
        this.settings = $.extend( {}, defaults, options );

        // Store plugin name and defaults parameters.
        this._defaults = defaults;
        this._name = pluginName;

        // Initialize plugin instance.
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend( Plugin.prototype, {

        // Initialize.
        init: function() {

            // Place initialization logic here.
            this.doSomething( "My jQuery Plugin" );

            // Trigger a resize event in case some elements of your plugin
            // need to recalculate their dimensions (based on this event).
            $( window ).resize();
        },

        // Do something.
        doSomething: function( text ) {

            // Some logic.
            $( this.element ).text( text );
        }
    } );

    // Lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations.
    $.fn[ pluginName ] = function( options ) {
        return this.each( function() {
            if ( !$.data( this, "plugin_" + pluginName ) ) {
                $.data( this, "plugin_" +
                    pluginName, new Plugin( this, options ) );
            }
        } );
    };

} )( jQuery, window, document );
