<head><link rel="stylesheet" href="../../md.css"/><script src="../../md.js"></script></head>

# [&larr;][Repo_Readme]doc > Ovh


[//]: #(Reference)
[Repo_Readme]:          ../README.md

[Linux_Os_Update_Howto]: ../../doc-it/linux/howto/update_howto.md
[Docker_Install_Howto]:  ../../doc-it/docker/howto/install_howto.md
[Bashrc_Define_Howto]:  ../../doc-it/bashrc/README.md

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Linux|see|[Howto][Linux_Os_Update_Howto] update|-|
|Docker|see|[Howto][Docker_Install_Howto] install|-|
|Rc file|see|[Howto][Bashrc_Define_Howto] define|-|


# create 1 VM from scratch
Requirement:
  - create 1 VM from scratch AND
  - Do it in less tha 3 minutes AND
  - Specify this VM

|Task:seq|Task:desc|Task:duration
|-|-|-|
|01|re-install vps via Ovh IHM|1 min.
|02|upgrage os|1 min.
|03|install docker|1 min.
|04|update .bashrc|10 sec.
|05|create .bashrc.custom|10 sec.
|06|ssh to vm|10 sec.
|06|export  some var in current shell|1 min.
|07|play rcfile: eg. ```. .bashrc```|10 sec.
|07-bis|start to work ... with tool you used to|

# Improvement

Do all this tasks all at once
  - Only task:seq **05**, **06** need to be customized/automated