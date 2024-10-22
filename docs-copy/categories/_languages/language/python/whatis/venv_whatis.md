<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>


[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Item_Howto]:    ../howto/venv_howto.md

[Pip_Whatis]:    ../whatis/pip_whatis.md
[Venv_Howto]:    ../howto/venv_howto.md
[Install_Howto]: ../howto/install_howto.md

# [&larr;][Repo_Readme]Domain > Language > Python > Whatis > venv ([Howto][Item_Howto])
# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Pip||||[Definition][Pip_Whatis]|
|Install||||[Howto][Install_Howto]|

# Definition
Is 1
- folder with 1 hierarchy of files and folders
- isolated Python Env
- python module


# To know
when you create a venv
  - notice in a file the python:version  for that venv
  - a venv is created with the current version of python (ie. used to create the venv)
  - dependencies still exists between the venv and the library of python (ie. used to create the venv)

when you create a venv the following task happens
  - create a tree of files and folders in 1 folder
  - this tree contains an isolated python environment
  - alongside that tree you will install all your python app and module, lib, app  via *python -m pip install xxx*

# Best practice