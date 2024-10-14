---
mx:
  domain: tool
  description: A documentation hub.
  lp:
  ref:
---

# {{ site.data.name.description }}
- A web application

# {{ site.data.name.purpose }}
Create a hub that:  

- Is a point of reference for the company's documentation.
- Establish a common terminology shared by all.
- Unify the writing and conception of document.
- Allows for writing and consuming any type of document, including:
  - Technical guides, User manuals
  - DAT, DCT, Specs, Release, RFC
  - Project specifications
  - Tutorials, Processes
  - Policies
  - And more
- Display a document in the user's language or any other language.
- leverage the full capabilities of a {{site.data.name.git}} repository and codebase (security, release, collaboration, review, ...).
- Implement cross-references between related documents, improving navigation and context.
- Establish flexible learning paths for users to explore at their own pace:
  - Processes
  - Topics within specific domains
  - Tutorials


# {{ site.data.name.requirement }}

## Version Control
- The codebase is managed with {{site.data.name.git}}.


## Documentation Framework
- The choosen documentation is {{site.data.name.jekyll}}.

## Documentation Model
Organize the documentation using the following concepts:
  - {{site.data.topix.domain}}:   
    - The documentation is subdivided into domains ({{site.data.name.eg}} Math, IT, Physics, Psychology, History, etc.).
    - Each {{site.data.topix.domain}} is subdivided into categories, {{site.data.name.eg}}:
      - The Maths domain would have the categories: Theories, Numbers.
      - The IT domain would have the categories: Programing, Cloud, Network.
  - {{site.data.topix.category}}: 
    - Often contains a collection of item named {{site.data.topix.topic}}, {{site.data.name.eg}}:
      - The Theories category of the Maths domain would have {{site.data.topix.topic}}: Set, Language.
      - The Programing category of the IT domain would have {{site.data.topix.topic}}: Java, Liquid.
  - {{site.data.topix.topic}}:  
    - Usually defines their own {{site.data.topix.object}}.
  - {{site.data.topix.object}}:  
    - Belongs to a {{site.data.topix.topic}}.
    - Helps understand a part of a {{site.data.topix.topic}}.
    - 
    
  - `List`:  A collection of related items or topics, categorized by relevance or purpose.
  - `Whatis`:  Definitions and explanations of terms or concepts.
  - `Howto`:  Step-by-step guides for completing specific tasks.

## Codebase Organization
- Ensure the codebase reflects these objects for intuitive organization and access.

## Documentation Language
- Use `Markdown`  to write the documentation, allowing the use of:
  - `LaTeX`:  For mathematical and scientific expressions.
  - `Mermaid`:  For creating diagrams and flowcharts.

# {{ site.data.name.improvement }}
## phase 1
## phase 2
- A {{site.data.name.poc}} to easily move from {{site.data.name.jekyll}} to another framework like:
  - {{site.data.name.hugo}}
  - {{site.data.name.docusaurus}}
  - {{site.data.name.anthora}}
- A {{site.data.name.gui}} to author and manage the content.
  - for non technichal users
  - to administer the tool 

# {{ site.data.name.reference }}
## Example of static sites
  - https://www.hashicorp.com/
  - https://devconnected.com/
  - https://devconnected.com/

## front for github
- https://github.com/planetjekyll/awesome-jekyll-editors

# Todo
- User tech = tous ce qui n'est pas fonctionel: PO
- Evangéliser les user
  - Editeur = vscode
  - git clone
  - git pull
  - git push

# Contributors
- Amar

