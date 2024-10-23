---
mx:
  ref:
    - whatis/containerd
---


# List Plugin

```bash
# List > Plugins
sudo /usr/local/bin/ctr plugin ls

# Display  > Detail
sudo /usr/local/bin/ctr plugins ls -d id==devmapper
sudo /usr/local/bin/ctr plugins ls -d id==aufs

sudo /usr/local/bin/ctr i pull --snapshotter devmapper docker.io/jeromegn/go-test:latest
# Pull Image
sudo /usr/local/bin/ctr images pull --snapshotter devmapper docker.io/library/hello-world:latest
# Ls Image
sudo /usr/local/bin/ctr images ls
```

# Generate > Conf
```bash
containerd config default > /etc/containerd/config.toml
```
