<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:       ../../README.md
[Object_List]:       ./list/object_list.md
[Reference_List]:    ./list/eeeference_list.md
[Term_list]:  ./list/terminology.md
[Environment_List]:  ./list/env_list.md
[Stakeholder_List]:  ./list/stakeholder_list.md
[Subproject_List]:   ./list/Subproject_list.md
[Tool_List]:         ./list/tool_list.md
[PrjChoice_List]:    ./list/prjchoice_list.md

# [&larr;][Repo_Readme]Project > Orlando
<head><link rel="stylesheet" href="./md.css"/><script src="./md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:       ../../README.md

[Cre_Integration_Whatis]: ./topic/cre_integration/README.md
[Airflow_Whatis]:         ./topic/airflow/README.md
[Filegateway_Whatis]:     ./topic/transfi/README.md
[Object_List]:            ./list/object_list.md
[Reference_List]:         ./list/Reference_list.md
[Term_list]:       ./list/terminology.md
[Environment_List]:       ./list/env_list.md
[Stakeholder_List]:       ./list/stakeholder_list.md
[Subproject_List]:        ./list/subproject_list.md
[Tool_List]:              ./list/tool_list.md
[Todo_List]:              ./list/todo_list.md


|||
|-|-|
|Folder Type|<li>subfolder of a git repository/project</li>|
|Project:name|:|*Orlando*
|Project:description|:|This project *Orlando* call it 1 *program* involves more than 1K persons
|Git:Project:purpose|:|document [sub]projects and topics of program Orlando in relation with team:MIT1 
|Gitlab CI|No|
<br>


# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Object|pre|[List][Object_list]|List of Whatis,Howto, List
|Reference|pre|[List][Reference_list]
|Terminology|pre|[List][Term_list]
<br>




# Definition
Orlando is 1 name that:
- denotes 
  - 1 project
  - the takeover by Cerberus of the Hsbc french subsidary (only the retail bank division)

- defines the complete redesign of the SI including but not only:
  - infrastructure
  - application
  - tooling
  - conception, design, integration of some incoming and outgoing streams/flows of data


# The Day1
- Denotes the big bang for this migration/program
- Is the day of the switching from *Hsbc* to *Cerberus/ccf* from end user point of view
- previsional date: 1 week-end of september 2023

# The Cutover
- Denote the switching from Hsbc to Ccf that will happend in a Week-End
- Denote a welll known tool (https://www.cutover.com) used by Cerberus
  - to monitor, [in]validate, improve, rool back each steps of 
    - severals switch simulation
    - The real switching in Day 1

# The DRx
- Denote a simulation of this switching for all teams involved in this program
- From april 2023 untill day1 (ie december 2023) there will be 4 DRs named DR0, DR1, DR2, DR3
- This DRx will happens on a Week-end
- DR is an acronym for **D**xx **R**ehearsal

# The CDx
- Denote a technical env + human Resources
- Each DR involved different ressources
  - Technical (eg, computer, data, application, ...) denote by a Name (eg CD3, CD4, CD4)
  - Human (eg, team prod, ...)
- This DRx will happens on a Week-end

# List of references
Name|Order|Seq|Point of view|Description|
|-|-|-|-|-|
|Object||see|[List][Object_List]|List of this project's objects
|Reference||see|[List][Reference_List]|List of this project's reference
|Terminology||see|[List][Term_list]|List of this project's terms
||
|Stakeholder|1|see|[List][Stakeholder_List]|List of this project's stakeholders
|Subproject|2|see|[List][Subproject_List]|List of this project's subproject
|Todo||see|[List][Todo_List]|List of this project's todo
|Tool||see|[List][Tool_List]|List of this project's tools

<br>

# Todo
## Phase of the project
- stay focus on env preprod 
- Q1:april begining
  - Fin Mars, début Avril = tout les devs sont finis = 
    - CD3 = full UAT = Clean Data = data not anonymised = early april
    - Control sur les fichiers Autres
- Are we going to use preprod or uat for CD3
  - many things are not available on preprod
  - many app have no preprod env but have prod
- Q2
  - Monitoring console = difficulté d'Arkea
  - Système monitoring console = Q2
- Q3:pour l'été
  - date multiple au sein d'1 cre = dev cotè Arkea
    - si Arkea pas capable de faire => 
      - on doit créer des workaround = coper des fichier = des outils de support
  - Préparer env de Prod by Arkea
- Prod = september


