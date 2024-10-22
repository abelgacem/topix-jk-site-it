---
mx:
  description:  Generative AI/Model
  trail: 3
  ref:

---

# {{ site.data.name.definition }}
- Acronym for **Gen**erative **AI**
- A category of {{ site.data.name.ai }} system that uses a **Gen**erative **model**.

## Generative model
- A model that 
  - aims to learn the **joint probability distribution of the input data** ({{ site.data.name.aka }} training data)
  - Captures the underlying patterns and structures of the input data. 
  - has learned to generate or create novel
    - Data ( {{site.data.name.eg }} image, text, audio).
    - Informations.
    - Documents.
- By modeling this distribution, it can create new data points ({{ site.data.name.aka }} synthetic data) that are **statistically similar to the training data**.



# {{ site.data.name.usecase }}
The synthetic data ghenerated by a generative model may serve various purposes, such as:
  - Training Discriminative Models
  - Simulating Scenarios
  - Generating images to create avatar for a game

## Training Discriminative Models
- The generative model create synthetic data that mimics real-world data.
- these data are used as training data for a discriminative model.
- the discriminative model ...
  - classify the data
  - make predictions

## Simulating Scenarios
- The generative model create synthetic data
- The discriminative model can on condition
  - classify the data
  - make predictions

# {{ site.data.name.toknow }}
- **Generative models** are the specific mathematical algorithms or neural networks within the AI system that generate the content.
