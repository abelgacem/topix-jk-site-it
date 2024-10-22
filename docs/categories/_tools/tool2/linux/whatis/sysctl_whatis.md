# [&larr;][Repo_Readme] Linux > What is > Sysctl

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Sysctl_Howto]:  ../howto/sysctl_howto.md
[Lsmod_Whatis]:  ../whatis/lsmod_whatis.md

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Lsmod|Prerequisit|[Definition][Lsmod_Whatis]|
|Sysctl|See|[Howto][Sysctl_Howto]|
<br>


# Definition
- Is1 > Cli
- Manage (i.e list, set, update) Kernel : Module : Kvpair
- read/write/display content of subfolder in **/proc/fs**

# Configuration
- /etc/sysctl.conf
- /etc/sysctl.d/*


# Example of kvpair:key for Kernel:Module:br_netfilter

```bash
# This > parameter > control whether or not packets traversing the bridge are sent to iptables for processing. 
net.bridge.bridge-nf-call-arptables
net.bridge.bridge-nf-call-ip6tables
net.bridge.bridge-nf-call-iptables
```

# Toknow
Kernel : Kvpair are model as file/folder in folder **/proc/sys**
