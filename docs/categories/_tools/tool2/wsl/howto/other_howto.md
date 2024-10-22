<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md


# [&larr;][Repo_Readme]Domain > Computer science > WSL > Howto > Other
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

# define wsl version for 1 distro
```bash
# generic
wsl --set-version <distribution name> 1

# example
wsl --set-version ubuntu 1

# check
wsl -l -v
```

# Todo

```powershell
wsl --set-default-version 2
```
# Add gitbash to Windows Terminal App
- open > gui > terminal > Parameter > open JSON
- add the following object to the profiles > lists
```
,
            {
                "acrylicOpacity": 0.75,
                "closeOnExit": "graceful",
                "colorScheme": "Campbell",
                "commandline": "C:\\Users\\500002100\\AppData\\Local\\Programs\\Git\\git-bash.exe --cd-to-home",
                "cursorColor": "#FFFFFF",
                "cursorShape": "bar",
                "experimental.retroTerminalEffect": false,
                "font": 
                {
                    "face": "Consolas",
                    "size": 10
                },
                "guid": "{14ad203f-52cc-4110-90d6-d96e0f41b64d}",
                "hidden": false,
                "historySize": 9001,
                "icon": "C:\\Users\\500002100\\AppData\\Local\\Programs\\Git\\mingw64\\share\\git\\git-for-windows.ico",
                "name": "Git Bash",
                "padding": "0, 0, 0, 0",
                "snapOnInput": true,
                "tabTitle": "Git Bash",
                "useAcrylic": true
            }
```