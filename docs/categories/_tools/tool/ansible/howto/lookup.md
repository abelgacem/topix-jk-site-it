---
draft : true
mx:  
  ref:
    child:
---

# Def 
return
 - key:value
 - File:Content
 - ...
# Example 
```bash
# Get value of key Env:HOME 
{{ lookup('env', 'HOME') }}
```bash
# Get content of file pointed by "mongod_apt_pub_key[mongod_major_version]"
{{ lookup('file', mongod_apt_pub_key[mongod_major_version]) }}
```
# Toknow
```bash
# Get list of DataType that lookup can query
ansible-doc -t lookup -l
ansible-doc -t lookup dig
```

# Example
```bash
# licluster[port][node.type] = licluster.port.xxx
loop: "{{ lookup('vars','licluster')['port'][node.type] }}"
```

# Reference

[//]: #(Reference)
[Back_Readme]:           ../readme.md         "Home"
