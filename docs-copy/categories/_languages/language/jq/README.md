<head><link rel="stylesheet" href="../../md.css"/><script src="../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:     ../README.md
[Object_List]:     ./list/object_list.md
[Reference_List]:  ./list/reference_list.md

[Json_Whatis]:     /../topic/ep/json/whatis/json_whatis.md
[Dsl_Whatis]:      ../../dsl/whatis/dsl_whatis.md
[Filter_Whatis]:   ./filter_whatis.md






# [&larr;][Repo_Readme]Domain > Computer Science > Jq
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Object|See|[List][Object_list]|List of Whatis,Howto, List
|Reference|See|[List][Reference_List]|List of external references
<br>

# Lexical Field
- Filter
- Json, Parser

# Definition
Is1 
- Cli
- Json Parser

Is used to 
- Parse Json input to produce textual Output

Uses (like grep, cut, head, ...)
- 1 Dsl

# Member
- Dsl
  - Instruction
  - Method

# Usage
      jq [option] -f JqProgram.jq JsonFile.json
      jq [option] 'JqProgram' JsonFile.json
      jq [option] 'JqInstruction' File.json
      jq [option] 'JqExpr01 | JqExpr02| ...|JqExprN'   JsonFile.json
      jq [option] 'JqExpr01  , JqExpr02,  ...,JqExprN' JsonFile.json
      Stream.Json | jq ...
      jq '.Image | .[]? | .[]| select(type==\"array\")|.[0:1]' ${Jf}"
      jq '.Image' ${Jf}
      jq '.Image| .[] | keys | .[]' ${Jf})

      jq -r -f JqProgram.jq JsonFile.json
      cat ${JsonFile} | jq 'xxx'
      cat ${JsonFile} | jq '. | {...}
      cat ${JsonFile} | jq '.[] | {...}
      cat ${JsonFile} | jq '.[][] | {...}


## Is1

- [Cli][Whatis_Cli]

## Allow to
- Manage File (of type [Json][Whatis_Cli])


[//]: # (List of link external to that file)
[Whatis_Cli]:  !#/Omt/Whatis/Cli
[Whatis_Json]: !#/Omt/Whatis/Json



