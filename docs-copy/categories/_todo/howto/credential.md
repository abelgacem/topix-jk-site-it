---
draft : true
mx:  
  type:     whatis
  lp:
---

# configure git client to use credentials from env var

## define var
```powershell
lFOLDER_WKSPC="${HOME}/wkspc"
lFOLDER_CONFIG="${lFOLDER_WKSPC}/.config"
lFOLDER_PATH_RCFILE="${lFOLDER_CONFIG}/rc"
lFOLDER_PATH_CONF_GIT="${lFOLDER_CONFIG}/git"
lFILE_NAME_RCFILE_UDEF="rc.custom"
lFILE_NAME_GIT_ASKPASS="git-askpass"
lFILE_PATH_GIT_ASKPASS="${lFOLDER_PATH_CONF_GIT}/${lFILE_NAME_GIT_ASKPASS}"
lFILE_PATH_RCFILE_UDEF="${lFOLDER_PATH_RCFILE}/${lFILE_NAME_RCFILE_UDEF}"
lFILE_PATH_RCFILE_SDEF="${HOME}/.profile" # if ubuntu
```

## create file and folders

```powershell
mkdir -p ${lFOLDER_CONFIG}
mkdir -p ${lFOLDER_PATH_RCFILE}
mkdir -p ${lFOLDER_PATH_CONF_GIT}
```

## create file and content
```powershell
echo "# configure git to use credentials in envar"                           > ${lFILE_PATH_RCFILE_UDEF}
echo "export GIT_ASKPASS=${lFOLDER_PATH_CONF_GIT}/${lFILE_NAME_GIT_ASKPASS}" >> ${lFILE_PATH_RCFILE_UDEF}
```

## create file and content
```powershell
echo "# echo token silently when needed by git cli" > ${lFILE_PATH_GIT_ASKPASS}
echo "echo \${env_GIT_TOKEN}"                       >> ${lFILE_PATH_GIT_ASKPASS}
```

## make file executable
```powershell
chmod +x ${lFILE_PATH_GIT_ASKPASS}
```

## add file:content
```powershell
echo "# source custom rc"                                      >> ${lFILE_PATH_RCFILE_SDEF}
echo "source ${lFOLDER_PATH_RCFILE}/${lFILE_NAME_RCFILE_UDEF}" >> ${lFILE_PATH_RCFILE_SDEF}
```

## export the envar
```powershell
export env_GIT_TOKEN="..."
```
