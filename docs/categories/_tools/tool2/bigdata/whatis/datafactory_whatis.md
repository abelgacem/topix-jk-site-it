# [&larr;][Repo_Readme]Domain > Computer Science > Big Data > What is > Yaml

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

# Synonym / Whatfor
- Manifest
- Specification
- Config
- Manifest

# Example
```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: hello
spec:
  schedule: "* * * * *"
  jobTemplate:
    spec: ...
```

# Example
```yaml
apiVersion: v1
kind: Endpoints
metadata:
  # the name here should match the name of the Service
  name: my-service
subsets:
```

# Example

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app.kubernetes.io/name: MyApp
  ports: 
```

# Minimum
```yaml
apiVersion:
kind:
metadata:
  name:
spec:  
```


# Example
```yaml
# This is an excerpt
apiVersion: apps/v1
kind: StatefulSet
metadata:
  labels:
    app.kubernetes.io/name: mysql
    app.kubernetes.io/instance: mysql-abcxzy
    app.kubernetes.io/version: "5.7.21"
    app.kubernetes.io/component: database
    app.kubernetes.io/part-of: wordpress
    app.kubernetes.io/managed-by: helm
```