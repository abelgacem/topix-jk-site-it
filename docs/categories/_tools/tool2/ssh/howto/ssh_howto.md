<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/cli_list.md

# [&larr;][Repo_Readme]Domain > Computer Science > SSH > Cli > Howto > use > Ssh
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>



# Display info
```bash
ssh -v localhost
ssh -V
```

# Test 1 ssh connection
```bash
# generic
ssh ${Ssh_Server_User}@${Ssh_Server_Dnsoip} -p ${Ssh_Server_Port}

# example
Ssh_Server_User="mx"
Ssh_Server_Dnsoip="vps"
Ssh_Server_Port="22"
ssh ${Ssh_Server_User}@${Ssh_Server_Dnsoip} -p ${Ssh_Server_Port}

# bypass the file:~/${Ssh_Client_User}/.ssh/known_hosts
## generic
ssh ${Ssh_Server_User}@${Ssh_Server_Dnsoip} -p ${Ssh_Server_Port} -o StrictHostKeyChecking   

## example
Ssh_Server_User="mx"
Ssh_Server_IP="51.77.210.73"
Ssh_Server_Port="22"
ssh ${Ssh_Server_User}@${Ssh_Server_Dnsoip} -p ${Ssh_Server_Port} -o StrictHostKeyChecking   
```






  
  


# execute actions on 1 ssh server as non root (SSH and pipe)
```bash
# Play bash script on ssh server
Ssh_Client_Script_Path="my_script.sh"
ssh ${Ssh_Server_User}@${Ssh_Server_Dnsoip} 'bash -s' < ${Ssh_Client_Script_Path}
ssh ${Ssh_Server_User}@${Ssh_Server_Dnsoip} 'bash -s' < scriptfile.sh

# Play bash script on ssh server
ssh ${Ssh_Server_User}@${Ssh_Server_Dnsoip} '. ~/your_profile; test -d /FolderPath/$(date +%Y%M%d) || mkdir /FolderPath/$(date +%Y%M%d)'

# Transfert tgz file and untgz at iy on server 
tar czf - /home/${Ssh_Client_User}/filefolder | ssh ${Ssh_Server_User}@${Ssh_Server_Dnsoip} tar -xvzf -C /home/remoteuser/

# Backup Drive
sudo dd if=/dev/sda | ssh ${Ssh_Server_User}@${Ssh_Server_Dnsoip} 'dd of=sda.img'

# Restore Drive
ssh ${Ssh_Server_User}@${Ssh_Server_Dnsoip} 'dd if=sda.img' | dd of=/dev/sda

# Send 1 file from client to server
cat file | ssh ${Ssh_Server_User}@${Ssh_Server_Dnsoip} "cat > remote"

# Gte 1 file from server to client
ssh ${Ssh_Server_User}@${Ssh_Server_Dnsoip} "cat > remote" < file
```

# execute actions on 1 ssh server as root

```bash 
# prerequsit: connection ${stVm} is configured on the SSH Client that initiate the ssh
# prerequsit: ${Ssh_Server_User} is sudo

# Install on ssh server kernel module if not exists
ssh ${stVm} "sudo lsmod | grep ${sKenerlModule} || sudo modprobe -a ${sKenerlModule}"
```

# Todo
## Jump
- use ssh -J
- use bastion
- Connect to vm via Bastion

## example
```bash
ssh -T -o StrictHostKeyChecking=no mxgithub
```

## Keep Connection open between SSH host and client
###  Solve the pbs **"Write failed. Broken pipe"**
- On Server
  - Update the file **/etc/ssh/sshd_config**
    - TCPKeepAlive yes
    - ClientAliveInterval 30
- On Client
  - Update the file **/etc/ssh/ssh_config**
     - TCPKeepAlive yes
     - ClientAliveInterval 30

### Parameter for Conf File 
 Keep Connection Alive
- ShhdConfig
  - ClientAliveInterval 
  - PrintMotd
  - TCPKeepAlive
  - LogLevel
  - Port
- ShhConfig


## Mutual Ssh
### Vm01
```bash
cd /tmp
ssh-keygen -t ed25519 -C "postgres mutual ssh"  -N "" -f /tmp/
```
## Ssh-copy-id
```bash
ssh-copy-id -i ~/.ssh/sshkeyovh.pub -o "-l centos" o1m
```


```
sftp -P 22 -oStrictHostKeyChecking=no lisa@csftp
```