---
mx:
  description:  Generative Adversarial Networks
---

# {{ site.data.name.definition }}
- A type of AI.
- Made of 2 neural networks:
  - A generator
  - A dicriminator

## Genarator
- Generates Data from random data
- Try to create realistic Data ({{ site.data.name.eg }} 1 image)
- The purpose is to fool the Discriminator (who believes Data are Real)

## Discriminator
- Evaluate the quality of the Data
- Must distinguish real data from generated data
- Learns to classify whether the input data is genuine or generated.

## The training model
- The generator keeps improving its outputs to trick the discriminator.
- The discriminator gets better at telling real and fake data apart.
- The "competition" process continues until:the generator produces data so realistic that even the discriminator struggles to tell the difference.