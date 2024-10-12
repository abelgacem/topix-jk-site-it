---
draft : true
mx:  
---


# Usecase
```ini
# ignore everything
/*
# ignore file .cache
/*/*/.cache
# ignore folder "__pycache__"
**/__pycache__/

# except
!.gitignore
!requirements.txt
!mx*
```
# Usecase
## ignore file named "README"
```ini
# in root folder
/README
# in any folder
README
# in folder /mydoc
/mydoc/README
```
## ignore file named ".DS_Store"
```ini
# in any folder
.DS_Store
```

## ignore folder named "\_\_pycache\_\_"
```ini
## in root folder
/__pycache__/
## in any folder
__pycache__/
**/__pycache__/ or __pycache__/ ? (put the 2 syntax to be sure)
```
# Usecase
```ini
# ignore every files and folders
*
# ignore file:*.md in any folder
*.md
# do not ignore file 'README.md' in any folder
!README.md
```
