[//]: #(Reference)
[prj_deployed_ep]: https://abelgacem.github.io/project/
[url_jekyll]:      https://jekyllrb.com
[url_githubpages]: https://pages.github.com


# Description
- This git repository is a documentation project
- It documents some IT projects.
- 

# Folders content
|name|type|description|
|-|-|-|
|`docs`|folder|the documentation, written using the [Jekyll][url_jekyll] framework|
|`docs\list`|folder|the site usefull content|
|`env`|folder||

# How to contribute
- git clone this repository

# How to test locally
- install `jekyll`
- git clone this repository
- `cd` to the repository
- ln -s /tmp/project/env/Gemfile
- copy file `env\Gemfile` to `docs\`

# The process
- `git clone` the repository
- create a new branch from branch `main` (call it `test`)
- Do some changes on branch `test`
- merge branch `test` to branch `main`
- push the local changes to remote repo
- this push trigger the following actions
  - github build the site
  - github deploy the site to github pages
- A Git push to the branch `main` of the repository, trigger a publishing of the website.
- The static website is build and deployed to a [public IP][prj_deployed_ep] using [Github pages][url_githubpages].
