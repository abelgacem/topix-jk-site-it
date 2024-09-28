[//]: #(Reference)
[prj_deployed_ep]: https://abelgacem.github.io/project/
[url_jekyll]:      https://jekyllrb.com
[url_githubpages]: https://pages.github.com


# Description
- This git repository is a documentation project
- It documents some IT projects.
- It uses the [Jekyll][url_jekyll] framework.
- A deployed version with [public IP][prj_deployed_ep] is published via [Github pages][url_githubpages].

# Folders content
|name|type|description|
|-|-|-|
|`docs`|folder|the documentation, written using |
|`docs\list`|folder|the site usefull content|
|`env`|folder||


# How to contribute
- `git clone` the repository
- create a new branch from branch `main` (eg. `test`).
- Do some changes on this new branch.
- merge branch `test` into branch `main`
- git push the local changes to the remote repo
- this git push trigger the following actions
  - `github` build the site
  - `github` deploy the site to [Github pages][url_githubpages] with a [public IP][prj_deployed_ep]

# How to browse, test the site locally
- install `jekyll`
- export the following VAR.
  ```shell
  export GEM_HOME="${HOME}/wkspc/gems"
  export PATH="${GEM_HOME}/bin:$PATH"
  ```

- git clone this repository
- `cd` to the repository folder
- `cd` to folder: `docs`
- create the following link
  ```shell
  ln -s ../env/Gemfile.local Gemfile
  ```
- build and publish on changes the site locally
 ```shell
  # any changes to the folder docs trigger a build ad publiih
  bundle exec jekyll serve --livereload
  ```  
- port forward the local IP to a public IP
  ```shell
  # generate a public IP
  ssh -R 80:localhost:4000 serveo.net
  ```
- Browse the site via the provides IP
  ```shell
  # type CTRL-R on code changes to refresh
  eg. https://99...0f.serveo.net
  ```
