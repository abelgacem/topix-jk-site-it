# [&larr;][Back_Readme] Domain > It > Hugo > Howto > manage > Theme

See Also
|Name|Description|Tag|
|-|-|-|
|Theme|[Whatis][Theme_Whatis]|
<br>

# Howto > Get > Theme:Git:Url
- browse > https://themes.gohugo.io
- Choose > 1 > Theme
- Click > Download

# Howto > Get > Theme
```bash
# Define var
export SiteName="topix"
export ThemeUrl="https://github.com/panr/hugo-theme-hello-friend.git"
export ThemeUrl="https://github.com/panr/hugo-theme-hello-friend.git"
export ThemeLocation="themes"
export ThemeName="hugo-theme-hello-friend"
# Define var
cd ${SiteName}
# Create folder .git
git init
# Add Git:Submodule
git submodule add ${ThemeUrl} ${ThemeLocation}/${ThemeName}
```

# Set > Theme
```toml
# in config.toml
# theme muist exists in folder 
theme = "hugo-theme-hello-friend"
```


[//]: #(Reference.Std)
[Back_Readme]:     ./readme.md         "Home"

[//]: #(Reference.Std)

[Theme_Whatis]:         ../whatis/theme_whatis
