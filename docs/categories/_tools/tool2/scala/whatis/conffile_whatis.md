<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>


[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[ConFile_Howto]:  ../howto/conffile_howto.md

# [&larr;][Repo_Readme]Domain > Computer Science > Sonarqube > What is > 1 configuration file
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|ConFile|see|[Howto][ConFile_Howto]|
<br>


# Definition
- configures sonarqube analysys
- is located in the source project's root folder

# Example
```bash
sonar.projectKey=${Project_Key}

sonar.projectName=${Project_Name}

# Project'version and not sonar's version (ie 1.0)
sonar.projectVersion=${Project_Version}

# location of the sources that SonarQube will analyze
sonar.sources=.

# uncomment if needed
#sonar.sourceEncoding=UTF-8
```