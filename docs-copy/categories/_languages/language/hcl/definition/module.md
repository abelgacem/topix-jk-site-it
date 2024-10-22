---
draft : true
mx:  
  lp:
  ref:
    child:
      - list/file
      - howto/module
---

# Definition
- modularize the code
- 1 set of .TF and/or .TF.JSON files in a folder

# Member
  - LICENSE
  - README.md
  - main.tf
  - variables.tf
  - outputs.tf
  - modules
    - `moduleA`
    - `moduleB`

# Category
related to hierrachy
- [not]root (i.e child) 

related to publicy
- [not]pubic (i.e private) 

related to location
- local (implies root or child)
- pulished (aka remote)
  - registry
  - git

## Root module
- the set of files in the current working directory

## Child module
- 1 set of .TF and/or .TF.JSON files in a subfolder
- can be called multiple times within the same code
- different code can use the same child module
- can declare output values accessible by the calling module

## published module
- the set of files stores in a repository

# Operation
- instanciate
- publish (i.e share)

# Good to know
- module can call module via instruction:`module`
- Call 1 module means include the contents of that module into the configuration with specific values for its input variables. 
- The name of the called module is used to refer to this instance of the module.
- Provider must be declared in each module which requires it
