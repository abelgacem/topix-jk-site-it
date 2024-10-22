<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

<h1>{{MainCtrl.Lcv.IN.Jq}}  > {{MainCtrl.Lcv.NO.Other}}</h1>
<md>
## Display Builtin Function
- jq -nr 'builtins[]
##ArrayFile of Object
- json/omt/tool.json
- json/omt/tool3.json

##Code
###Display
  - Number of item
    - jq '.List | length' tool.json 
  - Number of each member of each item
    - jq '.List[] | length' tool.json 
    - jq '.List[] | length' tool.json | sort | uniq
##List
###all Item
  - jq '.List[]' tool.json
###all member of all Item
  - jq '.List[]' tool.json
###selected KVPair of all Item
  - jq '.List[] | {Name}' tool.json
  - jq '[.List[] | {Name}]' tool.json
##Extract
  - Array of Value of 1 Member
    - jq '.List[] | .Name' tool.json
    - jq '[.List[] | .Name]' tool.json
##Add
###Member to each Item
  - jq '.List[] | {Name, Comment : "none"}' tool.json
  - jq '[.List[] | {Name, Comment : "none"}]' tool.json
###Sort 1 Json
  - jq '.List|=sort_by(.Name)'            domain.json
  - jq '.List|=sort_by(.Name)|.[]|length' domain.json
###Map 1 Json to Json
####  Kvpair to List of Object
  - jq '.|{List:[.]}' noun_en_en.json


## Select List
... | select(.>=[])
## Select List
... | select(type|.=="array" or .=="object")
## Select String
... | select(.==tostring)
... | select(type=="string")
## Select Everything but Number for Item id
... | select(id|type=="number"|not)
... | select(id|type!="number)


## Recurse
    recurse( select(.>=[]) | .[] )
    recurse(select(type|.=="array"or.=="object") | .[])

## Variable
    def for(args): args as $a| ($a[2] // 1) as $step|   $a[0] | recurse( .+$step| select(.<$a[1]) );


  </md>
