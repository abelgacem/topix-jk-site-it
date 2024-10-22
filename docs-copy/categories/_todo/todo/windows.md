# Info on wsl
```powershell
# list distro in local
wsl --list
wsl --list --online
wsl --list --verbose
```




# Play Distro

```powershell
wsl --list --verbose
wsl --distribution Ubuntu
```

# Todo

```powershell
wsl --set-default-version 2
```

## unzip 1 windows msi file

```bat
msiexec /a %USERPROFILE%\Downloads\AWSCLIV2.msi /qb TARGETDIR=%USERPROFILE%\bin\awscli
```