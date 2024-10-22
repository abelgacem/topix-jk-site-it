---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp: 2
  ref:  
    child:
      - definition/page
      - definition/site
      - definition/template
---


# Definition
- the name of a root folder
- a tree of folders

## Member
- a set of  `pages`


# Type
- type
  - is define by frontmatter:key:`type` OR
  - is derived from the file locartion 
    - eg. `content/blog/a.md` denote contettype:`blog`
- single
- list
  - list other content (that can be list or single)
  - eg. home page if of type list
# Definition
- denote a file serve by the hugo server

# Member
- frontmatter (ie. metadata)
- markup (ie. visible content)
- layout (ie. css - display and format the markup)

# Toknow
- there is 2 way to define content
  - using archetype
  - creating files directly
- Hugo categorize content and use
  - "content type" string in its doc
  - "--kind options" to create "type of content"


# Todo
add ref:
  - frontmatter
  - archetype
  - server
  - markup
