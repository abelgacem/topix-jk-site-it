<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

```bash
#!/bin/bash

Jf="/Users/Max/Documents/MxRoot/MacRepo/omt/dockerfile/_Test/al/listimage.json"

function do_method {
# Msg="The Input.Json"
# Action="jq '.' ${Jf}"
# echo -e "$Msg\n$Action"; eval $Action

# Msg="Seq of Item (of Input) - Item.Type = Strig, Array, Object, Number, ..."
# Action="jq '. | .[]' ${Jf}"
# echo -e "$Msg\n$Action"; eval $Action

# Msg="Seq of Item.Inner recursively"
# Action="jq '..' ${Jf}"
# echo -e "$Msg\n$Action"; eval $Action

Msg="Seq of Object.Item.Inner recursively"
Action="jq '.. | select(type==\"object\")' ${Jf}"
echo -e "$Msg\n$Action"; eval $Action

Msg="Seq of Array.Item.Inner recursively"
Action="jq '.. | select(type==\"array\")' ${Jf}"
echo -e "$Msg\n$Action"; eval $Action

return 
Msg="Seq of All Object having Key.Image = Image.Intermediate 1"
Action="jq '.. | select(type==\"object\")| select(.Image)|select(.Os|not)' ${Jf}"
echo -e "$Msg\n$Action"; eval $Action

Msg="Seq of All Object having Key.Image = Image.Intermediate 2"
Action="jq '.. | select(type==\"object\")| select(.Image)|select(.Os|not)|.Name' ${Jf}"
echo -e "$Msg\n$Action"; eval $Action

Msg="Seq of All Object not having Key.Image = Image.Final"
Action="jq '.. | select(type==\"object\")| select(.Image|not)' ${Jf}"
echo -e "$Msg\n$Action"; eval $Action

Msg="Seq of Item (of Input) - Item.Type = only List (Array or Object)"
Action="jq '.[] | select(type==\"array\" or type==\"object\")' ${Jf}"
echo -e "$Msg\n$Action"; eval $Action

Msg="Seq of Item  (of Input) - Item =  Only Array"
Action="jq '.[] | select(type==\"array\")' ${Jf}"
echo -e "$Msg\n$Action"; eval $Action

Msg="Seq of Item - Array.Item only"
Action="jq '.[] | select(type==\"array\") | .[]' ${Jf}"
echo -e "$Msg\n$Action"; eval $Action

return 
Msg="Seq of Item - Item = only Scalar(String or Boolean or Number)"
Action="jq '.[] | select(type!=\"array\" and type!=\"object\")' ${Jf}"
echo -e "$Msg\n$Action"; eval $Action


Msg="Array.length"
Action="jq '.[] | select(type==\"array\")| length' ${Jf}"
echo -e "$Msg\n$Action"; eval $Action

Msg="Item.0 - Only for Array"
Action="jq '.[] | select(type==\"array\")| .[0]' ${Jf}"
echo -e "$Msg\n$Action"; eval $Action

Msg="Item.0 to Item.2 - Only for String and Char - Ignore other type"
Action="jq '.[] | .[0:3]?' ${Jf}"
echo -e "$Msg\n$Action"; eval $Action
}
```