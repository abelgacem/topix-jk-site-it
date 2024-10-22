# [&larr;][Repo_Readme] Linux > Howto > Ufw

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Ufw_Whatis]:  ../whatis/ufw_whatis.md

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Ufw|See|[Definition][Ufw_Whatis]|
<br>

# Syntax
```bash
ufw [--dry-run] [options] [rule syntax]
ufw {rule-here} comment '{comment-text-here}'
```



# Display > Info
```bash
# Display Status ([Not]Active)
sudo ufw --help
sudo ufw status
```

# start/stop ufw
```
sudo ufw --force enable
sudo ufw --force disable
```

# display rules
```bash
sudo ufw show listening
```


# Open > 1 > Port
```bash
# Allow > Traffic.Inbound > via > ssh
sudo ufw allow 22
sudo ufw allow ssh

# Allow > Traffic.Inbound > via > http > request
sudo ufw allow http
sudo ufw allow 80
sudo ufw allow https
sudo ufw allow 443
sudo ufw allow proto tcp from any to any port 80,443

# Allow > Traffic.Inbound > via > ssh > only for 1 network
sudo ufw allow from 15.15.15.0/24 to any port 22

# Allow > Traffic.Inbound > via > rsync > only for 1 network
sudo ufw allow from 15.15.15.0/24 to any port 873

# Allow > Traffic.Inbound > to > db:mysql > only for 1 network
sudo ufw allow from 15.15.15.0/24 to any port 3306
# Allow > Traffic.Inbound > to > db:mysql > only for 1 network > via > 1 vm:interface
sudo ufw allow in on eth1 to any port 3306

# Allow > Traffic.Inbound > to > db:postgres > only for 1 network
sudo ufw allow from 15.15.15.0/24 to any port 5432

# Allow > Traffic.Inbound > to > db:mysql > only for 1 network > via > 1 vm:interface
sudo ufw allow in on eth1 to any port 5432

# Allow > Traffic.Inbound > on > 1 > port
sudo ufw allow 4000
sudo ufw allow 4000/tcp

## Allow > Traffic.Inbound > on > port > ssh (/etc/services)
sudo ufw allow ssh

## Allow > Traffic.Outbound > on > 1 > port
sudo ufw allow out on eth0 to any port 25 proto tcp

## Allow > Traffic.Inbound > on > all > port from IP
sudo ufw allow from 1.2.3.4

# use comment
sudo ufw allow 41194/udp comment 'Allow WireGuard VPN'

# Use range
sudo ufw allow 4000:4200/tcp
$ sudo ufw allow 6000:7000/udp


```
# Close > 1 > Port
```bash
# Request = Incomming Traffic

# Deny > Traffic.Inbound > on > port > 4000
sudo ufw deny 4000
sudo ufw deny 4000/tcp

# Allow > Traffic.Outgoing > on > port > 25 (smtp) 
sudo ufw deny from 192.168.2.100/8 to 192.168.2.101 port 25

# Deny > request > of > 1 > Ip > on > 1 Interface:port 
sudo ufw deny in on eth0 from any 25 proto tcp
```
