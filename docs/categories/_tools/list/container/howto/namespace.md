---
mx:
  ref:
    - whatis/namespace
---


# Create 
```bash
# spawn 1 new process inside a new set of namespaces
clone   xxx 
# move the current process inside a new set of namespaces
unshare xxx

# Pid@namespace
unshare --pid --fork --mount-proc

# network interface
ip link add mymacvlan link enx8cae4cf1499c type macvlan mode bridge
```

# List
```bash
# all ns - lsns read file /proc/${pid}/ns
[sudo] lsns
[sudo] lsns -t utx
# ns of current process
ls -ial /proc/$$/ns
ls -ial /proc/1
ls -ial /proc/1/ns

# Network:interface
ip -br link list
```

# Display
```bash
# define var
lNAMESPACE_ID="${BASHPID}"
lNAMESPACE_ID="$$"
#
echo ${lNAMESPACE_ID}
ls -ial /proc/$$/ns
```

# Howto
```bash
# Create > 1 > Namespace & Open > 1 > Shell
unshare --uts 
hostname newname


# Enter > 1 > Ns
nsenter -a -t 500384 ${MxNsId} # In > Another > Shell

#
sudo nsenter -t ${lPID}

# Ping
ip netns exec mxnns01 ping 127.0.0.1

```

