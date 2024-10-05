[//]: #(Reference)
[ip_public]:       https://abelgacem.github.io/project/
[url_jekyll]:      https://jekyllrb.com
[url_githubpages]: https://pages.github.com
[doc_contribute]:  ./CONTRIBUTING.md
[doc_changelog]:  ./CHANGELOG.md
[env_local]:      ./env/README.md#env-local


# Introduction

[![LICENSE](https://img.shields.io/badge/license-GNU_GPL_v3.0-green.svg)](https://choosealicense.com/licenses/gpl-3.0/)
![GitHub Pages deployment status](https://github.com/abelgacem/project/workflows/pages%20build%20and%20deployment/badge.svg)

# Description

- This git repository is a documentation project. It documents some IT projects.
- It uses the [Jekyll][url_jekyll] framework.
- A deployed version with [public IP][ip_public] is published via [Github pages][url_githubpages].

# Folder's content
|name|type|description|
|-|-|-|
|`docs`|folder|the documentation, written using [Jekyll][url_jekyll]|
|`docs\list`|folder|the usefull content|
|`env`|folder|assets and description for each environment|


# What's new
see the [Changelog][doc_changelog]

# How to contribute
see the [contributing guide][doc_contribute]

# Test in env: `local`
Please refer to [this section][env_local] for the description of this environment.

## purpose of the test
Browse the generated site.

## step to test
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
- build and publish the site locally
  ```shell
   # any changes to the folder docs trigger a build and publiih
   bundle exec jekyll serve --livereload
   ```  
- port forward the local IP to a public IP (not mandatory)
  ```shell
  # generate a public IP
  ssh -R 80:localhost:4000 serveo.net
  ```
- Browse the site (type CTRL-R on code changes to refresh)
  ```shell
  # via the provides IP
  eg. https://99...0f.serveo.net
  # via the localhost
  localhost:4000
  ```