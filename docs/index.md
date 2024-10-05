---
title: Projects
---

[//]: #(Reference)
[repo_source]: https://github.com/abelgacem/project
[prj_do]:      ./list/do/README
[prj_slotly]:  ./list/slotly/README
[prj_ibshell]: ./list/ibshell/README
[prj_ipshell]: ./list/ipshell/README
[prj_jekyll]:  ./list/jekyll/README
[prj_plearn]:  ./list/plearn/README
[prj_pubme]:   ./list/pubme/README
[prj_topix]:   ./list/topix/README
[prj_music]:   ./list/music/README
[prj_asmat]:   ./list/asmat/README

[prjm_pizza]:      ./list/prjm/pizza/README
[prjm_dentifrice]: ./list/prjm/dentifrice/README
[prjm_senior]:     ./list/prjm/senior/README

# Introduction
This documentation is built and deployed from a [GitHub repository][repo_source].

# {{ site.data.site_name.purpose }}
Documents some IT projects.

# List IT project

|code name|Description|
|-|-|
|[`Do`][prj_do]|{{ site.data.project_description.do_description }}|
|[`Ibshell`][prj_ibshell]|{{ site.data.project_description.ibshell_description }}|
|[`Ipshell`][prj_ipshell]|{{ site.data.project_description.ipshell_description }}|
|[`Slotly`][prj_slotly]|{{ site.data.project_description.slotly_description }}|
|[`Plearn`][prj_plearn]|{{ site.data.project_description.plearn_description }}|
|[`Pubme`][prj_pubme]|{{ site.data.project_description.pubme_description }}|
|[`Jekyll`][prj_jekyll]|{{ site.data.project_description.jekyll_description }}|
|[`Topix`][prj_topix]|{{ site.data.project_description.topix_description }}|
|[`Music`][prj_music]|{{ site.data.project_description.music_description }}|
|[`Asmat`][prj_asmat]|{{ site.data.project_description.asmat_description }}|
||||

<br>

# List Mustaph Project

|code name|Description|
|-|-|
|[`Pizza`][prjm_pizza]|{{ site.data.prj_description.pizza_desc }}|
|[`Senior`][prjm_senior]|{{ site.data.prj_description.senior_desc }}|
|[`Dentifrice`][prjm_dentifrice]|{{ site.data.prj_description.dentifrice_desc }}|
||||


## List of Projects

<ul>
  {% assign list_folders = site.static_files | where_exp: "file", "file.path contains 'docs/list/'" %}
  {% assign unique_folders = list_folders | map: "path" | map: "split: '/'" | map: "first" | uniq %}
  {% for folder in unique_folders %}
    <li>
      <a href="{{ folder }}">{{ folder | capitalize }}</a>
    </li>
  {% endfor %}
</ul>