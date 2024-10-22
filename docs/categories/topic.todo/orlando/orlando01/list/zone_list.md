<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../README.md

[Cft_Whatis]:    ../whatis/cft_whatis.md
[Dataplatform_Whatis]: ../whatis/dataptf_whatis.md
[Other_Whatis]:        ../whatis/other_whatis.md


[Zone_Whatis]:    ../whatis/zone_whatis.md

# [&larr;][Repo_Readme]Project > Orlando > List > Zone

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Zone|pre|[Definition][Zone_Whatis]|
<br>

# List
|Seq|Code|Name|Type|Content
|-|-|-|-|-
|0||Proxy Producer Zone||
|1||Landing Area|Aws:S3|Result of the transformation of the vacation file
|2||Raw Zone|Aws:S3|Data lake = donnée brute
|3|sz|Structured Zone|Aws:S3|Data lake (Dataware house)
|4||Consumer zone|Aws:Rds:Postgres|Datamart
<br>

# Landing Area
- on eve => copy all files to *raw zone* then delete its contents

# Consumer Zone
- Data source for
  - end user servcies
  - business applications


