---
---

## Mermaid

### Example
```mermaid
graph LR
    A --- B
    B-->C[fa:fa-ban forbidden]
    B-->D(fa:fa-spinner);
```

### Example

```mermaid
graph LR
    fa:fa-check-->fa:fa-coffee
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;    
```


```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

### Example
```mermaid
sequenceDiagram
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```

```mermaid
sequenceDiagram

Browser->>Alb:send request on :443
Alb->TargetPool:send request on :8080
TargetPool->VmX:send request on :8080
VmX->Vmx_CFront_Apache:send request on :8080
Vmx_CFront_Apache->Vmx_CBack_Node:send request on :3000
Vmx_CBack_Node<-->Rds:communicate
Vmx_CBack_Node->Vmx_CFront_Apache: send response
Vmx_CFront_Apache-->Browser:send response


note over Browser,Vmx_CFront_Apache:React Code 
```



### Example

```mermaid
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
```

```mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
```

### Example

```mermaid
gitGraph:
options
{
    "nodeSpacing": 150,
    "nodeRadius": 10
}
end
commit
branch newbranch
checkout newbranch
commit
commit
checkout master
commit
commit
merge newbranch
```

# List of references
- Vscode > extension > Mermaid
- https://mermaid-js.github.io/mermaid/#/