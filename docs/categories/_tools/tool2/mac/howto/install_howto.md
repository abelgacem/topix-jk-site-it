<head><link rel="stylesheet" href="../../../md.css"/></head>

# [&larr;][Repo_Readme]Domain > Computer Science > Mac > Howto > Install

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md


# Yq
```bash
# install binary
cd /tmp
curl -LO https://github.com/mikefarah/yq/releases/latest/download/yq_darwin_arm64.tar.gz
tar xzf yq_darwin_arm64.tar.gz
cd /usr/local/bin
sudo mv /tmp/yq_darwin_arm64 .
ln -s ./yq_darwin_arm64 yq
yq --version

# install man
sudo mkdir /usr/local/share/man/man1
cd /usr/local/share/man/man1
sudo mv /tmp/yq.1 /usr/local/share/man/man1/
man yq

```

