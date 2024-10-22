<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/subproject_list.md


# [&larr;][Repo_Readme]Project > Orlando > FileGateway

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
## Acronym

|Code|Name|Extension|
|-|-|-|
|Lbn|LBN|**L**ink**B**y**N**et


# Synonym
- Transfi

# Purpose
File transfert In/Out via protocole
  - SFTP (get, pull)
  - CFT (recv, send)
    - for partner who cannot do SFTP
    - for partner whith old System (Mvs, As400)


# Definition
- Is1 Vm linux
- 1 per env (sit, uat, prod)
- Centralize Exchange of file
- Audit Exchange of file
- can act as
  - sftp/cft client of 1 external sftp server 
    - get file [from server] onto the Vm
    - put file inside the Vm [to server] inside the 
  - sftp/cft server of 1 external sftp/cft client
    - get file from the Vm
    - put file to the Vm
- uses library *file-gateway_lib*
  - zip à installer sur la machine windows(git bash)/linux (bash)



# Toknow
- user that uses this solution
  - maxim coté finance
  - banque des caraïbes

# Lien avec Airflow
- airflow se connecte à la vm (file-gateway) en ssh
- each transfert must have 1 id define by the iso standart uuid
  - xcom is needed to share var between task
# In Gitlab
- mmb:gitlab:mecanisme-generaux/systeme-echange/filehub:file-gateway-lib
- mmb:gitlab:mecanisme-generaux/systeme-echange/filehub:file_gateway-deploy/doc

# Step for file transfert
- connect via ssh to filegateway  
- play cli scp, sftp to do the transfert
- on va me donner 
  - 1 user dédié à mon app sur la filegateway. example
    - User pour app named depot du service finace will be
      - user unix: fluxdepot
      - groupe unix: finance
  - des chemins sur la filegateway. example:
    - /EXPLOIT/flux/finance/depot/...
- toujours transférer 1..N fichier avec les checksums (sha256sum)
- la filegateway valide ainsi l'intégrité des transfert    



# Use case
## UC
- Transfert from server *datastage* to *FileGateway*
- Airflow connect to *datasatge* via WinRM
- Exchange file with *FileGateway* that act as server

## UC
- Transfert file from Vm named *Flx* to Server *Datasatge* shoud be split in 2
  - Transfert file from Vm named *Flx* to *FileGateway*
  - Transfert file from server *FileGateway* to server *Datastage*
