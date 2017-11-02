# {%= title %}

> {%= description %}


## Usage

1. Include jQuery:

	```html
	<script src="http://code.jquery.com/jquery-{%= jquery_version_strict %}.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.{%= js_safe_name %}.min.js"></script>
	```

3. Call the plugin:

	```javascript
	$("#element").{%= js_safe_name %}({
		propertyName: "a custom value"
	});
	```


## Contributing

Check [CONTRIBUTING.md]({%= repo_url %}/blob/master/CONTRIBUTING.md) for more information.


## History

Check [Releases]({%= repo_url %}/releases) for detailed changelog.


## License

This software is governed by the {%= licenses %} license(s).

Check the license(s) file(s) included in the project for more information.
