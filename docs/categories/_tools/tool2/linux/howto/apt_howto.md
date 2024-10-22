# [&larr;][Repo_Readme] Linux > Howto > Apt

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

# Install repo@apt
## with wget
```bash 
# dependency wget, gpg
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg

sudo apt update

```

# List package available (when repo@apt is installed)
```bash
# generic
apt list -a <package name>
apt list -a       elasticsearch
apt-cache madison elasticsearch
apt-cache policy elasticsearch
apt-cache search python | grep "^python3\."
apt-cache policy python
```
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


sudo apt-get install elasticsearch=7.7.0
```

# list Packaged.(Last, Installed)
```bash
ls -ltr /var/cache/apt/archives
```

# List Package@Installed
```bash
dpkg-query -W
dpkg-query -l
```

# List Package@Hold
```bash
apt-mark showhold
```

# List Package@Available
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






# Todo
```bash
# define var
lARCH=$(dpkg --print-architecture)
lEDITOR="docker"
lKEY_FOLDER="/usr/share/keyrings"
lREPO_FOLDER="/etc/apt/sources.list.d"
lREPO_PATH="${lREPO_FOLDER}/${lEDITOR}.list"
lKEY_PATH="${lKEY_FOLDER}/${lEDITOR}.gpg"
lDNSORIP="download.docker.com"
lPATH="linux/ubuntu"
lLINE="deb [arch=${lARCH} signed-by=${lKEY_PATH}] https://${lDNSORIP}/${lPATH} $(lsb_release -cs) stable"
lLINE="deb [              signed-by=${lKEY_PATH}] https://${lDNSORIP}/${lPATH} $(lsb_release -cs) stable"
#
echo ${LINE} | sudo tee ${lREPO_PATH} > /dev/null
```

# List of references
- https://www.tecmint.com/useful-basic-commands-of-apt-get-and-apt-cache-for-package-management/

