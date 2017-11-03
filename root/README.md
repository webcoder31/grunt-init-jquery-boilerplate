# {%= title %}

> {%= description %}

![{%= name %}](./.github/README.jpg?raw=true "{%= title %}")


## Summary

<!-- MarkdownTOC autolink="true" link_prefix="user-content-" uri_encoding="false" autoanchor="false" bracket="round" markdown_preview="github"-->

- [Usage](#user-content-usage)
- [Contributing](#user-content-contributing)
- [History](#user-content-history)
- [License](#user-content-license)

<!-- /MarkdownTOC -->


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

You can report issues or suggest improvments [here]({%= repo_url %}e/issues).

Want to submit your own feature? Please, look at [CONTRIBUTING.md]({%= repo_url %}/blob/master/.github/CONTRIBUTING.md) for a guideline.


## History

Check [Releases]({%= repo_url %}/releases) for detailed changelog.


## License

This software is governed by the {%= licenses %} license(s).

Check the license(s) file(s) included in the project for more information.
