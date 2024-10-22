# Def
- Synonym > Jq.Instruction
- ( Produce | Return ) 1 Output based on the
  - Input
  - Instruction
- Built from Jq.Dsl  
# Example
        'Hello'
        '42'
        '.'
        '.[]'
        '. | .[]'
        'select(type=="string")
# List

| Instruction | Input  | Output.Type|Output.Mb | Error If | Comment
|-----------|:-----|:-------|:------|:------|:--------|
|.          | Any           |  Any | Input
|.[ ]       | List          |  Seq| Of Item | Bad Input.Type |
| .[ ]?     | Scalar        | | &empty;
| .[n]      | Array         |  Any| Item n | Bad Input.Type |null if !Exist, n  |
| .[n]?     | !Array        |  |&empty; | 
| Scalar    | Any           |  Scalar| Instruction
| length    | List          |  Scalar|Nbof Item
| Keys      | Object        |  Array| Of Key
| flattern       | -     |  -| -
| map(filter)    | Array          | Any |Filtered Item
| select(filter returning boolean)    | -          | | Item for wich Filter return True
| IN(Val01, Val02, ...)  | -          |  |True if Item = Valuexx
