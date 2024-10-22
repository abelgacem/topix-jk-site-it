# [&larr;][Repo_Readme] Linux > Howto > Locale

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md


[Locale_Whatis]:   ../whatis/locale_whatis.md

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Locale|See|[Definition][Locale_Whatis]|
<br>



# List locale@available
```bash
locale -a
localectl status
```
# Display locale@current
```bash
locale
localectl status
```
# Set locale
```bash
localectl set-locale LANG=en_US.UTF-8
```

# Install package@langagepack
```bash
# install all
dnf install langpacks-en glibc-all-langpacks -y
dnf install langpacks-en glibc-all-langpacks -y
# install only en
dnf install langpacks-en glibc-langpack-en -y
# install only fr
dnf install langpacks-fr glibc-langpack-fr -y
```
