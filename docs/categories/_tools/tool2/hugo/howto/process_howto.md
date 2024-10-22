<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:  ../list/object_list.md
[item_whatis]:  ../whatis/process_whatis.md

[theme_whatis]:  ../whatis/theme_whatis.md

# [&larr;][Repo_Readme] Hugo > process > Howto ([Definition][item_whatis])
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|theme||||[theme][theme_whatis]
<br>

# Define site/page's theme
## version
cf. theme
## version
  - create a file
    ```powershell
    # file:./layouts/page/single.html
    touch ./layouts/page/single.html
    ```
  - add content to this file
    ```powershell
    { define "main" }}
    <article>
        <h1>{{ .Title }}</h1>
        {{ .Content }}
    </article>
    {{ end }}

# Define site's content
  - create a file
    ```powershell
    # file:content/doc-domain/README.md from a default template
    hugo new content doc-domain/README.md
    ```
  - add content to this file
    ```md
    [//]: #(Reference)
    [Repo_Readme]:       ../README.md
    [item_whatis]:    ./whatis/ansible_whatis.md

    # [&larr;][Repo_Readme]Domain > Computer Science > Mathematic
    goto [item_whatis][item_whatis]
    ```

- preview site with embeded server
```powershell
# cd site@hugo:home
hugo server -D --bind 0.0.0.0 -p 1313
```

