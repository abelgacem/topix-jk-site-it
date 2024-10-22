<head><link rel="stylesheet" href="../../../md.css"/></head>

# [&larr;][Repo_Readme]Domain > Computer Science > Mac > Howto > Other

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Anaconda_Howto]:   ../../ai/howto/conda_howto.md



## Open 1 app:gui from terminal
```bash
## Generic
open -a ${AppId} ${FilePathName}

## example: open google:chrome
open -a "Google Chrome.app"

## example: open google:chrome with 1 md file
open -a "Google Chrome.app" /Users/max/debug/git/abtit/doc/doc-it/aws/README.md

## example: open google:chrome
open -a "Google Chrome.app" /Users/max/debug/git/abtit/doc/doc-it/aws/README.md

## example: open multiple instance of mac:safari
open -n /Applications/Safari.app/
```

## delete DNS cache
```bash
sudo dscacheutil -flushcache;sudo killall -HUP mDNSResponder
```