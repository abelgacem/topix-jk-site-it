---
layout: topic
mx:
  tag:  script programing
---



# Toknow
- **Ruby**: 
  - a programming language
- **Ruby on Rails**: 
  - an MVC framework based on Ruby.
- **Rake**: 
  - A build tool like Make. 
  - Allow to running tests or automating builds.
- **RubyGems**: 
  - The Ruby package manager.
  - manage **Gems**.
- **Gem**: 
  - A Ruby library, package
  - Member: 
    - repository (eg. https://rubygems.org/)
    - name
    - version
    - platform
  - ref
     - https://guides.rubygems.org/what-is-a-gem/  
- **Gem:Platform**: 
  - 1 name based on:
    - CPU architecture.
    - operating system type.
    - (sometimes) operating system version.
  - Indicates the gem only works with a ruby built for the same platform.
  - Eg.: (run ```gem help platform```)
    - `x86-mingw32`:
    - `java` 
    - `ruby` : means it works on any platform Ruby runs on.
- **gem**: 
  - a CLI. to interact with `RubyGems`. 
- **Gemfile**: 
  - A Txt file written in Yaml
  - Defines the `gems` needed (ie. dependencies) for a `Ruby` program. 
  - used by **Bundler** to install them.
- **Bundler**: 
  - a gem to bundle gems.
  -  
  - A dependency management tool for Ruby. 
  - Generate a `Gemfile.lock` file, which locks the gems versions for a deplyement
- **Bundle**: 
  - a CLI. that is part of Bundler, 
  - Install and manage gem dependencies defined in the a project’s `Gemfile`. 
  - `bundle info` :
    - read and display of file `gemspec` 
  - `bundle install` : 
    - read the `Gemfile`.
    - installs them gems into the application's environment. 
  - ensures that the correct versions are used based on the `Gemfile.lock`
  - streamline the setup process for development, testing, and production environments. 
  - `bundle exec` 
    - Runs a Ruby script or command in the context of the gems specified in the `Gemfile`. 
    - prevent version conflicts with other installed gems.
    - It ensures that the versions of the gems used are consistent with those installed for the project, 
    - prevent potential version conflicts with other gems installed globally or in other projects. 
    - you can execute commands like the following ensuring they operate with the correct gem environment for your application:
       - `bundle exec rake` or `bundle exec rails server`, 
- https://rubygems.org/
  - list of existing ruby package
  - Eg. Jekyll is a Ruby package
# Howto
## Check
## run a ruby script
```shell
ruby setup.rb --help
ruby setup.rb
```
## manage package manager
```shell
# help
gem help
gem help paltform # display help on platfrom
gem help install  # display help on installation

# upgrade RubyGems to version:latest
gem update --system

# list packages@installed 
gem list [--detail]

# display info on package manager: `RubyGems`
gem environment
```

# {{ site.data.name.introduction }}
- {{ page.mx.description }}

# {{ site.data.name.todo }}
- `irb` a ruby shell interpreter like python

# {{ site.data.name.example }}
```ruby
require 'rouge'
puts Rouge.version
```