<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>


[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Item_Whatis]:   ../whatis/install_whatis.md

[Venv_Whatis]:    ../whatis/venv_whatis.md
[Pip_Whatis]:     ../whatis/pip_whatis.md

# [&larr;][Repo_Readme]Domain > Language > Python > Howto > install ([Definition][Item_Whatis])

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|venv||||[Definition][Venv_Whatis]|
|pip||||[Definition][pip_Whatis]|


# Install python and pip on linux

```bash
# install python
sudo apt install -y python3-pip
sudo apt update -y
sudo apt upgrade -y

# define var
alias python="python3"
```

# install venv cli onlinux 
```bash
# define var
lPYTHON_VERSION="$(python --version | cut -d " " -f 2 | cut -d "." -f 1-2)"
# generic
sudo apt install -y python${lPYTHON_VERSION}-venv
# example
sudo apt install -y python3.10-venv
sudo apt install -y python3.11-venv
```
# Install pip on ubuntu 22.04
```bash
# install python
sudo apt install -y python3-pip
sudo apt update -y
sudo apt upgrade -y

# define var
alias python="python3"
```
