<head><link rel="stylesheet" href="../../md.css"/><script src="../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../README.md
[Object_List]:       ./list/object_list.md
[Reference_List]:    ./list/reference_list.md

# [&larr;][Repo_Readme]Domain > Computer Science > Yaml
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Object|See|[List][Object_list]|List of Whatis,Howto, List
|Reference|See|[List][Reference_List]|List of external references
<br>



# Terminology
Acronym
|Name|Display|Tag|Extension|
|-|-|-|-|
|Jk|JK||Json:Key|
|Js|JS||Json:Scalar|
|Jv|JV||Json:Value|
|Jo|JO||Json:Object|
|Ja|JA||Json:Array|
<br>
# Definition
## Yaml
- Is acronym > for > 
  - **Y**et **A**nother **M**arkup **L**anguage
  - **Y**aml **A**int A **M**arkup **L**anguage


- Is1
  - Notation
  - Format.Txt like
    - Xml, Csv, Yaml, ...
  - Stream.Txt
    - File.Txt
    - 1 String

- Can > be > used > to denote/define
    - Information
    - Data
    - Structure, Datatype
    - Variable, Kvpair, Object

## Other
|Name|Verb|-|Example \| Syntax|
|-|-|-|-|
|Js|Can be|<li>String</li><li>Number</li><li>Boolean</li>|<li>"Hello"</li><li>23.4</li><li>true</li>|
|Jk|Is1|String|"Name"|
|Jv|Can be|<li>1 Js</li> <li>1 Jo</li> <li>1 Ja</li>|
|Jo|Can be|<li>1 Kvpair</li><li>N Kvpair</li>|<li>{ Jk : Jv }</li> <li>{ Jk1 : Jv1, Jk2 : Jv2, ..., Jkn : Jvn }</li>|
|Ja|Is1|Array|<li>[Jv]</li><li>[Jv1, Jv2, ..., Jvn]</li><li>["Hello", {...}, [...], ... ]</li>|
<br>

# Json > As > 1 > Notation
- Is > used > to > define > var > in > code

```bash
# Define > 1 > Json:Array
MyArray = [...]

# Define > 1 > Json:Object
MyObject = {...}

# Define > 1 > Array of Object.Json
```
# Json : Object
- Example, Syntax
```json
{ ... }
{ ... , ... , ... }
{ "Jk1":"V1",   "Jk2":234, ...,   } ## N Kvpair (Value As Js)
{ "Jk1":[... ], "Jk2":[ ... ]     } ## N Kvpair (Value As Array)
{ "Jk1":{...},  "Jk2":{...}, ...  } ## N Kvpair (Value As Jo)
{ "Jk1":[...],  "Jk2":{...}, ...  } ## N Kvpair (Value As Jo | Ja | Js)
{ "foo":{...},  "bar":[...], "foo01":"Fooret", ... } N Kvpair (Value As Jo | Ja | Js)
```

# Json : Array
- Example, Syntax
```json
[ ... ]
[ ... , ... , ... ]
[ {...}, {...}, {...}, ... ] ## Item as Object
[ "...", "...", "...", ... ] ## Item as String
[{...}, [...], "foo01", 345, { ... }, ... ] ## Item of Any type
```

- Ja are often Array of Jo with same Kvpair. Example
```json
[
  {"Name":"Name01", "Description":"Desc01"}
  {"Name":"Name02", "Description":"Desc02"}
  ...
  {"Name":"Name0n", "Description":"Desc0n"}
]
```
# Json : Scalar

```json
// Scalar.String
" ... "

"Car"
" ... "
"232"
"azerty"
"Apple Orange Lemon ..." ## String as 1 sequence of List of Fruit
"{...} {...} {...} ..."  ## String as 1 Sequence of Json.Object
"[...] [...] [...] ..."  ## String as 1 sequence of Json.Array
"[ ... ]"                ## String as 1 Array

// Scalar.Number
345
-435
null

// Scalar.Boolean
False
true
```
# Todo
```json
// Seq of Jv for Jq
222 444 -876 989 3456                           ## Jv as Scalar
"..." 412 False "..." "..." "..."               ## Item as Js
{ ... } { ... } { ... } { ... }                 ## Item as Jo
[ ... ] [ ... ] [ ... ] [ ... ]                 ## Item as Ja
{ ... } [ ... ] "..." 454 -22 [...] [...] {...} ## Item of Jv

```

# See Also
- [Var][Var_Whatis]
- [Kvpair][kvpair_Whatis]
- [Yaml][Yaml_Whatis]


[//]: #(Reference)
[Back_Readme]:            ./readme.md              "Home > Repository.Git"

[Kvpair_Whatis]:   /../topic/whatis/kvpair_whatis.md  "Whatis > 1 > Kvpair"
[Yaml_Whatis]:     /../topic/whatis/yaml_whatis.md    "Whatis > Yaml"
[Var_Whatis]:      /../topic/whatis/var_whatis.md     "Whatis > 1 > Var"