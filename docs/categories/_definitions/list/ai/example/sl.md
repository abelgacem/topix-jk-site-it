---
mx:
  description:  Tools for AI
---

# {{ site.data.name.usecase }}

## Context

- suppose you want to predict whether someone will have a heart attack within a year. 
- You have a set of data on previous patients.
- these data = the **features** include : age, weight, height, blood pressure, etc.
- You know whether the previous patients had heart attacks within a year of their measurements = the **label**.
- The problem is combining all the existing data into a ML. model that can **predict** whether a **new person** will have a heart attack within a year.

## Mathematical Modelization
- the entire set of input data 
  - the **matrix**. 
- Rows of the matrix are called observations, samples, or instances
  - **all features of 1 label** 
  - a set of measurements for a patient.
- Columns of the matrix are called predictors, attributes, or features.
  -  each are variables representing a measurement taken on all subject (age, weight, height, etc. in the example)
- You can think of the response data as a column vector where each row contains the output of the corresponding observation in the input data (whether the patient had a heart attack). 
- To **fit or train a supervised learning model**: 
  - choose an appropriate algorithm
  - Then pass the input and response data to it.




# {{ site.data.name.usecase }}
