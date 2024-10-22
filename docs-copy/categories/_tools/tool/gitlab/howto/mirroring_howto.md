


# mirror a private gitlab repo into a public gitlab repo
- create a private gitlab repo
  ```powershell
  lURL_REPO_PRIVATE='https://gitlab.com/glabtit/project/prj-bash/ibshell.git'
  ```
- create an access token for the private gitlab project
  ```powershell
  UI > account > preferences > Access token
  ```
- create a public gitlab repo
  ```powershell
  lURL_REPO_PUBLIC='https://gitlab.com/glabtit/public/ibshell.git'
  ```

- configure mirroring (push) in public repo
  - Browser > `https://gitlab.com/glabtit/public/ibshell/`
  - UI > Settings > Repository > Mirroring repositories > Add new > `https://gitlab.com/glabtit/project/prj-bash/ibshell.git`
  - `Push` says: public repository will receives changes made to the private repository.
