# Example
```powershell
- curl --header "PRIVATE-TOKEN: $CI_JOB_TOKEN" \
           --header "Content-Type: application/json" \
           --data '{"content": "'"$(cat .gitlab-ci.yml)"'"}' \
           "https://gitlab.com/api/v4/ci/lint"
```