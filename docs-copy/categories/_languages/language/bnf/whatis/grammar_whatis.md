<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md

[Alphahet_Whatis]:  ../whatis/alphabet_whatis.md
[Language_Whatis]:  ../whatis/language_whatis.md
[Symbol_Whatis]:    ../whatis/symbol_whatis.md
[Word_Whatis]:      ../whatis/word_whatis.md
[Tuple_Whatis]:     ../../theory_set/whatis/tuple_whatis.md


# [&larr;][Repo_Readme]Math > Language theory > What is > 1 Grammar




# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|symbol||||[definition][Symbol_Whatis]
|word||||[definition][Word_Whatis]
|language||||[definition][Language_Whatis]
|alphahet||||[definition][Alphahet_Whatis]
<br>




# Definition
- (infered) defined 1 language
- deal with the syntax not the semantic
- is defined by a 4-tuple 
# Member
```mermaid
graph BT;
 id01(set)-->id00(Object);    
 id07(alphabet)-->id01;    
 id03(T)-->id07;    
 id04(NT)-->id01;    
 id05(PR)-->id01;    
 id06(SB)-->id01;    
 ```

|Name|denote|description|Comment
|-|-|-|-|
|$T$|alphabet|the *alphabet* of the *Language*|also named N (ie. 1 set of $TS$)
|$NT$|set|the syntaxical categorie of the *language*|also named M (ie. 1 set of $NTS$)
|$PR$|set|The production rules of the *language*|also named P (ie. 1 set of $M$)
|$SB$|set|one [start] symbol in $NT$|also named *SS* (ie. 1 element of $M$)



## Hypothèse

## Conclusion

# Toknow
- Syntax comes before semantic

# Todo
- context free grammar
- grammar non contextuelle
- abstarct syntax tree
- concrete syntax tree
- lhs: left hand side
- rhs: right hand side