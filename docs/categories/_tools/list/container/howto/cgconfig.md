---
mx:  
  ref:
    - whatis/cgconfig
---


# restart
```bash
# when configuration file is updated
service cgconfig restart

```
# start
```bash
# via chkconfig - that read file /etc/cgconfig.conf

```
# Mount
```bash
# Genetric
## Define var
lRESOURCE_CONTROLER_LIST="..."
#
mount -t cgroup -o ${lRESOURCE_CONTROLER_LIST} ${lTREE_NAME} /cgroup/${lTREE_NAME}

```

# stop
```bash
service cgconfig stop
```

# Example of Configuration file
## Generic
```ini
mount {
    <controller> = <path>;
    …
}
group <name> {
    # Perm(ission) is optional
    perm {
      task {
        uid = <task user>;
        gid = <task group>;
      }
      admin {
       uid = <admin name>;
       gid = <admin group>;
      }
    }
    # Resource controller
    <controller> {
        <param name> = <param value>;
        …
    }
    …
}
```

## Use case
```ini
# Mount
mount {
    cpuset = /cgroup/cpu;
}
# Group
group daemons/sql {
  # Permission  
  perm {
    task {
        uid = root;
        gid = sqladmin;
    } admin {
        uid = root;
        gid = root;
    }
  } 
  # Resource controller
  cpu {
    cpu.shares = 100;
  }
}
```

This configuration file is equivalent to cli:

```bash
# Define var
lGROUP_NAME="daemons/sql"
lMOUNT_NAME="/cgroup/cpu"
#
mkdir -p                      ${lMOUNT_NAME}/${lGROUP_NAME}
# mount
mount -t cgroup -o cpuset cpu ${lMOUNT_NAME}/${lGROUP_NAME}
# group
chown root:sqladmin ${lMOUNT_NAME}/${lGROUP_NAME}/tasks
chown root:root     ${lMOUNT_NAME}/${lGROUP_NAME}/*
echo 100 >          ${lMOUNT_NAME}/${lGROUP_NAME}/cpu.shares
```

## Use case
```ini
# Mount
mount {
  cpu     = /dev/cgroups/cpu;
  cpuacct = /mnt/cgroups/cpuacct;
  blkio   = /dev/cgroups/blkio;
}
# Group
group hiperf {
  # Permission
  perm {
    task {
      uid = olivier;
      gid = olivier;
    }
    admin {
      uid = root;
      gid = root;
    }
  }
  # Resource controller
  cpu {
    cpu.shares = 1000;
  }
  # Resource controller
  blkio {
    blkio.weight = 500;
  }
}
```

This configuration file is equivalent to cli:


```bash
# Define var
lGROUP_NAME="hiperf"
lMOUNT_NAME_01="/dev/cgroups/cpu"
lMOUNT_NAME_02="/mnt/cgroups/cpuacct"
lMOUNT_NAME_03="/dev/cgroups/blkio"
#
mkdir -p            ${lMOUNT_NAME_XX}/${lGROUP_NAME}
# mount
mount -t cgroup -o cpu     cpu ${lMOUNT_NAME}/${lGROUP_NAME}
mount -t cgroup -o cpuacct cpu ${lMOUNT_NAME}/${lGROUP_NAME}
mount -t cgroup -o cpuset  cpu ${lMOUNT_NAME}/${lGROUP_NAME}
# group
echo 100 >          ${lMOUNT_NAME_XX}/${lGROUP_NAME}/cpu.shares
echo 500 >          ${lMOUNT_NAME_XX}/${lGROUP_NAME}/blkio.weight
```


## Use case
```bash
# Mount
mount {
	cpu = /container;
}
# Group
group ca1 {
  # Permission  
  perm {
    task {
        uid = balbir;
        gid = cgroup;
    }
    admin {
        uid = root;
        gid = cgroup;
    }
  }
  # Resource controller
  cpu {
    cpu.shares = 500;
  }
}
```

This configuration file is equivalent to cli:

```bash
# TODO TODO TODO
mkdir -p /cgroup/cpu/daemons/sql
chown root:root /cgroup/cpu/daemons/sql/*
chown root:sqladmin /cgroup/cpu/daemons/sql/tasks
echo 100 > /cgroup/cpu/daemons/sql/cpu.shares```
```


# Create 1 tree and bind resource controller

|name|type|description|
|-|-|-|
|Tree Name|-|cpu_and_mem|
|List Resource controller|-|cpu, cpuset, cpuacct, memory|

## method
```ini
# via configuration file
mount {
  cpuset  = /cgroup/cpu_and_mem;
  cpu     = /cgroup/cpu_and_mem;
  cpuacct = /cgroup/cpu_and_mem;
  memory  = /cgroup/cpu_and_mem;
}
```

## method
```bash
# via cli
## define var
lTREE_NAME="cpu_and_mem"
lRESOURCE_CONTROLLER_List="cpu, cpuacct, cpuset, memory"
lRESOURCE_CONTROLLER_02="cpu"
lRESOURCE_CONTROLLER_03="cpuacct"
lRESOURCE_CONTROLLER_01="cpuset"
lRESOURCE_CONTROLLER_04="memory"
#
mkdir /cgroup/${lTREE_NAME}
# 
mount -t cgroup -o ${lRESOURCE_CONTROLLER_01} ${lTREE_NAME} /cgroup/${lTREE_NAME}
mount -t cgroup -o ${lRESOURCE_CONTROLLER_02} ${lTREE_NAME} /cgroup/${lTREE_NAME}
mount -t cgroup -o ${lRESOURCE_CONTROLLER_03} ${lTREE_NAME} /cgroup/${lTREE_NAME}
mount -t cgroup -o ${lRESOURCE_CONTROLLER_04} ${lTREE_NAME} /cgroup/${lTREE_NAME}
# Or
mount -t cgroup -o cpu,cpuset,memory cpu_and_mem /cgroup/cpu_and_mem
```






