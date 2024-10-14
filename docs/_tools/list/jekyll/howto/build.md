---

---



# build the artifact
```shell
bundle exec jekyll build
```

# build and publish the artifact
- build the artifact (if needed) **and** publish it locally (ie. for test purpose)
```shell
bundle exec jekyll serve --livereload --incremental
```
this CLI. have the following options that can be combined
- `--livereload`  : 
  - Changes to the code trigger a build and deploy
  - not works if changes concerns the file `_config.yml`
- `--incremental` : 
  - Changes are apply incrementally (speed up build)

# 