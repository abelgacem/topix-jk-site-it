<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../whatis/iterable_whatis.md


# [&larr;][Repo_Readme]Domain > Language > Python > Howto > iterable ([Definition][Item_Whatis])

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>


# reference 1 iterable
```python
# define var
lITERABLE = [1, 2, 3, 4, 5]
lITERABLE = (1, 2, 3, 4, 5)
lITERABLE = "Hello, World!"
lITERABLE = {1, 2, 3, 4, 5}
lITERABLE = {'a': 1, 'b': 2, 'c': 3}
# reference it - chage to lITERABLE is reflected in lPOINTER
lPOINTER=lITERABLE
```

# copy 
```python
# define var
lITERABLE = sys.path
lITERABLE = [1, 2, 3, 4, 5]
lITERABLE = (1, 2, 3, 4, 5)
lITERABLE = "Hello, World!"
lITERABLE = {1, 2, 3, 4, 5}
lITERABLE = {'a': 1, 'b': 2, 'c': 3}

# chage to lITERABLE is reflected in lOTHERITER
## method
lOTHERITER=list(lITERABLE)
## method
import copy
lOTHERITER=copy.copy(lITERABLE)

# for nested iterable. iterable containing iterable 
import copy
lITERABLE = [[1, 2], [3, 4]]
copied_iterable = copy.deepcopy(lITERABLE)


```
# Nb of Item
```python
# define var
lITERABLE = [1, 2, 3, 4, 5]
lITERABLE = (1, 2, 3, 4, 5)
lITERABLE = "Hello, World!"
lITERABLE = {1, 2, 3, 4, 5}
lITERABLE = {'a': 1, 'b': 2, 'c': 3}

# display
print("Number of items:", len(lITERABLEt))
print("Number of items: {len(lITERABLE)})
``` 
# pretty display
```python
# Method
my_list = [10, 20, 30, 40, 50]
print("Contents of my_list:")
for value in my_list:
    print(value)

# Method - one line
my_list = [10, 20, 30, 40, 50]
print("Contents of my_list:\n" + '\n'.join(map(str, my_list)))
print("Contents of my_list:\n" + '\n'.join(my_list))

# example
print("sys.path content"); [print(path) for path in sys.path]
print("sys.pathcontent:    ", '\n'.join(sys.path))
print("sys.path content:\n" + '\n'.join(map(str, sys.path)))
```

# apply a method to 1 iterable
```python
lITERABLE = [1, 2, 3, 4, 5]
squared = map(lambda x: x**2, lITERABLE)
```


# agregate iterable
```python
lITERABLE_01 = ['Alice', 'Bob', 'Charlie']
lITERABLE_02 = [25, 30, 35]
for name, age in zip(lITERABLE_01, lITERABLE_02):
    print(name, age)
```

# loop thru iterable
```python
# example
my_list = [10, 20, 30, 40, 50]
for index, value in enumerate(my_list):
    print(index, value)

# example
my_dict = {'a': 1, 'b': 2, 'c': 3}
for index, (key, value) in enumerate(my_dict.items()):
    print(index, key, value)

```

# Todo
```python
lLIST_FILE_TIMESTAMP = [item.replace("yyyymmdd", lFILE_TIMESTAMP) for item in lLIST_FILE]

# lLIST_FILE[:]       = [item.replace("yyyymmdd", lFILE_TIMESTAMP) for item in lLIST_FILE]
```
