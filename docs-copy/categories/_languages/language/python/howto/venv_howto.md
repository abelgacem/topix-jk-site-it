<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>


[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Item_Whatis]:   ../whatis/venv_whatis.md

[Venv_Whatis]:    ../whatis/venv_whatis.md


# [&larr;][Repo_Readme]Domain > Language > Python > Howto > Venv ([Definition][Item_Whatis])



# Create 1 venv
```bash
# define var
lPYTHON_VERSION_SHORTCUT="38"
lPYTHON_VENV_FOLDER_NAME="pvenv${lPYTHON_VERSION_SHORTCUT}"

## Root folder of all python venv with version above
lVENV_FOLDER_ROOT="/home/lisa/workspace/${lPYTHON_VENV_FOLDER_NAME}"
lVENV_FOLDER_ROOT="/Users/max/wkspc/${lPYTHON_VENV_FOLDER_NAME}"

## name of the project
lVENV_APP_NAME="airflow"
lVENV_APP_NAME="spotify"

# create the venv with the current version of python
python -m venv ${lVENV_FOLDER_ROOT}/${lVENV_APP_NAME}


```
# Create 1 real venv (ie. no dependencies with the OS)
delete dependencies between the venv and the library of python (ie. used to create the venv)
- Create 1 venv
- add a folder containing some std python lib (ie. folder and .py files)
- add that folder to sys.path

# Activate 1 venv
```bash
# cd pvenv and cli
cd ${lVENV_FOLDER_ROOT}/${lVENV_APP_NAME}
. bin/activate

```

# Deactivate 1 venv
```bash
# cd pvenv and cli
cd ${lVENV_FOLDER_ROOT}/${lVENV_APP_NAME}
deactivate
```
