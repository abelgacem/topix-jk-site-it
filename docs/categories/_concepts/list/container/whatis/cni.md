---
mx:  
  ref:
    - howto/cni
---

# Definition
- 1 acronyme (Container Networking Interface)
- 1 specification
  - Which is implemented by plugins of type `cni`  but not only
  - Addresses  the  `K8s:Networking:Model`

# category
- Network
- Ipam


# Example
plugin that implement `cni`
- `Weave`
- `Flannel`
- `Calico`
- `Canal`
- `Kube-OVN`
- `Tigera Secure EE`

# plugin of type  `Cni`, Network
responsibility
- Add  `pod` to `pod`:network
- Delete  `pod` to `pod`:network
- Create/Delete  `pod`:network:interface 
- Connect/disconnect `pod`:network:interface to the rest of the network implementation

# plugin of type  `Cni`, `ipam`
responsibility
- Allocate/Release `pod`:`Ip` when `pod` is created/deleted
- Depending on the plugin
  - Allocate 1..N ranges of IP addresses (CIDRs) to each node
  - Obtain  `Pod`:IP from an underlying public cloud’s network to allocate it to `pod`

# List of plugin of type `cni`

-  `CNI IPAM`  plugins: responsible for allocating and releasing IP addresses for pods as they are created or deleted. Depending on the plugin, this may include allocating one or more ranges of IP addresses (CIDRs) to each node, or obtaining IP addresses from an underlying public cloud’s network to allocate to pods.# List of plugin@Cni
List of Plugins@Cni that implement CNI spec: https://ubuntu.com/kubernetes/docs/cni-overview
- Calico
- Weave
- Canal
- Flannel
- Kube-OVN
- Tigera Secure EE

# Configuration file
|Name|Tag|Desc|
|-|-|-|
|`cni-conf-dir`|`/etc/cni/net.d/`|Where to look for plugin executables

Example:
- `/etc/cni/net.d/10-mynet.conf`
- `/etc/cni/net.d/99-loopback.conf`
- `/opt/cni/bin`

# Environment variablesVar@env
|Name|Tag|Desc|
|-|-|-|
|`CNI_PATH`||Where to look for plugin executables

# Toknow
- Docker do not use `cni` but `cnm` (Containter Network Model) and its implementation libnetwork

# Todo
- plugins of type `cni`
- https://containers.goffinet.org/containers/053-container_network_model#whats-in-a-network
