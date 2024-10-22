<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Forward_Whatis]:   ../whatis/forward_whatis.md
[Anaconda_Howto]:   ../../ai/howto/conda_howto.md

# [&larr;][Repo_Readme]Domain > Computer Science > SSH > Howto > manage > Ssh Forwarding
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Forward|[Definition][Forward_Whatis]|
|Anaconda|[Howto][Anaconda_Howto]|
<br>


# Forward

## Use case : Generic 
- In 1 vm@remote:vmr 1 server is listening on port PORT_RXXX
- In 1 vm@local:vml we want to
  - forward vmr:PORT_RXXX to vml:PORT_LYYY

```powershell
# on vmr
open port PORT_RXXX
# on vml
ssh -N -f -L localhost:8080:localhost:8888 user@vmr
```

## Use case : Jupyter

- Start jupyter notebook on vm remote
```powershell
jupyter notebook --no-browser --port=8888

# Cli returns url to request the server
http://localhost:8888
http://127.0.0.1:8888... 
```
- open port 8888 on the vm remote
```powershell
# on vm remote (ubuntu)
sudo ufw allow 8888/tcp
# additional action may be needed on network firewall(ovh, aws)
```
- forward vmr:port to vml:port
```powershell
# on local  - the mac - forward port
ssh -N -f -L localhost:8080:localhost:8888 o4u
```

- Browse on my Mac:Safari
```powershell
# into browser
http://141.xx.xx.xx:8080...
```

# Forward with sshcli:config
```powershell
Host notebooks
    HostName host
    User myuser
    LocalForward YYYY localhost:XXXX
# ssh -Nf notebooks
```    


## Local Port Forward > Forward Port.80 of Host.Server to Host.Client
- UseCase:
  - On Ovh.Vps 1 Server.Nginx runs on Port 80
  - On Mac: I can SSH to Ovh
  - On Mac: I Want to Browse the Server On Port 50000 with Firefox/Safari
- Step
  - SSH to Host.Server
  - 
- Update file Ovh.Vps.sshd_config
  -   AllowTcpForwarding yes  

- Restart Ovh.Vps.sshd
  - systemctl restart sshd

  
  From MAC
  - ssh -L 8888:localhost:1234 ovhmx22
    - MAC.Port  = 8888
    - OVH.Port  = 1234
    - localhost =  OVH
  - When i will do 1 Curl Localhost:8888  from MAC
    - The Paquet will be sent to OVH
    - OVH (Localhost) will Send Packet to Port
  
  
  
  ssh -N -L 3307:my-rds-db.us-east-1.rds.amazonaws.com:3306 ec2-my-bastion-server.compute-1.amazonaws.com  
    - MAC.Port  = 3307
    - OVH.Port  = 3306
    - localhost = 3306
  - When i will do 1 Curl Localhost:8888  from MAC
    - The Paquet will be sent to OVH
    - OVH (Localhost) will Send Packet to Port


# Access Vm@cloud:service@web from browser in mac or pc 
## Use case : jupyter
Prerequisit
- 1 ovh:vps exists that denote 1 vm@cloud
- this vm is provisioned with os:ubuntu-22.04
- this vm is Ssh-able from internet
- this vm is called o4u on my Mac
- this vm is configured to be accessed via the cli: **ssh o4u** from my Mac
- Jupyter notebook is installed and launched on that vm with the cli **jupyter notebook --no-browser --port=8888**
  - the cli returns 2 url to access the App ... http://localhost:8888... http://127.0.0.1:8888... 

Action
- open port 8888 on the vm@cloud to world so that my Mac can access the server
```powershell
# on vm@cloud
sudo ufw allow 8888/tcp
# additional action may be needed on network (ovh, aws)
```
- link the vm@cloud:port to my Mac:port (ssh forwarding) 
```powershell
# on local  - the mac - forward port
ssh -N -f -L localhost:8080:localhost:8888 o4u
```

- Browse on my Mac;Safari
```powershell
# into browser
http://141.xx.xx.xx:8080...
```
