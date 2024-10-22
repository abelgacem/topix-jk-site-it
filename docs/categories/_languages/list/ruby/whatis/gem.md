<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>


# [&larr;][Repo_Readme]Domain > Language > Ruby

# Build a gem
```shell
gem -C topix-jk-theme-01 build
```
meaning:
  - `topix-jk-theme-01` is a folder.
  - the file `topix-jk-theme-01/topix-jk-theme-01.gemspec` exists.
  - create the gem `topix-jk-theme-01/topix-jk-theme-01-${version}.gem`

# Install a gem
```shell
gem -C topix-jk-theme-01 install topix-jk-theme-01-0.0.1.gem
```
meaning:
  - `topix-jk-theme-01` is a folder.
  - the (gem)file `topix-jk-theme-01/topix-jk-theme-01-${version}.gem` exists.
  - install the gemfile to local repository folder `$(gem env | grep -i install | grep -iv user)/gems`

# Build and install
```shell
lFOLDER_GEM="${HOME}/wkspc/git/jekyll/theme/topix-jk-theme-01"
lFILE_GEM="topix-jk-theme-01-0.0.1.gem"
# build supoose a file topix-jk-theme-01-${verson}.gemspec exist
gem -C ${lFOLDER_GEM} build && 
gem -C ${lFOLDER_GEM} install ${lFILE_GEM}
```

# install dependencies of a gem
install dependencies a ruby project (ie. a gem) needs
```shell
lFOLDER_GEMFILE="${HOME}/wkspc/git/jekyll/site/topix-jk-site-project/docs/Gemfile"
bundle config set path lFOLDER_GEMFILE="${HOME}/wkspc/git/jekyll/site/topix-jk-site-project/docs/Gemfile"
bundle install
```

# dispaly config
```shell
bundle config
gem env
```
