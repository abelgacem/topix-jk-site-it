---
mx:
  ref:
    - whatis/cni
---

# install > CNI - Toknow
Can be installed with **sudo apt install kubernetes-cni from kubernetes repo** BUT BUT
- on ubuntu 22.04 => cni version is older that what exists in cni git repo

# install > CNI
- Configure the CNI configuration file (/etc/cni/net.d/xxnet.conf) 
  - xxnet.conf denote the name of a network configuration file
- Install the binary plug-in defined in the CNI configuration file.
- After a pod is created on a node, Kubelet runs the CNI plug-in installed in the previous two steps based on the CNI configuration file.
- This completes the pod network configuration.

# Install > Flannel
```bash
kubectl apply -f http://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
```

# Install > Weave
```bash
export kubever=$(kubectl version | base64 | tr -d '\n')
kubectl apply -f "https://cloud.weave.works/k8s/net?k8s-version=$kubever"
```

# Example
```json
// cat >/etc/cni/net.d/99-loopback.conf <<EOF
{
	"cniVersion": "0.2.0",
	"name": "lo",
	"type": "loopback"
}
EOF
```

# Example
```json
//$ cat >/etc/cni/net.d/10-mynet.conf <<EOF
{
	"cniVersion": "0.2.0",
	"name": "mynet",
	"type": "bridge",
	"bridge": "cni0",
	"isGateway": true,
	"ipMasq": true,
	"ipam": {
		"type": "host-local",
		"subnet": "10.22.0.0/16",
		"routes": [
			{ "dst": "0.0.0.0/0" }
		]
	}
}
EOF
```

# Enable hostPort support
```json
// specify portMappings in cni-conf-dir
{
  "cniVersion": "0.4.0",
  "name": "k8s-pod-network",
  "plugins": [
    {
      "type": "calico",
      "log_level": "info",
      "datastore_type": "kubernetes",
      "nodename": "127.0.0.1",
      "ipam": {
        "type": "host-local",
        "subnet": "usePodCidr"
      },
      "policy": {
        "type": "k8s"
      },
      "kubernetes": {
        "kubeconfig": "/etc/cni/net.d/calico-kubeconfig"
      }
    },
    {
      "type": "portmap",
      "capabilities": {"portMappings": true}
    }
  ]
}
```
