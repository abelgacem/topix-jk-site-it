---
mx:
  description:  AI Model
  trail: 2
  ref:
    - whatis/jd
    - whatis/gan
---

# {{ site.data.name.definition }}
- A member of an AI system.
- An algorithm or a mathematical framework designed to perform specific tasks or functiuns. {{site.data.name.eg}}:
  - Generating data, information, or documents.
  - Producing various types of content, including text, images, and videos.
- Leverages learned patterns from training data to make **predictions** or **decisions**.
- TODO: models a distribution


# {{ site.data.name.class }}
- Generative
- Discriminative
- Large Language

# {{ site.data.name.usecase }}
- In a chatbot ({{ site.data.name.ie }}the AI system)
  - the model could be the underlying {{ site.data.name.ml }} component that generates text responses based on patterns it learned from past conversations.

# {{ site.data.name.example }}
- model that generate images to create avatar for a game
- assembly ai'latest model lemur

# {{ site.data.name.process }}
1. A Generative model models a joint distribution
1. the Generative model then generate some data that can be uses in many use case. {{site.data.name.eg}} 
  - Train another model called a discriminative AI model.

# {{ site.data.name.toknow }}
- The {{ site.data.name.ml }} models that makes prediction are **disciminator model**.
- The mathematical framework could be:
  - Linear regression.
  - Decision trees.
  - Neural networks.
