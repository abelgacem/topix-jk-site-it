<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

# [&larr;][Back_Readme] Howto > Docker > Install

## Step
```bashsss
# Define Var
FileNameBin=jq
FileName=${FilNameBin}-linux64
FileUrl=https://github.com/stedolan/jq/releases/download/jq-1.6/${FilName}
FilePath=/usr/bin
## Copy File
sudo curl -L ${FileUrl} -o ${FilePath}/${FileNameBin}
sudo chmod +x ${FilePath}/${FileNameBin}

# Check
jq --version



[//]: #(Reference.Whatis)
[Back_Readme]:     ./readme.md (List)


