<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md

[Tuple_Whatis]:          ../../theory_set/whatis/tuple_whatis.md
[Symbol_Whatis]:         ../whatis/symbol_whatis.md
[Concatenation_Whatis]:  ../whatis/concat_whatis.md


# [&larr;][Repo_Readme]Math > Language theory > What is > 1 Word




# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|tuple|-|-|-|[definition][Tuple_Whatis]&uarr;|-|
|symbol|-|-|-|[definition][Symbol_Whatis]|-|
|concatenation||||[definition][Concatenation_Whatis]|
<br>




# Definition
- is one **n-tuple** [of *symbols*] 
- has 1 standart representation

## Hypothesis
- $w$ is 1 word (ie. 1 **n-tuple** of *symbols*)




## Conclusion

Definition of well known objects and their representations/notations derived from the hypothesis

|Syntax / Notation|Denote|Is
|-|-|-|
|$w$|an element|an element of the set $A^*$|
|$\|w\|$|number|the number of *symbol* in $w$|
|$\|w\|_\sigma$|number|the occurence of *symbol* $\sigma$  in *word* $w$|
|$\varepsilon$|word|<li>the empty word</li><li>1 *word* with 0 *symbol*</li>|
<br>

|axiome|||||
|-|-|-|-|-|
||$w$|$\in$|$A^*$|
<br>

#  Operation
- concatenation
#  Type
- [Not]Empty
#  Representation
- one *word* is [usually] syntactically represented by one sequence of its *symbol*
# Example
## Hypothesis
- Alphabet $=\Sigma=\{0,1\}$
## Conclusion

|$word$|$\|word\|$|
|-|-|
|$w=01$|2
|$w=0111$|4
|$w=000$|3
|$w=1$|1
|$w=1111$|4
|$w=1010$|4
|$w=\epsilon$|0