<head><link rel="stylesheet" href="../../../md.css"/></head>


[//]: #(Reference)
[Repo_Readme]:       ../list/object_list.md
[Scheduler_Whatis]:  ../whatis/scheduler_whatis.md

# [&larr;][Repo_Readme]Airflow > Howto > scheduler
# List of references
|Name|Learning Path|Seq|View|Description|
|-|-|-|-|-|
|Scheduler||pre|[Definition][Scheduler_Whatis]|-|


# define the timezone
```python
from pendulum                 import timezone
sDAG_TZ         = timezone('Europe/Paris')

```

# define scheduler'stimezone
