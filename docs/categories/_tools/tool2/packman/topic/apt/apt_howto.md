<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script>

[//]: #(Reference)
[Repo_Readme]:    ../README.md
[Item_Whatis]:    ./apt_whatis.md

# [&larr;][Repo_Readme] Apt > Howto ([Definition][Item_Whatis])

# Update Package.List
```bash
# Update List:Package.Installed - Do not install - Update the list only
## Synchronize the package index files from the their sources specified in /etc/apt/sources.list
apt-get update
```
# Update Package.Version
```bash
# Update Package.Installed:Version to latest
## Upgrade all the currently installed software packages on the system to latest. 
apt-get upgrade
## gestion plus fine des dépendance
apt-get dist-upgrade
```

# Install Package
```bash
apt-get install firefox
apt-get install -qq -y firefox

apt-get remove firefox
apt-get remove --purge firefox
```

# list Packaged.(Last, Installed)
```bash
ls -ltr /var/cache/apt/archives
```

# List Package.Installed
```bash
dpkg-query -W
dpkg-query -l
```

# List Package.Available
```bash
apt-cache pkgnames | sort
apt-cache pkgnames li*
apt-cache pkgnames li*
```


# Display Package:info
```bash
apt-cache show python-pip

grep installed /var/log/dpkg.log
grep upgrade   /var/log/dpkg.log
grep remove    /var/log/dpkg.log
more           /var/log/dpkg.log
tail -f        /var/log/dpkg.log
grep -A4 '2021-01-20' /var/log/apt/history.log
```
# Display Package:Dependency
```bash
apt-cache showpkg python-pip
```

# List Package:Key.Pgp
```bash
apt-key list
apt-key list | grep -B2 -i mongo
```

# Uninstall > Package
```bash
# List > package
 dpkg --list | grep vtom #  vtom-dsir-6.3.3-sncf,  vtom-dsir-env-1-sncf 
 ```
## Method 
```bash
# Delete > package
sudo apt remove vtom-dsir-env-1-sncf
sudo apt clean
sudo apt autoremove
 ```

## Method 
```bash
# Delete > package
sudo apt purge vtom-dsir-env-1-sncf
 ```


# Reference
- https://www.tecmint.com/useful-basic-commands-of-apt-get-and-apt-cache-for-package-management/


[//]: #(Reference)
[Back_Readme]:     ./readme.md         "Home"


[Apt_Whatis]:      ../whatis/apt_whatis
