<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script>

[//]: #(Reference)
[Repo_Readme]:    ../README.md
[Item_Whatis]:    ./apt_whatis.md

# [&larr;][Repo_Readme] Apk > Howto ([Definition][Item_Whatis])

# Help
```bash
apk --help
```

# List
```bash
# package@installed
apk list -I

# package@available
doas apk update
apk search -v 'python*'
```

# Display Help
```bash
apk --help
apk info --help
```

# List
```bash
# Package.Installed
apk info
apk -v info
apk -vv info

# Package.(Installed, NotInstalled) available in Repositorie in /etc/apk/repositories
apk list
```

# Display Package:info

```bash
# Display info for Package.(Installed, NotInstalled)
## Display > [Not]installed, Version
apk info [-a] git
apk info ansible
apk search git
apk search ansible
```

# Check if 1 Package is1 Package.[Not]Installed
```bash
apk list git | grep "\[installed\]"
```


# Install 1 Package
```bash
# Install 1 Package.NotVirtual
apk add ansible
apk add curl

# Do not use cache.Apk
apk add --no-cache openssh-client curl ansible
```
# Manage 1 Package@Virtual
```bash
# Install 1 Package.Virtual
apk add --virtual mypacks gcc vim

# Remove 1 Package.Virtual
apk del mypacks

```

# Upgrade 1 Package.Installed to Package:Version:Latest
```bash
# Upgrade all package
apk -U upgrade # same as apk update && apk upgrade

# Upgrade 1 package
apk add --upgrade <PackageName>
apk add --upgrade busybox 
```


# Other
## Add Third part Repository
```bash
lREPO_URL="http://dl-cdn.alpinelinux.org/alpine/edge/community"
lREPO_FILE="/etc/apk/repositories"

# install repo@thirdpart
doas sh -c "echo ${lREPO_URL} >> ${lREPO_FILE}"
# upade & uopgrade os
doas apk update   && doas apk upgrade     && \

```

## Update Repository in /etc/apk/repositories
```bash
# Allow Repository.Local to point to Pacakege:Version:Latest
apk update
```

## Remove Cache.Apk
```bash
rm -rf /var/cache/apk/* 
```


# Todo
```bash
apk dot mysql
apk stats php7-iconv
apk info -a mysql
```

# Toknow
- Before 1 Install of 1 App | Package do 1 **apk update**




