# [&larr;][Repo_Readme] Linux > Howto > Service

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Sysctl_Whatis]:  ../whatis/sysctl_whatis.md
[Lsmod_Howto]:    ../howto/lsmod_howto.md


# definition
- service denote init.d 
- looks for file in /etc/init.d/kibana
# list
```bash
# in ubuntu 22.10
sudo [-i] service elasticsearch start
sudo [-i] service elasticsearch stop
sudo      service ssh           start

sudo service --status-all
```