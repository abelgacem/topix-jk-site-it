[//]: #(Reference)
[prj_deployed_ep]: https://abelgacem.github.io/project/
[url_jekyll]:      https://jekyllrb.com
[url_githubpages]: https://pages.github.com
[doc_contribute]:  ./CONTRIBUTING
[doc_changelog]:  ./CHANGELOG


# Introduction

The following environments exists:
|name|tag|description|purpose|
|-|-|-|-|
|**`local`**|dev, test|Local env specific to the developer|Test code before pushing to branch: `dev`|
|**`dev`**|dev, shared, test|Shared env for developers|Test code before merging into branch: `main`|
|**`stage`**|dev, shared, test|Shared env for testers|Test code after merging into branch: `main`|
|**`pprod`**|prod, shared, test|Pre-production env for final checks|Test code before deployment to production|
|**`prod`**|prod, shared|End-user environment|Provide services to end users|

# Folder's content
|name|type|description|
|-|-|-|
|`Gemfile.local`|file|Jekyll configuration file specific to the env: `local`|
