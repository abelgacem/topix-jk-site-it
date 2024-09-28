[//]: #(Reference)
[prj_deployed_ep]: https://abelgacem.github.io/project/
[url_jekyll]:      https://jekyllrb.com
[url_githubpages]: https://pages.github.com


# Description
- This git repository is a documentation project
- It documents some IT projects.

# Folders content
|name|type|description|
|-|-|-|
|`docs`|folder|the documentation, written using the [Jekyll][url_jekyll] framework|
|`docs\list`|folder|the site usefull content|
|`env`|folder||

# How to test locally
- install `jekyll`
- git clone this repository
- `cd` to the repository
- `cd` to folder: `docs`
- create the following link
  ```shell
  ln -s ../env/Gemfile.local Gemfile
  ```
- build and publish the site loaclly
  ```shell
  export GEM_HOME="${HOME}/wkspc/gems"
  export PATH="${GEM_HOME}/bin:$PATH"
  bundle exec jekyll serve --livereload
  ```  
- port forward the local IP to a public IP
  ```shell
  # generate a public IP
  ssh -R 80:localhost:4000 serveo.net
  ```
# How to contribute
- `git clone` the repository
- create a new branch from branch `main` (call it `test`)
- Do some changes on branch `test`
- merge branch `test` to branch `main`
- push the local changes to remote repo
- this push trigger the following actions
  - `github` build the site
  - `github` deploy the site to [Github pages][url_githubpages] with a [public IP][prj_deployed_ep]
