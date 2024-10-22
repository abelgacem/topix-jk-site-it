---
draft : true
mx: 
  index:  child
  lp: 3
---

# Howto calculate gpg for a folder
```powershell
find /path/to/dir/ -type f -exec sha256sum {} \; 
find /path/to/dir/ -type f -exec sha256sum {} \; |  awk '{print $1}' | sort -d | sha256sum | cut -d ' ' -f 1
dir=<mydir>; (find "$dir" -type f -exec sha256sum {} +; find "$dir" -type d) | LC_ALL=C sort | sha256sum
dir=<mydir>; find "$dir" -type f -exec sha256sum {} \; | sed "s~$dir~~g" | LC_ALL=C sort -d | sha256sum

```
