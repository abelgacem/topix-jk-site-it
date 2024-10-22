# Def
Synonym
- Jq.Instruction
- Jq.Expression

( Produce | Return ) 1 Output based on the
  - Input
  - Instruction
- Built from Jq.Dsl  
# Toknow
## Expression
- The input to 1 Jq.Expr can be referred to explicitly as **.**
- The outputs of 1 Jq.Expr is 1 Jq.Item ... that can be piped to another Jq.Expr
## Operator
Some Method have [shorthand](../whatis/shorthand_whatis.md)

        . + 1 = 1 + . = _plus(.;1) ## _plus/2 is 1 Method
     
# Example
        'Hello'
        '42'
        '.'
        '.[]'
        '. | .[]'
        'select(type=="string")

# Combine Filter
## Sequence Filter
Return
- Seq of output of each Filter for the Input

      'Filter01, Filter02'
## Pipe Filter
Return
- The input through the Pipeline of Filter

      Filter01 | Filter02

# Type
- Boolean
  - Return 1 Boolean

# List
## Other
| Instruction | Action           | Input.Type    | Output.Type| Output | Error If | Comment| 
|:--|----|:--|:--|:--|:--|--|
|.      |select Input      | Any      | Any      |  Input | | | |
|.[ ]   |map to Seq  | List     | Sequence | Of Item | Bad Input.Type | |
| .[ ]? | |                | Scalar   |          | &empty;| | |
| Keys    | Get Key |              | List   | Array    |  Of Key| |Order by Key |
| .[n] | Get Item|                  | Array    | Any      | Item of key n | Bad Input.Type |- null if !Exist, - n &isin; &integers;|
| .[n]? |  |                | !Array   | &empty;  | | |
| .xxx | Get Item |                 | Object   | Any      | Item of Key xxx | Bad Input.Type |- null if !Exist, - n &isin; &integers;|
| .xxx?  |  |               | !Object   | &empty;  | | |
| .[n:m] | Get Item |               | Array    | Any      |Item n to Item m |Bad Input.Type | **[]** if empty|
| .[n:m]  |Get Item  |              | String   | Any      |Char n to Char m |Bad Input.Type | **""** if empty|
| Scalar  | Nop |              | Any      |          |  Scalar| | |
| length  | Get Length|              | Any     | Scalar   |  Nb of Item    | | |
| Keys_unsorted | Get Key |        | Object   | Array    |  Of Key| |Not Ordered |
| flattern   | |           | List     |          |  |
| map(filter) | Apply Filter|          | Array    | Array    | of Filtered Item| | |
| map_values(filter) |Apply Filter |   | Object   | Object   | of Filtered Item| | |
| select(Filter.Boolean)| Filter Item | | Any      | Any      |  Item for wich Filter return True| | |
| + | | | Any      | Any      |  Concatenate|Operand are different | |
| * | | | Any      | Any      |  Concatenate.Recursive|Operand are different | |
| / | | | String   | Array    |  Split String | |
| * | | | String   | Sequence |  Split String | |
| to_entries | | Object| Array   | Array |  Split String | |


## Filter.Boolean
| Instruction           | Input    | Output.Type| Output | Error If | Comment| 
|--|:--|:--|:--|:--|--|
| IN(Val01, Val02, ...) | List  |  | True if Item = Valuexx| | |
| IN(Val01, Val02, ...) | Object  |  | True if Item = Valuexx| | |
| IN(Val01, Val02, ...) | Array  |  | True if Item = Valuexx| | |
| has(Key) | List       |       |  True if Key Exist|  | |

# List of references
|Type|Name|
|--|--|
|Readme|[Parent][Parent_Folder_Readme]

[//]: #(Reference.Readme)
[Parent_Folder_Readme]:       ../readme.md        
