# [&larr;][Repo_Readme]doc > [GitlabCI][Topic_Readme] > Dsl

[//]: #(Reference)
[Repo_Readme]:   ../../README.md
[Topic_Readme]:  ../README.md

[Dsl_Whatis]:          ../whatis/dsl_whatis.md
[LangService_Whatis]:  ../whatis/dsl_service_whatis.md
[DslVar_Whatis]:       ../whatis/dsl_var_whatis.md
[DslRule_Whatis]:      ../whatis/dsl_rule_whatis.md
[DslImage_Whatis]:     ../whatis/dsl_image_whatis.md
[DslTag_Whatis]:       ../whatis/dsl_image_whatis.md
[DslWhen_Whatis]:      ../whatis/dsl_when_whatis.md

[Language_Whatis]:      ../whatis/language_whatis.md
[LanguageImage_Howto]:    ../howto/dsl_image_howto.md
[LanguageService_Howto]:  ../howto/dsl_service_howto.md
[LanguageVar_Howto]:      ../howto/dsl_var_howto.md


# See Also 
|Name|Tag|Extension
|-|-|-|
|Dsl|[Definition][Dsl_Whatis]|
|Language|[Definition][Language_Whatis]|
|Language:Image|[Howto][LanguageImage_Howto]|
|Language:Service|[Howto][LanguageService_Howto]|
|Language:Var|[Howto][LanguageVar_Howto]|






# List

- The column default indicates if instruction can be defaulted for all jobs in the file

|Name|Type|Default|||
|-|-|-|-|-|
|default|Pipeline|||Define 1..N instructions to be defaulted|
|include|Pipeline|||
|stages|Pipeline|||
|[variables][DslVar_Whatis]|<li>Pipeline</li><li>Job</li>|||
|workflow|Pipeline|||
|Default|Pipeline||
|after_script|Job|yes|
|artifacts|Job|yes|
|before_script|Job|yes|
|cache|Job|yes|
|[image][DslImage_Whatis]|Job|yes|
|interruptible|Job|yes|
|retry|Job|yes|
|[Rule][DslRule_Whatis]|Job|yes|
|services|Job|yes|
|[tags][DslTag_Whatis]|Job|yes|
|timeout|Job|yes
|[Service][LangService_Whatis]|||
|[Rules][DslRule_Whatis]|||
|[When][DslWhen_Whatis]|||
<br>

