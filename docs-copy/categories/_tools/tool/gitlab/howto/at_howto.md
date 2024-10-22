# Create Access Token
- UI > Gitlab > User:Icon > Preferences > Access Tokens
  - Provide Token:Name that
    - model Authentication
    - is 1 name
  - Select Scope (e.g api, read_user, ... ) that
    - model Authorization
- Click: Create personal access token  
- Store the returned value that denote 1 pwd in 1 safe place

# Use Access Token
## To clone 1 repository
```bash
lGIT_AT_VALUE="glpat-jdggbbn5tg/+=6§('IU"
# Possible value can be DNS or IP (e.g "git.capgemini.com", "100.34.87.243")
lGIT_REPO_DNSORIP="gitlab.com"
lGIT_REPO_PATH="project/util/repo"
lGIT_REPO_NAME="ansible"

git clone https://xxx:${lGIT_AT_VALUE}@${lGIT_REPO_DNSORIP}/${lGIT_REPO_PATH}/${lGIT_REPO_NAME}.git  
```
## To login to 1 repository@(gitlab, docker)
```bash
lGIT_AT_NAME="MyAccessTokenName"
lGIT_AT_VALUE="glpat-jdggbbn5tg/+=6§('IU"
lDOCKER_LOGIN_USER="${lGIT_AT_NAME}"
lDOCKER_LOGIN_PWD="${lGIT_AT_VALUE}"
lDOCKER_REGISTRY="registry.ibm.com"

docker login --username ${lDOCKER_LOGIN_USER}  --password ${lDOCKER_LOGIN_PWD} ${lDOCKER_REGISTRY}
```
