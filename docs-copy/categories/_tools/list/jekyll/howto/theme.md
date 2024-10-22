---
mx:
  lp:
  ref:
    - whatis/tag
---



# Create
```shell
# var
lTHEME_NAME="mxtheme01"
jekyll new-theme ${mxtheme01}
```
meaning: 
  - create a folder that is a 
    - `Git` project (ie. repo) 
    - `Ruby gems`
    - Jekyll theme

# Update
- update the file `xxx.gempspec`
- install the dependencies neeeded by this gems and listed in `Gemfile` or `.gemspec`
```shell
# install the gems defined in the Gemfile of the project
bundle install
```
- add any content you want (ie. customize the theme)

# Create the gem
after creating a theme (ie. a forlder with what you want) you create a gem from it
```shell
gem build ${lTHEME_NAME}.gemspec  
```
meaning:
- create the file `${lTHEME_NAME}-${version}.gem` in the root folder


# Uninstall locally
```shell 
gem uninstall ${lTHEME_NAME}-${version}.gem
```
meaning:
  - uninstall this gem from the local ruby gem repository.
  - this repository is `$(gem env | grep -i install | grep -iv user)`

# Install locally
```shell 
gem install ${lTHEME_NAME}-${version}.gem
```
meaning:
  - install this gem in the local ruby gem repository.
  - this repository is `$(gem env | grep -i install | grep -iv user)`
  - this theme will be available for local jekyll project to use it

# Declare
```shell
# add dependency in Gemfile
gem "mxjkth01", "~> 2.2"

# declare it in _config.yml
theme: minima
```

# update dependencies
```shell
# in Gemfile
bundle install
```