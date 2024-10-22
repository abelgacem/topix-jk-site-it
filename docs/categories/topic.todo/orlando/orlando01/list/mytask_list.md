<head><link rel="stylesheet" href="../../../md.css"/></head>


[//]: #(Reference)
[Repo_Readme]:    ../list/todo_list.md

# [&larr;][Repo_Readme]Project > Orlando > List > My Task

[//]: #(Reference)
[Repo_Readme]:    ../README.md

[Task_Todo]:     ../todo/task_todo.md
[Question_Todo]: ../todo/question_todo.md
[Dat_Todo]:      ../todo/dat_todo.md
[Cra_Todo]:      ../todo/cra_todo.md
[Env_List]:      ../list/env_list.md



# List
|Name|Seq|View|Desc|
|-|-|-|-|
|Outgoing flux|see|[Todo][Cra_Todo]
|Learn on apache airflow|see|[Todo][Question_Todo]
|Learn on aws:lambda|see|[Todo][Question_Todo]
|Learn on aws:glue|see|[Todo][Question_Todo]

# Mongi
- stream infra
- transfi + Cft
- 

# Meeting Mongi / Benjamin
- Automatiser les flux retours

## Le secure shell

- Préparer le fichier
- cftp get
- Chiffrer
- encrypt
  - clef
   - clef private sur le server
   - clef public chez Arkea
   - ou sont les clefs
- Declencher ssh operator depuis airflow
  - Ouverture de flux


- cftp send => 2.4 cft send
- Peux faire les 4 o
- mongi mail du 05 janvier
- appel à 1 script existant
 - 

## tester
- Tester avec Arkea 

## Usage de Gpg
- configurer la private key



## Security
 - cft tls avec arkea
   - si TLS => plus de GPG
 - cft 
   - gpg = ok



# Todo
- Meet Philippe Cabireau
- get ticket number (RITMxxx) from hamid for demande de pc MMB

# From Benjamin
- involved Amar in the returned stream
- involved Amar in something from dev

# the Flow
- Hsbc Flows
- Arkea Flows (99%)
- Manually sends from Arkea
  - Listen topics 
  - Meeting with
    -  IPA - noel Hardelot
      - transfi - 
    -  IPA - alexandre vial
    -  Infra - Mongi Zaibi
- Howto manage meta data in a simple way
  - meta data
  - conf file named control version
  - 


# Pbs cre date multiple
- 5 cre concerné (3401 41022 52SCD 52SCPD )
- Afef a fait l'analyse
## solution 41022
- il y a 2 date
  - 30/09
  - 30/11
- On garde les fichiers originaux dans le folder 30/09/2022
  - pour athena
  - pour audit
  - pour ... historique
- Spliter le fichier avec 2 dates d'arrétés
 - fichier avec dates 30/09 dans folder 30/09
 - fichier avec dates 30/11 dans folder 30/11

## solution 52SCx (x=P)
- il y a 3 date
  - 15/12
  - 16/12
  - 17/12
- Garder les lignes 15/12
- Supprimer les lignes 16/12 et 17/12
 - fichier avec dates 30/09 dans folder 30/09
 - fichier avec dates 30/11 dans folder 30/11
- copier fichier dans folder 30/11
- question : 

- Fichier reçu 


## solution 52SCD

- Entrer dans le S3
- Domaine Retail
- 41022
- 30 novembrer 2022
- service EMR 
- Le sauvegarder dans sharepoint
- Excel max 1 million de ligne (1 ou 2 Go)
- 

# Transfert de fichier dans le DAG
- tool : file gateway = transfi
  - chaque equip gère son depot git et sa conf
- il n'y a que 1 depot git par instance de Airflow
- il y a mutualisation des dag au sein d'1 même depot git
- cf. le SRE depot à fait ce job

# Airflow + transfi
  