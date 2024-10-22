---
mx:
  trail: 1
---



# {{ site.data.name.requirement }}


## {{ site.data.topix.dom }}
- map it to {{ site.data.name.jekyll }} objects.

## Version Control
- The codebase for both the docs and the code is managed with {{site.data.name.git}}.
- The codebase for the docs reflects the documentation model for intuitive organization and access.

## {{site.data.name.framework}} and tool
- The choosen documentation {{site.data.name.framework}} is {{site.data.name.jekyll}}.
- The choosen documentation language ({{site.data.name.ie}} to write the documentation) is {{site.data.name.markdown}}. It allows the use of:
  - {{site.data.name.latex}}:   For mathematical and scientific expressions.
  - {{site.data.name.mermaid}}: For creating diagrams and flowcharts.

## Cross-reference
- to same category
  - 0 - topic                = same category/topic/whatis/topic.md
  - 1 - topic/whatis         = same category/topic/whatis/topic.md
  - 1 - topic/stopic         = same category/topic/whatis/stopic.md
  - 2 - topic/stopic/whatis  = same category/topic/whatis/stopic.md

- to same category
  - 1 - topic/howto           = same category/topic/whatis/topic.md
  - 2 - topic/stopic/howto    = same category/topic/whatis/stopic.md

- to another category
  - 1 - category/topic                = category/topic/whatis/topic.md
  - 2 - category/topic/whatis         = category/topic/whatis/topic.md
  - 2 - category/topic/stopic         = category/topic/whatis/stopic.md
  - 2 - category/topic/stopic/whatis  = category/topic/whatis/stopic.md

- to another category
  - 2 - category/topic/howto          = category/topic/whatis/topic.md
  - 2 - category/topic/stopic/howto   = category/topic/whatis/stopic.md


## Category of users

|name|description|comment|
|-|-|-|
|Technical|anyone that is not only functional ({{site.data.name.eg}} PO.)|should use {{site.data.name.vscode}} + {{site.data.name.git}} to interact with {{site.data.name.topix}}|
|Functiunal|anyone that is not a Tech. user|should use a {{site.data.name.gui}} to interact with {{site.data.name.topix}}|

<br>

