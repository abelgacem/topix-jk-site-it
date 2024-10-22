# K8S :: Config Map
Allow to

  - Decouple configuration artifacts from image content
  - Keep containerized applications portable.

Can be

  - 1 Folder
  - 1 File
  - 1 KVpair


# K8S :: Namespace
To know

  - Some {{I18nAcro.Res}} are in 1 {{I18nAcro.Ns}} other do not
  - Some {{I18nAcro.Res}} are in 1 {{I18nAcro.Ns}} other do not



# K8S :: Nodes

  - Have 1 Internal IP that is not visible from the outside world


# K8S :: Service
To know

  - When you create a Service, it creates a corresponding DNS entry. 


# K8S :: DNS
To know

  - DNS entry is of the form &lt;service-name>.&lt;namespace-name>.svc.cluster.local, 


# K8S :: Best Practice
- Manage > Cluster:Kubelet:kubeletConfig > with > Kubeadm
  - at > init
  - when > update

## Example


# Todo
- Deployment
- Replicaset
- Kubectl apply
- Kubectl expose
- Namespace
- RBAC
- ConfigMap
