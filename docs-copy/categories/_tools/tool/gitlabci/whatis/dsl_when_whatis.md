# [&larr;][Repo_Readme]Doc > [GitlabCI][Topic_Readme] > [Dsl][STopic_List] > When

[//]: #(Reference)
[Repo_Readme]:   ../../README.md
[Topic_Readme]:  ../README.md
[STopic_List]:   ../list/dsl_list.md

[GitlabCiFile_Whatis]:  ../whatis/gcifile_whatis.md
[Rule_Whatis]:          ../whatis/dsl_rule_whatis.md
[When_Howto]:           ../howto/dsl_when_howto.md


# See Also 
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|When|[Howto][When_Howto]|instruction
|Rule|[Definition][Rule_Whatis]|instruction
|GitlabCI File|[Definition][GitlabCiFile_Whatis]|
<br>




# Definition
 - condition to play the job

 |Name||Description|
 |-|-|-|
 |on_success|default|<li>Run job only when all jobs in earlier stages succeed</li><li>If 1 previous job failed this job is not played and the pipeline failed</li>|
 |on_failure||<li>Run job only when at least one job in an earlier stage fails</li><li>Play job even if previous jobs failed</li><li>If 1 previous job failed the pipeline continue and this job is played</li>|

