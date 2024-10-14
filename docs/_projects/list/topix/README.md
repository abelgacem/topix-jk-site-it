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

## Documentation Model
The documentation defines the following concepts:

- {{site.data.topix.domain}}:   
    - The documentation is subdivided into domains ({{site.data.name.eg}} Math, IT, Physics, Psychology, History, etc.).
    - Each is subdivided into {{site.data.topix.category}}, {{site.data.name.eg}}:
      - The Maths domain would have the categories: Theories, Numbers.
      - The IT domain would have the categories: Programing, Cloud, Network.
- {{site.data.topix.category}}: 
    - Each contains a collection of item named {{site.data.topix.topic}}, {{site.data.name.eg}}:
      - The Theories category of the Maths domain would define the items : Set, Language.
      - The Programing category of the IT domain would have the items    : Java, Liquid.
- {{site.data.topix.topic}}:  
    - Each defines a set of {{site.data.topix.object}} with points of view, which together help to understand the {{site.data.topix.topic}}, {{site.data.name.eg}}:
      - {{site.data.topix.topic}}:Set in the Maths domain woud have objects: element,  
      - {{site.data.topix.topic}}:Java in the Maths domain woud have objects: variable, control flow   
- {{site.data.topix.object}}:  
    - They are the cornerstone of the documentation. 
    - This is a file under a specifc folder. The name of the folder is a {{site.data.topix.classifier}}.

- {{site.data.topix.classifier}}:  
    - Can be {{site.data.name.sdef}} or {{site.data.name.udef}}.
    - Defines the kind of informations contained in an {{site.data.topix.object}}.
    - {{site.data.topix.classifier}} {{site.data.name.sdef}}  are:
        - {{site.data.topix.whatis}} :   used to define and describe an {{site.data.topix.object}}.
        - {{site.data.topix.howto}} :    used to define Step-by-step guide on how to manage or use an {{site.data.topix.object}}.
        - {{site.data.topix.list}} :     used to describe an {{site.data.topix.howto}} that is often a container for other type of objects.
        - {{site.data.topix.tutorial}} : usually build on top of {{site.data.topix.howto}}.


## Version Control
- The codebase for both the docs and the code is managed with {{site.data.name.git}}.
- The codebase for the documentation reflects this model for intuitive organization and access.

## Documentation Framework
- The choosen documentation framework is {{site.data.name.jekyll}}.

## Documentation Language
- The choosen documentation language ({{site.data.name.ie}} to write the documentation) is {{site.data.name.markdown}}. It allows the use of:
  - {{site.data.name.latex}} :  For mathematical and scientific expressions.
  - {{site.data.name.mermaid}}: For creating diagrams and flowcharts.

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

