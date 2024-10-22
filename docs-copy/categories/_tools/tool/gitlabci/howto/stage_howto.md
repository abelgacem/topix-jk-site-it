# [&larr;][Repo_Readme]doc > [GitlabCI][Topic_Readme] > [Howto][STopic_List] > manage >  Stage

[//]: #(Reference)
[Repo_Readme]:   ../../README.md
[Topic_Readme]:  ../README.md
[STopic_List]:   ../list/obj_list.md


[Stage_Whatis]:     ../whatis/stage_whatis.md
[Language_Whatis]:  ../whatis/language_whatis.md

# See Also 

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Stage|[Definition][Stage_Whatis]|
|Language|[Definition][Language_Whatis]|
<br>

# Define order of stages
```powershell
stages:
  - build
  - test
  - deploy
```

# Allow 1 job to failed and stage to succed

```powershell
# uses
allow_failure: true
```
