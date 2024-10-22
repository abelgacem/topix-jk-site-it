<head><link rel="stylesheet" href="../../md.css"/></head>

# [&larr;][Repo_Readme]Project > Orlando > MT1


[//]: #(Reference)
[Repo_Readme]:    ./README.md






# Todo

- Qui fournit la data au format CSV
  - Hsbc ou Arkea







||||||
|-|-|-|-|-|
|Consumer|||on est la|Datamart (4)
|Structures Zone|||on est la|Data lake = Dataware house (3)
|Raw Zone|||on est la|Data lake = donnée brute (2)
|Landing Zon|||on est la|Staging (1)
||MMB|BDC|CCF|Datamart

- chaque bq envoie ses data à la Data Ptf

## Zoom sur CCF

||||||
|-|-|-|-|-|
|Consumer|||on est la|Datamart (4)
|Structures Zone|||on est la|Data lake = Dataware house (3)
|Raw Zone|||on est la|Data lake = donnée brute (2)
|Landing Zonz|||on est la|Staging (1)
|Proxy Producer|||on est la|MIT1 (0)


 ## Proxy Producer
 - Arkea envoie 6xpar jour 1 vacation (1 ficher tar.bz)
 - on treansfomr ce ZIP en 
   - CRE
   - MetaData
   - Ges Param
   - Monitoring

 - CRE = fichier .Csv
   - Compte rendu d'eve
   - 1 contrat d'interface
   - 1 fichier de data
 - Meta data
   - header 
   - json sur 1 ligne
 - Gest param
   - list of value = table de reference
   - 1 ligne = 1 table de ref
 - Monitoring
   - stat sur 
     - nbr de ligne de chaque CRE
     - nbr de ligne du fichier Meta Data
     - nbr de ligne du fichier du fichier Meta Data
     - nbr de ligne du fichier GesParam
- MIT1
  - 



- il existe 1 compratiment S3 

# CRE
- dans tous les CRE: Première donnée fonctionel à la 8 ligne


# Day 1
- Mise en prod fin sept 2023 / debut octobre


# Todo 
 - CRI = fichier .Csv
   - Compte rendu d'inventaire

- CRE
  - Tiers
  - produits
  - Contrat
  - reseau bancaire



# Les appli
- Topaze
- 
# Spec de BAF
- 10 actions
  - 
- 

# phase
- now phase de certification dynamique  (CD1/CD2 ... CD5)
  - staging-dataplatform-dev-ccf.producer (dev)
  - staging-dataplatform-sit-ccf.producer (on historise les CRE) 
  - staging-dataplatform-uat-ccf.producer (on garde que les CD actuel)



# Definition

- fournit la data au format CSV
- est 1 BPO
- est 1 provider de service pour toutes les banques (dont MMG)
- provide all kind of back and front App. ex:
  - appli conseiller
  - risque
  - compta
