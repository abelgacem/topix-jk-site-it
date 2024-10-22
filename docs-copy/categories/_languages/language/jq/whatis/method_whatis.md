# Terminologie
## Syntax
      foo/0 means function named **foo** with no argument
      bar/2 means function named **bar** with 2 argument
      bar/2 = bar(a;b)

# List
- with_entries()
- contains()
- map()
- map_value()
- getpath()
- type
# todo
- foreach E as $X (.; .; R)
- same as  E as $X | R 

# Example
     muladd is define like this > def muladd(m; a): (. * m) + a;
     muladd(5; 1) does the obvious thing 
     muladd(.+1; ./2) = (. * (. + 1)) + (./2). 

# Example


# List of references
- Whatis [Json](../../json/whatis/json_whatis.md)
- Whatis [Dsl](../../dsl/whatis/dsl_whatis.md)
- Whatis [Jq.Filter](filter_whatis.md)
- Parent [Folder](../Readme.md)
