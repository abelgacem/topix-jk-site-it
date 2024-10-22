<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/subproject_list.md


# [&larr;][Repo_Readme]Project > Orlando > Airflow


# List of references
|Key|value|
|-|-|
|stream|platform d'orchestration
|teams|platform d'orchestration/video/accompagnement à la mise en oeuvre des premiers ...
|contact|noel BARDELOT
|contact|vincent LIGER
|contact|maxim
|doc|gitlab:dags/airflow-deploy/doc
<br>

# Terminology

- Lbn acronym de LinkByNet

# Liste des instances airflow

|Name|Type1|Type2|Gui Url|Desc|
|-|-|-|-|-|
|dom|stagging|sit|
|dom|stagging|uat|
|metro|stagging|sit|
|dom|Prod|Prod|
|metro|Prod|Prod|
|finance|stagging|Prod|

- Gui Url is defined in mmb:gitlab:dag:airflow-deploy/doc/env

# Definition
Airflow 
  - Est installé dans le cloud Amazon (maybe managed version)
  - Se connecte à des VM@OnPremise situé chez Lbn/Ibm en SSH(linux)/WinRM(windows)

Les operator vont être de 2 types
  - SshOperator  
  - WinRMOperator  

Donc
 - ouverture de flux
 - paramétrage Ssh ou WinRM
   - ex: server datastage



# Airflow:Dag in Gitlab
gitlab.intranet.mymoneybank.fr/mmb/mecanismes-generaux/outillage/scheduling/Dags (group)
  - 1 projet par instance airflow. example:
    - dags-finance-batch
    - dags-metro-batch
    - dags-dom-batch

pour chaque projet. les branches suivantes. example pour *dags-finance-batch*
- uat => airflow  uat
- sit => airflow  sit
- prod => airflow prod

Comme 1 service finance => 2..N sub-service (e.g reg, treso, compta). donc branches suivantes:
- reg/sit
- reg/uat
- reg/prod
- treso/sit
- treso/uat
- treso/prod
- compta/sit
- compta/uat
- compta/prod

A 1 moment donné
- compta/uat merge dans uat
- treso/uat merge dans uat
- reg/uat merge dans uat
- compta/sit merge dans sit
- treso/sit merge dans sit
- reg/sit merge dans sit

## Example in git
### purpose
- File transfert for App named ais of sub-service finance:compta
- transfert from server ais and filegateway
### dag in gitlab
- dags-finance-batch/compta_ais_sftp_file_gateway_test.py

# Third partty Python lib
- Airflow is connected to Nexus
- Nexus is connected to Standard Python repository
- a file named requirement.txt allow to add Python lib to airflow
- cf mmg:gitlab:dags:dags-finance-batch@uat

# connection 
- in airflow : Gui > admin > connection
- connection ssh/WinRM are declare by SRE in vault and used in airflow
- Question:
  - dois-je utiliser 1 connection existante
- equipe = OK pour apprendre le SRE à créer une connexion dans Vault

# variable
- in airflow : Gui > admin > variable

