<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

# [&larr;][Back_Readme] Howto > Jq

# Return The result of 1 Filter apply to the Input
        Expr
# Apply 1 Pipeline of Filter to 1 Input
        Expr01 | Expr02
# Apply N Filter to 1 Input and return the result in Sequence
        Expr01 , Expr02
# Get the Input
        .
        [.]  ## In 1 Array  (Array Constructor)
        {.}  ## In 1 Object (Object Constructor)
# Get sequence of all Item of the Input (if exists else nothing)
## Syntax
        .[]?
## Semantic
- Get the Item if (Oject or Array) else Return Nothing
## Semantic of **.[]**
- Transform Object to Sequence of Object.Item
- Transform Array to Sequence of Array.Item
- Transform String  to **null**
- Transform Number  to **null**
- Transform Boolean to **null**


# Get the Input.Item Recursively
## Syntax
        ..
## Semantic
- Get the Input
- For eah Input.Key   Get The Item
- For eah Input.Array Get The Item
- For eah Item        Get the Array.Item or Object.Item
- and so on

# Get Item of key .xxx (if exists else nothing)
        .["xxx"?]
        .xxx?
## Semantic
- Get the Value of key xxx if (Oject and Key exist) else (Return Nothing)

# Get Input that have key .xxx (if exists else nothing)
        select(.xxx?)

# Get Item of key .xxx.yyy (if exists else nothing)
        .xxx.yyy?
## Semantic
- Get the Value of key xxx.yyy if (Oject and Key exist) else (Return Nothing)


# List all Object.Key
## In 1 array [of String]
        keys

        [ "Child", "Conf", "Desc", "Os", "Package", "User" ]
## As 1 sequence
        keys | .[]

        "Child" "Conf" "Desc" "Os" "Package" "User"
## Semantic of **keys**
- Map Object to Sequence of Object.Key

# Get Object from 1 "Sequence of Object" based on Object.Key

        .[] | select(.Child != null) # Retrieve Object having key named "Child"
        .[] | select(.Child)    

        .[] | select(.Child == null) # Retrieve Object Not having = Child
        .[] | select(.Child|not)     # Retrieve Object Not having = Child


# Apply To each Item
        .[] | map(type)         $File    # Display 1 Json.Object.Inner.Key.Value


# Create Object
## Syntax
    { ... }

## Example
    echo {"user": {"id": 1, "name": "Cameron"}} | \
    { name: .user.name } 
    # Ouput --> { "name": "Cameron" }

## Shorthand 
    { user,list } Shorhand for { user:.user, list:.list}

## Keys as variable
    { (.user):.list }

## Sequence of Object
    Input  = { "user":"stedolan","titles":["JQ Primer", "More JQ"] } 
    Filter = {user, title: .titles[]}
    Output = 
       √ {user:"stedolan", title: "JQ Primer"}
       √ {user:"stedolan", title: ""More JQ""}
    
# Create Array
## Syntax
    [...]

## Example
   [1,2,3]


# Get Array of Type
    . | .[] | type


# The File
        {
        "Os":"Al",
        "Desc":"Os.Al",
        "User":"root",
        "Package":"1",
        "Conf":"1",
        "Child":{
                "Backup":{
                "Desc":"Tool.For.Docker.Volume.Backup",
                "Conf":"1",
                "Package":"1"
                },
                "Java":{
                "Desc":"App.Java",
                "Package":"1",
                "Conf":"1",
                "Child":{
                        "Jenkins":{
                        "Desc":"App.Portal.Jenkins",
                        "User":"jenkins",
                        "Package":"1",
                        "Conf":"1"
                        }
                }    
                },
                "Nginx":{
                "Desc":"Server.Nginx",
                "User":"max",
                "Package":"1",
                "Conf":"1",
                "Child":{
                        "Omt":{
                        "Desc":"App.Portal.Omt",
                        "User":"Y",
                        "Package":"1",
                        "Conf":"1"
                        },
                        "Pma":{
                        "Desc":"App.Portal.Pma",
                        "Package":"1",
                        "Conf":"1"
                        }
                }
                },
                "Fpm":{
                "Desc":"Server.Phpfpm",
                "Package":"1",
                "Conf":"1",
                "Child":{
                        "Pma":{
                        "Package":"1",
                        "Conf":"1"
                        }
                }
                },    
                "Maria":{
                "Desc":"Server.Mariadb",
                "Package":"1",
                "Conf":"1"
                },
                "Tool":{
                "Desc":"Tool.For.Integrator",
                "Package":"",
                "Conf":"1"
                },
                "Jenkins":{
                "Desc":"App.Portal.Jenkins",
                "Package":"1",
                "Conf":"1"
                },
                "Omt":{
                "Desc":"App.Portal.Omt",
                "Package":"1",
                "Conf":"1"
                }
        }    



# Concatenate Field
```bash 
#!/bin/bash
ImageTagJson="{\"Repository\":\"${DockerRepositoryName}\", \"Tag\":{\"Prefix\":\"${PrefixImage}\",\"Noun\":\"${ImageNoun}\"}}"
export ImageTagString=$(echo ${ImageTagJson} | jq -r '.Repository +":"+ .Tag.Prefix +"_"+ .Tag.Noun')
```

[//]: #(Reference)
[Back_Readme]:            ./readme.md              "Home > Repository.Git"

