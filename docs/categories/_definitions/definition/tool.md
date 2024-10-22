---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  type:     whatis
  lp:       2
---


# Definition

# Lexical Field
- Cli
- Method, Function, Procedure
- Module, Library, Package
- Front, Gui
- Service, Back
- Client, Server
- Os, Driver

# Synonym 
- Program, Software, Tool, Code
- Algorithm

# Definition
- Is one Acronym
- Is written in 1..N languages
- Is usually specific to 1 domain
- runs inside 1 Os
- oftne needs 1 .. N library 

# Livecycle

```mermaid
graph RL;
 id03(Develop)-->id00(Design);    
 id04(update)-->id03;    
 id05(provision)-->id04;    
 id05(provision)-->id03;    
 id06(decomision)-->id05;    
 ```


- design
- develop
- update
- provision
- decomission

# Operation
- design
- develop
- provision
- maintain
- decommision

# Toknow
- the type of application vary on the domain 

# Example of low level App
- driver for device
- os for computer

# Example of application type
|related to|name|description|
|-|-|-|
|Shell|[Not]Cli|ie. gui
|Network|[Not]Server|ie. Client
|Depndency|[Not]Library|
|Os|[Not]Low Level|
||LowLevel, Hardware, Hardwired
||Software
|Database Management||manage database content and access
|Package Management||install, update, delete package in the one Os
|Presentation Management||manage (eg. create, display, print) document
|Server||listen for query and serves file, string, display, object, json, ...
|Client||send request to obtains file, string, display, object, json, ...
|Provisioning||install, update, delete package and app in 1..N Os
|Infra||install, update, delete 1..n network, vm, Os, package and app in 1..N Os



# Example of application name
|Name|type|Description|
|-|-|-|
|docker, aws|cli
|acrobat, Word, excel, powerpoint|Presentation
|Nginx, Apache, Tornado|Web Server
|Apk|package|linux, apline
|Apt, dpkg|package|linux, ubuntu
|yum, dnf|package|linux, centos
|npm|package|NodeJs (all os)
|MongoDb|database|json file
|PostgresSql|database|sql table
|OracleDb|database|sql table
|MariaDb|Rdbms|sql table
|Ansible|Provisioning
|Terraform|Infra
|Packer|Provisioning
|Salt|Provisioning

