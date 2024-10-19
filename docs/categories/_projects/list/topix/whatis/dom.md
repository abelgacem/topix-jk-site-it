---
mx:
  description:  The Documentation Model
  trail:  2
---


## The documentation model
The application defines the following concepts:

- {{site.data.topix.domain}}:   
    - Denotes a set of know-hows and knowledges.
    - The documentation is subdivided into domains ({{site.data.name.eg}} Math, IT, Physics, Psychology, History, etc.).
    - A {{site.data.topix.domain}} is subdivided into {{site.data.topix.category}}, {{site.data.name.eg}}:
      - The Maths domain would have the categories: Theories, Numbers.
      - The IT domain would have the categories: Programing, Cloud, Network.
- {{site.data.topix.category}}: 
    - Is subdivided into {{site.data.topix.section}}:
    - The set of {{site.data.topix.category}} of a {{site.data.topix.domain}} should provide a good overview and point of view on a {{site.data.topix.domain}}:
- {{site.data.topix.section}}: 
    - There are 2 kind of {{site.data.topix.section}}:
       - The {{site.data.topix.section}} named {{site.data.topix.list}} {{site.data.name.sdef}}.
       - The others {{site.data.topix.section}} {{site.data.name.udef}}.
    - Each {{site.data.topix.section}} contains a set of items called {{site.data.topix.topic}}, {{site.data.name.eg}}:
      - The Programing category of the {{site.data.name.it}} domain would have the {{site.data.topix.topic}} : {{site.data.name.java}}, {{site.data.name.liquid}}, {{site.data.name.bash}} below the {{site.data.topix.section}}: {{site.data.topix.list}}.
      - The Theories category of the Maths domain would have the {{site.data.topix.topic}} : Set, Correspondence below the {{site.data.topix.section}}: {{site.data.topix.list}}.
- {{site.data.topix.topic}}:  
    - Each {{site.data.topix.topic}} defines a set of {{site.data.topix.stopic}} with points of view, which together help to understand the {{site.data.topix.topic}}, {{site.data.name.eg}}:
      - {{site.data.topix.topic}}:Set in the {{site.data.name.math}} domain woud have as {{site.data.topix.stopic}}: element,  
      - {{site.data.topix.topic}}:{{site.data.name.java}} in the {{site.data.name.it}} domain woud have as {{site.data.topix.stopic}}: variable, control flow   
- {{site.data.topix.stopic}}:  
    - Denotes a sub {{site.data.topix.topic}}. 
    - They are the cornerstone of the documentation. 
    - This is a file under a specifc folder. The name of the folder indicates a {{site.data.topix.classifier}}.

- {{site.data.topix.classifier}}:  
    - Can be {{site.data.name.sdef}} or {{site.data.name.udef}}.
    - Defines the kind of informations contained in a {{site.data.topix.stopic}}.
    - {{site.data.topix.classifier}} {{site.data.name.sdef}}  are:
        - {{site.data.topix.whatis}} :   used to define and describe a {{site.data.topix.stopic}}.
        - {{site.data.topix.howto}} :    used to define step-by-step guide on how to manage or use a {{site.data.topix.stopic}}.
        - {{site.data.topix.list}} :     used to describe a {{site.data.topix.stopic}} that is a container for other {{site.data.topix.stopic}}.
        - {{site.data.topix.tutorial}} : usually an aggregation of different {{site.data.topix.howto}}.

