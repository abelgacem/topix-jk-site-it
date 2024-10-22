<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Operator_List]:    ../whatis/task_whatis.md

# [&larr;][Repo_Readme]Airflow > What is > Operator
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Operator|see|[Definition][Operator_List]

# Category

```mermaid
graph RL;
 Core-->id00(Operator);    
 id01(Not core)-->id00;    
 id02(Third Party)-->id01;    
 id03(Custom)-->id01;    
```
# Category
```mermaid
graph TB;
 id01(Action)-->id00(Operator);    
 id02(TransfertData)-->id00;    
 id03(Sensor)-->id00;    
 
 id11(fonction)-->id01;    
 id12(Python)-->id11;    
 id13(Bash)-->id11;    
 id14(Control)-->id01;    
 id15(IfThenElse)-->id14;    

 id21(CloudToCloud)-->id02;    
 id22(SftpToSftp)-->id02;    
 id23(SgbdToSgbd)-->id02;    
 id24(SgbdToFs)-->id02;    
 id25(FsToFs)-->id02;    

 id31(Sensor)-->id03;    
```

- Sensor = Trigger when 1 eve is triggered. Eve can be
  - end of 1 task execution of another Dag
  - 1 file just exist in 1 folder


# Definition
- denotes, 1 type of code

# Toknow
 - un operator est tout simplement une classe Python héritant de BaseOperator
 - Lorsque qu'une tache est appelée, la fonction execute() de l’operator est exécutée.
 - un *operator* instancié devient donc une *task*
 - a custom operator has a method:execute()