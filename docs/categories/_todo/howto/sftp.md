---
draft : true
mx:  
  type:     whatis
  lp:
---

# Use SFTP as noninteractive cli

```bash
sftp username@hostname_or_ip:/remote/directory <<EOF
put local_file.txt
get remote_file.txt
EOF
```