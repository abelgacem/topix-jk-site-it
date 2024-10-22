# [&larr;][Repo_Readme] Linux > Howto > Sysctl

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Sysctl_Whatis]:  ../whatis/sysctl_whatis.md
[Lsmod_Howto]:    ../howto/lsmod_howto.md


# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Lsmod|Prerequisit|[Howto][Lsmod_Howto]|
|Sysctl|See|[Definition][Sysctl_Whatis]|
<br>


# List Kernel:Module:kvpair
## Example via fs
```bash
# List some parameters
ll /proc/sys    
ll /proc/sys/net/bridge/

# File > contains > O or 1
cat /proc/sys/net/bridge/*
cat /proc/sys/net/bridge/bridge-nf-call-iptables
cat /proc/sys/net/ipv4/icmp_echo_enable_probe

```

## Example via cli sysctl
```bash
# Dsiplay > Help
sysctl 

# List > Kvpair.All (read file in /proc/sys)
sysctl -a

# List > Kvpair@Specific (read file in /proc/sys) - value = 0/1
sysctl -a --ignore 2>/dev/null | grep net
sysctl -a --ignore 2>/dev/null | grep net.ipv4
sysctl -a --ignore 2>/dev/null | grep netfilter
sysctl -a --ignore 2>/dev/null | grep net.ipv4.icmp_echo_enable_probe
sysctl -a --ignore 2>/dev/null | grep bridge | grep table
```

# Example

# Update > Kvpair@Kernel > temporary
```bash
# Method
sudo sysctl -w net.ipv6.conf.all.forwarding        = 0
sudo sysctl -w net.bridge.bridge-nf-call-ip6tables = 1
sudo sysctl -w net.bridge.bridge-nf-call-iptables  = 1

# Method
echo 0 > /proc/sys/net/ipv6/conf/all/forwarding       = 0
echo 0 > /proc/sys/net/bridge/bridge-nf-call-ip6tables = 1
echo 0 > /proc/sys/net/bridge/bridge-nf-call-iptables  = 1

# reload kvpair
sudo sysctl --system
```

# Update > Kvpair@Kernel > permanent
Method not to use: update file **/etc/sysctl.conf**
```bash
# Need by K8s:Cluster
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables  = 1
...
```

## Step > add kvpair to file **/etc/sysctl.d/xxx.conf**
### example
```bash
## Method
cat <<EOF | sudo tee /etc/sysctl.d/k8s_node.conf
net.bridge.bridge-nf-call-iptables = 1
net.bridge.bridge-nf-call-ip6tables = 1
EOF

## Method
sudo sh -c "echo 1 > /proc/sys/net/bridge/bridge-nf-call-iptables"

```
### example
```bash
## Method
cat <<EOF | sudo tee /etc/sysctl.d/99-rootless.conf
kernel.unprivileged_userns_clone=1
EOF

## Method
sudo sh -c "echo 1 > /proc/sys/kernel/unprivileged_userns_clone"
```

## Step > reload kvpair
```bash
## method
sudo sysctl --system

## method
sudo systemctl restart systemd-sysctl
sudo systemctl status  systemd-sysctl
```