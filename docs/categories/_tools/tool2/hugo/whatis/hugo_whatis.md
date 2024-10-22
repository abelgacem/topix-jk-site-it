<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../README.md
[object_list]:    ../list/object_list.md
[reference_list]: ../list/reference_list.md

[process_whatis]:  ../whatis/process_whatis.md   
[site_whatis]:     ../whatis/site_whatis.md
[server_whatis]:   ../whatis/server_whatis.md
[topix_whatis]:    ../whatis/topix_whatis.md
[code_whatis]:    ../whatis/code_whatis.md

# [&larr;][Repo_Readme]Hugo
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Object||||[List][object_list]|List of Whatis,Howto, List
|Reference||||[List][reference_list]|List of external references
|topix||||[Definition][topix_whatis]|implementation of topix with hugo
||
||
|code||||[definition][code_whatis]
|site|2|||[definition][site_whatis]
|process|1|||[definition][process_whatis]
|server|3|||[definition][server_whatis]|
<br>

# Definition
- a tool
- written in  language:`Go`
- generate a static HTML site from templated content@(`html`, `markdown`, `asciidoc`, $\cdots$)
- uses template:`Go`
- has a embedded web server to preview site during development 


# Configuration
- file:
  - name:hugo.toml
  - path
    - (DEFAULT) ${HOME_HUGO}/.hugo.toml
    - (OTHER)   ${HOME_HUGO}/config/_default/hugo.toml

# Member
- component

# toknow
- cli:`hugo` need to be run in hugo home
- cli:`hugo` has a lot of shortcuts. eg.
  - hugo new a.md $\equiv$ hugo new content a.md


