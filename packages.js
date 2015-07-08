{
	"packages": [
		{
			"name": "Archetype",
			"description": "Property Editor",
			"downloadLink": "https://our.umbraco.org/projects/backoffice-extensions/archetype/"
		},
		{
			"name": "CMS Import",
			"description": "CMSImport PRO helps you import content or members from any datasource into Umbraco. ",
			"downloadLink": "https://our.umbraco.org/projects/developer-tools/cmsimport/"
		},
		{
			"name": "Google Maps Property Editor",
			"description": "A simple Google Maps Property Editor for Umbraco v7 w/ Google Places Autocomplete lookup",
			"downloadLink": "https://our.umbraco.org/projects/backoffice-extensions/google-maps-property-editor-w-google-places-autocomplete-lookup/"
		},
		{
			"name": "Merchello",
			"description": "OpenSource Web Shop",
			"downloadLink": "https://our.umbraco.org/projects/collaboration/merchello/"
		},
		{
			"name": "SEOChecker",
			"description": "SEO checker helps you find common SEO issues on your website such as missing  meta tags, broken links etc. SEO checker allows you to fix issues on the page before publishing the page.",
			"downloadLink": "https://our.umbraco.org/projects/website-utilities/seo-checker/"
		},
		{
			"name": "Zbu",
			"description": "A tool that can generate a complete set of strongly-typed published content models for Umbraco to be used in the MVC views, from the Umbraco UI, or can be used by the Visual Studio extension.",
			"downloadLink": "https://our.umbraco.org/projects/developer-tools/zbumodelsbuilder/"
		},
		{
			"name": "RJP.MultiUrlPicker",
			"description": "MultiUrlPicker ist ein PropertyEditor, welcher dem User die Möglichkeit bietet mehre Links zu wähle und sortieren.",
			"downloadLink": "https://our.umbraco.org/projects/backoffice-extensions/multi-url-picker/"
		}
	],
	"contentTypes": [
		{
			"name": "Main",
			"alias": "Main",
			"tabs": [
				{
					"name": "SEO",
					"properties": [
						{
							"name": "Page Title",
							"alias": "seoPageTitle",
							"dataTypeId": -88
						},
						{
							"name": "Change Freq",
							"alias": "metaChangeFreq",
							"dataTypeAlias": "changeFreq"
						},
						{
							"name": "Prio",
							"alias": "metaPrio",
							"dataTypeAlias": "priority"
						}
					]
				}
			],
			"children": [
				{
					"name": "Frontpage",
					"alias": "Frontpage",
					"templateAlias": "Frontpage",
					"tabs": [
						{
							"name": "Content",
							"properties": [
								{
									"name": "Content",
									"alias": "content",
									"dataTypeId": -87
								}
							]
						}
					]
				}
			]
		}
	],
	"templates": [
		{
			"name": "Layout",
			"alias": "Layout",
			"path": "App_plugins/UmbracoScaffolding/configs/Templates/Layout.cshtml",
			"children": [
				{
					"name": "Frontpage",
					"alias": "Frontpage",
					"path": "https://raw.githubusercontent.com/umbraco/Umbraco-CMS/7c4a189aa3cf583954defd9c43a3e55e325f2c3f/src/Umbraco.Web.UI/Views/Partials/Grid/Editors/Base.cshtml"
				},{
					"name": "Textpage",
					"alias": "Textpage",
					"path": "\\\\192.168.99.10\\opten\\01_Projekte\\02_Interne_Projekte\\Umbraco\\Scaffolding\\dontdelete.txt"
				}
			],
			"dependencies": [
				{
					"name": "bootstrap",
					"url": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/css/bootstrap.min.css",
					"type": "styleSheet"
				},
				{
					"name": "jQuery",
					"url": "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js",
					"type": "javaScript"
				},
				{
					"name": "modernizr",
					"url": "http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js",
					"type": "javaScript"
				},
				{
					"name": "bootstrapJS",
					"url": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.2/js/bootstrap.min.js",
					"type": "javaScript"
				}
			]
		}
	],
	"dataTypes": [
		{
			"name": "ChangeFreq",
			"propertyEditor": "Umbraco.RadioButtonList",
			"preValues": ["Never", "Yearly", "Monthly", "Weekly", "Daily", "Hourly", "Always"]
		},{
			"name": "Priority",
			"propertyEditor": "Umbraco.RadioButtonList",
			"preValues": ["0.1", "0.2", "0.3", "0.4", "0.5", "0.6", "0.7", "0.8", "0.9", "1.0"]
		}
	]
}