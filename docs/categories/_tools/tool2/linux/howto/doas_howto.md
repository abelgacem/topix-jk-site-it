# [&larr;][Repo_Readme] Linux > Howto > alpine:doas

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md



# update conf
```bash
# allow user to be root
echo 'permit baeldung as root' > /etc/doas.d/doas.conf
# allow user of group wheel to be root
echo 'permit :wheel as root' > /etc/doas.d/doas.conf
# allow user of group wheel to be root witn no pwd
echo 'permit nopass :wheel as root' >> /etc/doas.d/doas.conf
# allow user of group wheel to be root witn no pwd
permit persist :wheel
```

# use doas
```bash
doas ls -all /root
doas su -
```