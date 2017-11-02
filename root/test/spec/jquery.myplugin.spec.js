( function( $, QUnit ) {

	"use strict";

	var $sandbox = $( "#sandbox" );
	var $target = null;

	QUnit.module( "My jQuery Plugin", {
		beforeEach: function() {

			// target is the element where the jQuery plugin will act.
			$target = $( "<div/>" );

			$sandbox.append( $target );
		},
		afterEach: function() {

			// we remove the element to reset our plugin job :)
			$target.remove();
		}
	} );

	QUnit.test( "is inside jQuery library", function( assert ) {

		assert.equal( typeof $.fn.{%= js_safe_name %}, "function", "has function inside jquery.fn" );
		assert.equal( typeof $target.{%= js_safe_name %}, "function", "another way to test it" );
	} );

	QUnit.test( "returns jQuery functions after called (chaining)", function( assert ) {
		assert.equal(
			typeof $target.{%= js_safe_name %}().on,
			"function",
			"'on' function must exist after plugin call" );
	} );

	QUnit.test( "caches plugin instance", function( assert ) {
		$target.{%= js_safe_name %}();
		assert.ok(
			$target.data( "plugin_{%= js_safe_name %}" ),
			"has cached it into a jQuery data"
		);
	} );

	QUnit.test( "enable custom config", function( assert ) {
		$target.{%= js_safe_name %}( {
			foo: "bar"
		} );

		var pluginData = $target.data( "plugin_{%= js_safe_name %}" );

		assert.deepEqual(
			pluginData.settings,
			{
				propertyName: document.title,
				foo: "bar"
			},
			"extend plugin settings"
		);

	} );

	QUnit.test( "changes the element text", function( assert ) {
		$target.{%= js_safe_name %}();

		assert.equal( $target.text(), "My jQuery Plugin" );
	} );

	QUnit.test(
		"has #doSomething working as expected",
		function( assert ) {
			$target.{%= js_safe_name %}();

			var instance = $target.data( "plugin_{%= js_safe_name %}" ),
				expectedText = "foobar";

			instance.doSomething( expectedText );
			assert.equal( $target.text(), expectedText );
		}
	);

}( jQuery, QUnit ) );
