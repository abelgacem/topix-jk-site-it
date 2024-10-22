<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../README.md

# [&larr;][Repo_Readme] Yq > Howto > Install

# mac
```bash
cd /tmp
version=yq_linux_386
curl -LO https://github.com/mikefarah/yq/releases/latest/download/yq_linux_386
tar xzf yq_darwin_arm64.tar.gz
cd /usr/local/bin
sudo mv /tmp/yq_darwin_arm64 .
ln -s ./yq_darwin_arm64 yq
yq --version
```

# linux 
## alpine

Method
```bash

YQ_ARCH="yq_linux_amd64"
YQ_ARCH="yq_linux_386"

# add package yq
# wget https://github.com/mikefarah/yq/releases/latest/download/${YQ_ARCH} -O /usr/local/bin/yq && \
# chmod +x /usr/local/bin/yq && \
```

Method
```bash
version=yq_linux_386
sudo wget https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 -O /usr/local/bin/yq
sudo chmod +x /usr/local/bin/yq
```


## ubuntu

Method

# add package yq
```bash
YQ_ARCH="yq_linux_amd64"

wget https://github.com/mikefarah/yq/releases/latest/download/${YQ_ARCH} -O /usr/local/bin/yq && \
chmod +x /usr/local/bin/yq && \
```

Method
```bash
version=yq_linux_386
sudo wget https://github.com/mikefarah/yq/releases/latest/download/yq_linux_amd64 -O /usr/local/bin/yq
sudo chmod +x /usr/local/bin/yq
```


