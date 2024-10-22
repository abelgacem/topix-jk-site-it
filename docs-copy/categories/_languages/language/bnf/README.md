<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../../list/language_list.md

[Term_List]:     ./list/term_list.md
[Object_List]:   ./list/object_list.md

# [&larr;][Repo_Readme]Domain > Language > Bnf

# List of topics
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|object||1|pre|[List][Object_List]|
|terminology||||[List][Term_List]|
<br>


# Definition
- Is 1 [mathematical] tool
- one formal notation
- one (meta)grammar
- (allow to | can) create grammar
- can be used to create
  - interpreter
  - compiler

## Char
- : &gt; &lt;

## terminology
- Pr, Ls, Rs, Ts, Nts

### Acronym
||||
|-|-|-|
|Bnf|BNF|**B**ackus **N**aur **F**orm|
|Pr|PR|**p**roduction **r**ule|
|Ls|LS|**l**eft **s**ide|
|Rs|RS|**r**ight **s**ide|
|Ts|TS|**t**erminal **s**ymbol
|Nts|NTS|**n**ot **t**erminal **s**ymbol

## Sentence

||||
|-|-|-|
|pr|member|ls, rs|
|pr|syntax|\<ls\> &rarr; \<rs\>|
|pr|semantic|\<ls\> PERP \<rs\>|
|rs|definition|agregation of **Ts** and **Rs**|

# Other definition
## interpreter
- translate txt from 1 language to another


# Todo

## Process
1. Lexical analysis
1. syntactic analysis (ie. parsing)
1. semantic analysis

### Lexical analysis
- token, lexeme
- reconnaitre 1 combinaison valide de entité (symbole, lemme)
### syntactic analysis (ie. parsing)
- seq of token
- reconnaitre 1 combinaison valide de entité (lexeme, prog)
### semantic analysis
- code objet