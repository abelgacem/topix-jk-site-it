---
draft : true
mx:  
  type:     whatis
  lp:
---

# Install jq
# Define variable in code

```bash
# Define > 1 > Json:Array
MyArray = [...]

# Define > 1 > Json:Object
MyObject = {...}
```
# Define a json:object
```json
// generic object
{ ... }

// example
{ ... , ... , ... }
{ "Jk1":"V1",   "Jk2":234, ...,   } ## N Kvpair (Value As Js)
{ "Jk1":[... ], "Jk2":[ ... ]     } ## N Kvpair (Value As Array)
{ "Jk1":{...},  "Jk2":{...}, ...  } ## N Kvpair (Value As Jo)
{ "Jk1":[...],  "Jk2":{...}, ...  } ## N Kvpair (Value As Jo | Ja | Js)
{ "foo":{...},  "bar":[...], "foo01":"Fooret", ... } N Kvpair (Value As Jo | Ja | Js)
```

# Define a json:array
```json
// generic array
[ ... ]

// example
[ ... , ... , ... ]
[ {...}, {...}, {...}, ... ] ## Item as Object
[ "...", "...", "...", ... ] ## Item as String
[{...}, [...], "foo01", 345, { ... }, ... ] ## Item of Any type
```

- Json:array are often Array of Json:oject with the same Kvpair.
```json
// example

[
  {"Name":"Name01", "Description":"Desc01"}
  {"Name":"Name02", "Description":"Desc02"}
  ...
  {"Name":"Name0n", "Description":"Desc0n"}
]
```
# Define a json:scalar

```json
// generic string scalar
" ... "

// example
"Car"
"232"
"azerty"
"Apple Orange Lemon ..." ## String as 1 sequence of List of Fruit
"{...} {...} {...} ..."  ## String as 1 Sequence of Json.Object
"[...] [...] [...] ..."  ## String as 1 sequence of Json.Array
"[ ... ]"                ## String as 1 Array

// number scalar
345
-435
null

// boolean scalar
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


