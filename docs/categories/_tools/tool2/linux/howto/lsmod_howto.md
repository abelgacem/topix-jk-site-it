# [&larr;][Repo_Readme] Linux > Howto > lsmod 

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Lsmod_Whatis]:   ../whatis/lsmod_whatis.md
[Sysctl_Whatis]:  ../whatis/sysctl_whatis.md


# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Lsmod|See|[Definition][Lsmod_Whatis]|
|Sysctl|Postrequisit|[Definition][Sysctl_Whatis]|
<br>


# List kernel:module
```bash
lsmod | sort
lsmod | grep br_netfilter
```

# Load > Kernel:Module > temporary
```bash
sudo modprobe br_netfilter
```

# Unload > Kernel:module > temporary
```bash
# method
sudo modprobe -r br_netfilter

# method
sudo rmmod br_netfilter
```

# Load > Kernel:Module > permanent (boot)
## add file **/etc/modules-load.d/xxx.conf** with module to load
```bash
cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF
```

## load module
```bash
# Method
modprobe overlay
modprobe br_netfilter

# Method
sudo systemctl systemd-modules-load
```
