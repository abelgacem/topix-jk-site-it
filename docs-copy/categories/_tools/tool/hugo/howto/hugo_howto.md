# [&larr;][Back_Readme] Domain > It > TemplateName > Howto

See Also
|Name|Description|Tag|
|-|-|-|
|TemplateName|[Whatis][TemplateName_Whatis]|
<br>

# Steps

## Define Var.Env
```bash
export SiteName="topix"
```
## Create 1 site
```bash
cd ${SiteName}
hugo new site ${SiteName}
```
## Create 1 site:Article
```bash
cd ${SiteName}
hugo new epi/topic/hugo/README.md
```

## Get 1 theme.Exists
```bash
cd ${SiteName}
# Create folder.git
git init
# Install 
git submodule add https://github.com/panr/hugo-theme-hello-friend.git themes/hugo-theme-hello-friend
```

# Tell server to listen query
```bash
# Listen http query on all interface (Container and host) on port 1313
# Build site
hugo server --bind 0.0.0.0
# Test on Vm
curl localhost:1313
```


# Build site in folder public
```bash
hugo
```

[//]: #(Reference.Std)
[Back_Readme]:     ./readme.md         "Home"

[//]: #(Reference.Std)

[TemplateName_Whatis]:         ../whatis/TemplateName_whatis
