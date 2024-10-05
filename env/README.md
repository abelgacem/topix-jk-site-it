[//]: #(Reference)
[homepage]:        ../README.md
[ip_public]:       https://abelgacem.github.io/project/
[url_jekyll]:      https://jekyllrb.com
[url_githubpages]: https://pages.github.com
[doc_contribute]:  ./CONTRIBUTING
[doc_changelog]:  ./CHANGELOG



# [&larr;][homepage] Environments's list

The following environments exists:

|name|tag|description|purpose|
|-|-|-|-|
|**`local`**|dev, test|Local env specific to the developer|Test the code while working onto a temporary branch (eg. `feature`)|
|**`dev`**|dev, shared, test|Shared env for developers|Test the code after a push into the branch: `dev`|
|**`stage`**|dev, shared, test|Shared env for testers|Test the code after merging into the branch: `main`|
|**`pprod`**|prod, shared, test|Pre-production env for final checks|Test the code of the branch: `main` before the deployment to production|
|**`prod`**|prod, shared|End-user environment|Provide services to end users|

# Environments's detail
## env: `local`
This env indicates the working space of the developper:
  - his machine
  - a VM on a cloud
## env: `dev`
- This env indicates a cloud environment (ie. the Github pages environment)
- The process is the following:
  - A git push on branch : `main` trigger a SDEF. pipeline (the github action: **pages build and deployment**).
  - This action, build and deploy the artifact (build using [Jekhyll][url_jekyll]) in an environment managed by github.
  - As a result we have access [a static public IP][ip_public] to browse the site (ie the deployed artifact)

# Folder's content
|name|type|description|
|-|-|-|
|`Gemfile.local`|file|Jekyll configuration file specific to the env: `local`|
