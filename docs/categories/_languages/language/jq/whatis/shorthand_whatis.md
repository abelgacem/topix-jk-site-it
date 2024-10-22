# Is
- used to simplify the Syntax
# Example

## Standard

|Type|Syntax|Shorthand|
| --|--|--|
|Select|["xxx"]|.xxx|
|Pipe|["Image"] \| .[]|.Image[]|

## with fucntion **select**

|Syntax|Shorthand|
|--|--|
|select(type=="object" or type=="array")|select(.>=[])|
|select(type=="object")|objects|
|select(.Child != null)|select(.Child)|
|select(.Child == null)|select(.Child \| not)|

## Create Object

|Syntax|Shorthand|
|--|--|
|{user: .user, pwd: .pwd}|{user, pwd}|
