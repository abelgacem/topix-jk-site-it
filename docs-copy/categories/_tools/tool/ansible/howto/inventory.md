---
draft : true
mx:  
  ref:
    child:
      - howto/pip
---

# Define inventory in file@ini Vs file@yaml
In the following inventory (located where you want)
  - host named *mail.example.com* belongs to 
    - group@default : *all*  
    - group@default : *ungrouped*
  - host named *foo.example.com* belongs to 
    - group@default : *all*  
    - group@custom : *webservers*
    - group@custom : *prodservers*

<table>
<th>ini</th><th>yaml</th>
<tr>
<td>

```ini
mail.example.com

[webservers]
foo.example.com
bar.example.com

[dbservers]
one.example.com
two.example.com
three.example.com

[prodservers]
foo.example.com
three.example.com
```
</td>
<td>

```yaml
all:
  hosts:
    mail.example.com:
  children:
    webservers:
      hosts:
        foo.example.com:
        bar.example.com:
    dbservers:
      hosts:
        one.example.com:
        two.example.com:
        three.example.com:
    prodservers:
      hosts:
        foo.example.com:
        three.example.com:
```

</td>
</tr>
</table>

# Define group@nested

```ini
[qua]
  ...
[rec]
  ...
[ppd01]
  ...
[ppd02]
  ...
[int01]
  ...
[int02]
  ...
[ppd:children]
ppd01
ppd02

[int:children]
int01
int02

[hprod:children]
qua
rec
int ## nested
ppd ## nested
```

# Define alias for specific host
- 1 Host:Alias is defined via var@sdef named **ansible_xxx**
- in the following inventory running playbook on foo.example.com will ssh to 192.0.2.50:5555

<table>
<th>ini</th><th>yaml</th>
<tr>
<td>

```ini
mail.example.com

[webservers]
foo.example.com ansible_port=5555 ansible_host=192.0.2.50
bar.example.com 

[dbservers]
one.example.com
two.example.com
three.example.com

[prodservers]
foo.example.com
three.example.com ansible_port=5555 ansible_host=192.0.2.53
```
</td>
<td>

```yaml
all:
  hosts:
    mail.example.com:
  children:
    webservers:
      hosts:
        foo.example.com:
          ansible_port: 5555
          ansible_host: 192.0.2.52
        bar.example.com:
    dbservers:
      hosts:
        one.example.com:
        two.example.com:
        three.example.com:
    prodservers:
      hosts:
        foo.example.com:
        three.example.com:
          ansible_port: 5555
          ansible_host: 192.0.2.52
```

</td>
</tr>
</table>

