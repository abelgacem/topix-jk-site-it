---
mx:  
  ref:
    - whatis/cgroup
    - whatis/subsystem
---

# Display cgroup:version
```bash
# Output is
## cgroup2fs For cgroup v2
## tmpfs     For cgroup v1
stat -fc %T /sys/fs/cgroup/
```


```
# Install
```bash
# install tool to manage cgroup in Redhat 
dnf install libcgroup
# install tool to manage cgroup in ubuntu
apt install libcgroup, cgroup-bin
```

# Delete
```bash
# Generic
## Define var
lLIST_SUBSYS="..."
lPATH="..."
# Method
cgdelete -t uid:gid -a uid:gid -g ${lLIST_SUBSYS}:${lPATH}
```

## Use case
```bash
# Define var
lLIST_SUBSYS="cpu,net_cls"
lPATH="/test-subgroup"
# Method
cgdelete  -g ${lLIST_SUBSYS}:${lPATH}
```

# Set parameter for subsystem
```bash
# generic
cgset -r parameter=value path_to_cgroup
# set param for subsystem:cpuset  
# Method
cgset -r cpuset.cpus=0-1 group1
cgset -r cpuacct.usage=0 /
cgset -r cpuacct.usage=0 .
# method
echo 0-1 > /cgroup/cpu_and_mem/group1/cpuset.cpus
```
# Create
```bash
# Generic
## Define var
lLIST_SUBSYS="..."
lPATH="..."
# Method
cgcreate -t uid:gid -a uid:gid -g ${lLIST_SUBSYS}:${lPATH}
# Method
mkdir /cgroup/hierarchy/name/child_name
```

## Use case
```bash
# Define var
lLIST_SUBSYS="cpu,net_cls"
lPATH="/test-subgroup"
# Method
cgcreate  -g ${lLIST_SUBSYS}:${lPATH}
# Method
mkdir /cgroup/cpu_and_mem/group1
```

# Use cgroup
```bash
# install cli to manage cgroup
dnf install libcgroup
```

# Find version of cgroup
```bash
# method > if following file exits => v2 (cgroup2fs) - elese v1 (tmpfs)
ll /sys/fs/cgroup/cgroup.controllers
cat /sys/fs/cgroup/cgroup.controllers

# method > if output = cgroup2fs => v2 - else if output = tmpfs => v1
stat -fc %T /sys/fs/cgroup/
```



# List > Cgroups
```bash
ls -ial /sys/fs/cgroup/
cat /proc/cgroups
```

# Use case
```bash
 # Create mountpoint
mkdir /sys/fs/cgroup/net_cls # Create mountpoint

# Mount the controller
mount -t cgroup -o net_cls net_cls /sys/fs/cgroup/net_cls

# Create cgroup
mkdir /sys/fs/cgroup/net_cls/IPAllowed

# Set the fixed class identifier
echo 0x100001 > /sys/fs/cgroup/net_cls/IPAllowed/net_cls.classid
tc qdisc add dev <interface> root handle 10: htb
tc class add dev <interface> parent 10: classid 10:1 htb rate 40mbit
tc filter add dev <interface> parent 10: protocol ip prio 10 handle 1: cgroup

# Disallow IP for all non-members
iptables -A OUTPUT -m cgroup ! --cgroup 0x100001 -j DROP 

# Add process to cgroup
echo $$ > /sys/fs/cgroup/net_cls/IPAllowed/cgroup.procs
-- Filtering active --

# Revert settings
tc qdisc del dev <interface> root;
tc qdisc add dev <interface> root pfifo
```

# Todo
```bash
# config@kernel to disables cgroup@v1 for all controllers (blkio, memory, cpu, ...)
# append line to file:/etc/default/grub
#  - GRUB_CMDLINE_LINUX_DEFAULT="cgroup_no_v1=all"


# Howto
```bash
# Am I using cgroup v2
Yes if /sys/fs/cgroup/cgroup.controllers is present.

# List > Cgroups
cat /proc/cgroups
```
# Toknow
library **libcg** 
  - model the Cgroup:Filesystem
  - provide 1 API to manage Cgroup
    - Create > Cgroup
      - Create Cgroup.NotPersistent
      - Create Cgroup.Persistent
    - Delete > Cgroup
    - Update > Cgroup
    - Create > Cgroup:Configuration File
    - Update > Cgroup:Configuration File

# Example > Configuration File
```bash
group hiperf {
  perm {
    task {
      uid = olivier;
      gid = olivier;
    }
    admin {
      uid = root;
      gid = root;
    }
  }
  cpu {
    cpu.shares = 1000;
  }
  blkio {
    blkio.weight = 500;
  }
}

mount {
  cpu = /dev/cgroups/cpu;
  cpuacct = /mnt/cgroups/cpuacct;
  blkio = /dev/cgroups/blkio;
}
```
# Example > Configuration File
```bash
group ca1 {
	perm {
		task {
			uid = balbir;
			gid = cgroup;
		}
		admin {
			uid = root;
			gid = cgroup;
		}
	}

	cpu {
		cpu.shares = 500;
	}
}

mount {
	cpu = /container;
}
```
# Todo
The following Cgroup exists
|Name|Desc|
|-|-|
|-|-|
|cpuset|allocation de resources CPU et mémoire vive|
|cpuacct|permet de comptabiliser la consommation de cycle CPU|
|memory|contrôle de la mémoire vive et du cache d'un groupe|
|devices|autorise ou refuse l'accès à un périphérique|
|net_cls|gère l'accès au réseau|
|blkio|gère l'accès aux périphériques de type block (disque durs...)|

# List of references
- https://www.linuxembedded.fr/2011/03/bien-utiliser-les-cgroups
