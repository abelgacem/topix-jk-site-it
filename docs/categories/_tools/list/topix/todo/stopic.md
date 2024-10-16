---
mx:
  description: a subdivision of a domain
---



# {{ site.data.name.todo }}
## reference
- when a {{ site.data.topix.stopic }} ({{ site.data.name.aka}} referer A ) references another {{ site.data.topix.stopic }} ({{ site.data.name.aka}} refererent B )in the same classifier.
  - Do check at compile time, that the referent B also references the referer A.
  - If not implement one of the 2 cases:
     - trigger an error or warning
     - add automatically the missing reference in the referent.
 
