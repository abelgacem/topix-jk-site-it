<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md

# [&larr;][Repo_Readme]Domain > Computer science > WSL > Howto > Manage

# Install Wsl
```powershell
# in 1 powershell admin shell
wsl --install
```
- Install distro from windows store (ubuntu 22.04)
- Configure the OS
- install App:Terminal 


# List
```powershell
## list distro
wsl --list --verbose
wsl --list --online
```

# Install Distro
```powershell
# list distro@available
wsl --list --online

# install
wsl --install -d "Ubuntu-22.04"
```

# Define default distro
```bash
wsl --set-default "Ubuntu-22.04"
```


# Export/Import
```powershell
# Snapshot a distro
## list distro
wsl --list --verbose

## export one from the list
wsl --export Ubuntu C:\Users\500002100\distro\snapshot\ubuntu-mx.tar

## remove distro ??
wsl --deregister ubuntu
wsl --unregister ubuntu

## import one from the list
### C:\Users\USERNAME\AppData\Local\Packages | c:\tmp
wsl --import Ubuntu c:\tmp C:\Users\500002100\distro\snapshot\ubuntu-mx.tar
```


# Todo

```powershell
wsl --set-default-version 2
```
