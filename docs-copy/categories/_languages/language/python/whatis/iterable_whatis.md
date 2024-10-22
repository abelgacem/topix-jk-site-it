<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Howto]:    ../howto/iterable_howto.md

[File_Whatis]:  ../whatis/file_whatis.md 

# [&larr;][Repo_Readme]Domain > Language > Python > Whatis > iterable ([Howto][Item_Howto])



# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|file||||[definition][File_Whatis]||
<br>

# Type
## list
```python
# list@std
lITERABLE = [1, 2, 3, 4, 5]

# list@csv
lITERABLE = [
    ['Name', 'Age', 'City'],
    ['John', 25, 'New York'],
    ['Jane', 30, 'San Francisco'],
    ['Doe', 22, 'Chicago']
]
```

## tuple
```python
lITERABLE = (1, 2, 3, 4, 5)
```

## string
```python
lITERABLE = "Hello, World!"
```

## set
```python
lITERABLE = {1, 2, 3, 4, 5}
```

## dic
```python
lITERABLE = {'a': 1, 'b': 2, 'c': 3}
```

## generator
```python
def my_generator():
    yield 1
    yield 2
    yield 3

gen = my_generator()
```

## range
```python
lITERABLE = range(1, 6)
```

## file
```python
with open('example.txt', 'r') as file:
    for line in file:
        print(line)
```

