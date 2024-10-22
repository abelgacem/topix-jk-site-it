<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../whatis/class_whatis.md


# [&larr;][Repo_Readme]Domain > Language > Python > Howto > class ([Definition][Item_Whatis])

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

# Define
## type
- **self** refers to the instance from inside a method@instance
```python
# definition
class MyClass:
    def instance_method(self,instancevar):
        self.instancevar = instancevar

# instanciation
ins01=MyClass(42)
ins01=MyClass("hello")

# display
print(obj1.instancevar)  # Output: 42
print(obj2.instancevar)  # Output: hello

```

```python
class MyClass:
    def instance_method(self):
        print("This is a method@instance.")
```

## type
- **cls** refers to the class from inside a method@class
```python
class MyClass:
    class_variable = "This is a variable@class"

    @classmethod
    def class_method(cls):
        print("This is a method@class.")
        print("Accessing variable@class:", cls.class_variable)
```

## Example
```python
class MyClass:
    # var@class
    shared_variable = None  

    # purpose initialized va@class
    @classmethod
    def init(cls, value):
        cls.shared_variable = value

# initialize var@class
MyClass.init(42)

# access thru method@class
print(MyClass.shared_variable)  # Output: 42

# access thru method@instance
obj = MyClass()
print(obj.shared_variable)     # Output: 42
```

## Example
- Define a class
```python
import inspect

class KVpair:
    # var@class
    cAIRFLOW_FQDN    = "airflow.batch.sit.ccf.staging.cloud.mymoneybank.fr"
    cENV_AWS_ACCOUNT = "371239356066"
    cMODULE_NAME     = vars()['__module__']
    cCLASS_NAME      = __qualname__

    @classmethod
    def get(cls, name):
        lMETHOD_NAME = inspect.stack()[0][3]
        map = {
        if 'env_name'  :cls.AIRFLOW_FQDN.split('.')[2]
        if 'env_tenant':cls.AIRFLOW_FQDN.split('.')[3]
        if 'env_type'  :cls.AIRFLOW_FQDN.split('.')[4]
        if 'env_aws'   :cls.ENV_AWS_ACCOUNT
        }
       if key in map : return map[key]
       else: raise KeyError(f"Key '{key}' does not exist in > {cls.cMODULE_NAME}:{cls.cCLASS_NAME}:{lMETHOD_NAME}")

# usage:
print(f"env_name: {KVpair.get('env_name')}")
print(f"tenant:   {KVpair.get('tenant')}")
print(f"env_type: {KVpair.get('env_type')}")
print(f"env_aws:  {KVpair.get('env_aws')}")
```

# get attributes
- use of method **vars**
```python
# define a class
Myclass: ...

# create an instance
MyInstance  = Myclass(...)

# get instance:attributes
print(f'instance att: {vars(MyInstance)}')

# get class:attributes
print(f'instance att: {vars(MyClass)}')
vars(cls).keys()

# get instance:attributes
print(f'')
```
# Introspection
```python
# class name from a class
__qualname__
# class name from a method@class
cls.__name__
# class name from a method@instance
self.__class__.__name__
# class name from an instance
MyInstance.__class__.__name__
# class name of super from an instance
self.__class__.__base__.__name__
```

# todo
```python
class MyClass:
    @classmethod
    def create_instance(cls, value):
        instance = cls(value)
        # Do additional initialization if needed
        return instance

    def __init__(self, value):
        self.value = value

# Creating an instance using the class method
obj = MyClass.create_instance(42)

print(obj.value)  # Output: 42
```

```python
class MyClass:
    def __init__(self, var1=None, var2=None, var3=None):
        self.var1 = var1
        self.var2 = var2
        self.var3 = var3

# Create instances with different sets of variables
obj1 = MyClass(1)
obj2 = MyClass(1, 2)
obj3 = MyClass(1, 2, 3)

# Access the variables
print(obj1.var1, obj1.var2, obj1.var3)  # Output: 1 None None
print(obj2.var1, obj2.var2, obj2.var3)  # Output: 1 2 None
print(obj3.var1, obj3.var2, obj3.var3)  # Output: 1 2 3
```
```python
class MyClass:
    def __init__(self, var1, var2, var3=None):
        self.var1 = var1
        self.var2 = var2
        self.var3 = var3

# Create instances with different numbers of variables
obj1 = MyClass(1, 2)
obj2 = MyClass(3, 4, 5)

# Accessing instance attributes
print(obj1.var1, obj1.var2, obj1.var3)  # Output: 1 2 None
print(obj2.var1, obj2.var2, obj2.var3)  # Output: 3 4 5
```

```python
class MyClass:
    def __init__(self, var1=None, var2=None, var3=None):
        self.var1 = var1
        self.var2 = var2
        self.var3 = var3

# Create an instance with named variables in a different order
obj = MyClass(var3=3, var1=1, var2=2)

# Access the variables
print(obj.var1, obj.var2, obj.var3)  # Output: 1 2 3
```

```python
class MyClass:
    def __init__(self, var1=None, var2=None, var3=None):
        self.var1 = var1
        self.var2 = var2
        self.var3 = var3

    @classmethod
    def create_instance(cls, var1, var2, var3):
        # Additional logic if needed
        return cls(var1=var1, var2=var2, var3=var3)

# Create instances using the class method
obj1 = MyClass.create_instance(1, 2, 3)
obj2 = MyClass.create_instance(var1=4, var2=5, var3=6)

# Access the variables
print(obj1.var1, obj1.var2, obj1.var3)  # Output: 1 2 3
print(obj2.var1, obj2.var2, obj2.var3)  # Output: 4 5 6
```
