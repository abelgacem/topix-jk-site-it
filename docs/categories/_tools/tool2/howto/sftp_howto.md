<head><link rel="stylesheet" href="../../md.css"/><script src="../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Item_Whatis]:    ../whatis/app_whatis.md
[Item_List]:      ../list/app_list.md

[Object_List]:       ./list/object_list.md

# [&larr;][Repo_Readme]Computer Science > Howto > manage > SFTP ([Definition][Item_Whatis], [List][Item_List])


# Use SFTP as noninteractive cli

```bash
sftp username@hostname_or_ip:/remote/directory <<EOF
put local_file.txt
get remote_file.txt
EOF
```