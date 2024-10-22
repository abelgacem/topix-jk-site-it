<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../whatis/file_whatis.md


# [&larr;][Repo_Readme]Domain > Language > Python > Howto > file ([Definition][Item_Whatis])

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

# Read line
## file
```python
# method
with open('example.txt', 'r') as file:
    for line in file:
        print(line)

# method
print('\n'.join([line.strip() for line in open('example.txt', 'r')]))

# method
with open(file_path, 'w') as file:
    file.write(content)

# method
open("output.txt", 'w').write(f"This is the content of the variable {content}")

```



