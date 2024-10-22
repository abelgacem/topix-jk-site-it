# [&larr;][Repo_Readme] Linux > Howto > Journald

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Journald_Whatis]:  ../whatis/journald_whatis.md

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Journald|See|[Definition][Journald_Whatis]|
<br>


# display log@kernel
```bash
# display log@(kernel, all) - /dev/kmsg
journalctl -k

# display log@(kernel, warning)
journalctl -k -p3

# tail log@(bluetooth, systemd-udevd)
journalctl -u bluetooth.service -u systemd-udevd.service -f
```