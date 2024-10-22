# [&larr;][Repo_Readme]Domain > Computer Science > Kubernetes > Howto > manage > Toleration

[//]: #(Reference)
[Repo_Readme]:      ../list/object_list.md

[Taint_Whatis]:       ../whatis/taint_whatis.md
[Taint_Howto]:        ../howto/taint_howto.md
[Toleration_Whatis]:  ../whatis/taint_whatis.md

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Toleration|Prerequisit|[Definition][Toleration_Whatis]|
|Taint|Prerequisit|[Definition][Taint_Whatis], [Howto][Taint_Howto]|
<br>

# Use Taint in Toleration


## Method
```yaml
tolerations:
- key:       ${lKVPAIR_KEY}
  operator:  "Equal"
  value:     ${lKVPAIR_VALUE}
  effect:    ${lKVPAIR_TYPE}
```
## Method
```yaml
tolerations:
- key:      ${lKVPAIR_KEY}
  operator: "Exists"
  effect:   ${lKVPAIR_TYPE}
```

## Method
```yaml
# default value for operator is Equal
# A toleration "matches" a taint if keys and effects are the same and 
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    env: test
spec:
  containers:
  - name: nginx
    image: nginx
    imagePullPolicy: IfNotPresent
  tolerations:
  - key: "example-key"
    operator: "Exists"
    effect: "NoSchedule"
```
