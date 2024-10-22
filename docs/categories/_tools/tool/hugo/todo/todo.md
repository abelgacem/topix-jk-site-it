# Todo
provides container image build and deployment that can be
-  reliable 
-  frequent
- quick and easy rollbacks (due to image immutability).

# Whatis

-  due to **image immutability**.

# Vocabular
- Dev Build/Release Image -- Application    Level
- Ops Deploy Image        -- Infrastructure Level

# Action
- Create  1 K8s.Cluster
- Deploy  1 K8s.App
- Explore 1 K8s.App
- Expose  1 K8s.App Publicly
- Scale   1 K8s.App
- Scale   1 K8s.Deployment
- Update  1 K8s.App
  - with 1 new software version.

# Bep
In Env.Prod to Provide fault-tolerance and high availability.
- The ControlPlane of 1 Cluster [usually] runs across multiple computers
- 1 cluster [usually] runs 2..N nodes, 
