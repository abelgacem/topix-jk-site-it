---
mx:
  description:  Supervised Machine Learning
  trail: 2
---


# The data
- text, images, videos.

## {{ site.data.name.usecase }}
### Purpose of the {{ site.data.name.ais }}
- Recognize 1 type of flower ({{ site.data.name.aka }} **target, class or label**)
### The data
- these flowers have attributes ({{ site.data.name.aka }} **features,attributes, predictors**) 
  - att1 : sepal length
  - att2 : sepal width
  - att3 : petal length
  - att4 : petal width
- each set of **features** for 1 **flower** define 1 **target**

### mathematical objects
- the **target** ({{ site.data.name.aka }} **class or label**) one category of flowers
- the **features** ({{ site.data.name.aka }} **attributes, predictors**) the set of attributes for 1 flowers.


|real life object||mathematical object|
|-|-|-|
|all target|-|1 label vector|
|all features of 1 target|-|1 feature vector|
|all feature of all target|-|1 2D matrix|

# The training
- Consist of giving the matrix ({{ site.data.name.aka }} **training data**) to a computer.
- A specific algorithm will try to minimize an error during this training.
  - this is done by a mathematical optimization method.
- After the training the computer receive a **1 set of features** that it has never seen before with an unknown label ({{ site.data.name.aka }} **test data**)
- the computer should make a predcition on **the label**


# {{ site.data.name.class }}
- Classification:
  - the computer must predict a **discrete label**
    - Binary calssification (when the computer must predict only 2 label)
    - multi calssification  (whan the computer must predict more than 2 label)
- Regression
  - The computer must predict a **continuous label**
    - Example: predict house price based on 1 set of features.

# algorithm
- have a uniq design
- can be different in the way they
  - store the info mathematically
  - how they solve the training process through mathemathical operations
  - how they tr ansform the data

## List

|Algorithm|CRB|Type|Complexity|Interpretability|Use Case|
|-|-|-|-|-|-|
|Linear Regression|R|Linear|Low|High|Predicting continuous values (e.g., housing prices)|
|Logistic Regression|C|Linear|Low|High|Binary or multi-class classification (e.g., spam detection)|
|Support Vector Machines (SVM)|C|Non-linear|Medium|Medium|Image classification, text classification|
|Decision Trees|B|Non-linear|Medium|Medium|Fraud detection, risk assessment|
|Random Forest|B|Non-linear|High|Medium|Ensemble learning, improving decision trees|
|k-Nearest Neighbors (k-NN)|B|Non-linear|Low|Low|Image recognition, recommendation systems|
|Naive Bayes|C|Linear|Low|High|Text classification, sentiment analysis|
|Gradient Boosting (e.g., XGBoost)|B|Non-linear|High|Low|Kaggle competitions, large datasets with complex patterns|
|Neural Networks|B|Non-linear|High|Low|Image recognition, speech recognition|
|AdaBoost|B|Non-linear|High|Medium|Ensemble learning, improving weak learners|
|Ridge Regression|R|Linear|Low|High|Regularized regression for avoiding overfitting|
|Lasso Regression|R|Linear|Low|High|Feature selection, regression with sparse data|
|Perceptron|C|Linear|Low|Low|Simple linear classification tasks|
|Polynomial Regression|R|Non-linear|Low|Medium|Predicting non-linear relationships, curve fitting|
|Multi-Layer Perceptron (MLP)|B|Non-linear|High|Low|Complex classification tasks, deep learning|
|Stochastic Gradient Descent (SGD)|B|Linear|Medium|Medium|Large-scale machine learning, online learning|

In this table:
- **C** stands for Classification
- **R** stands for Regression
- **B** stands for Both
- **Type**: Whether the algorithm is 
  - linear (simple relationship between input and output)
  - non-linear (more complex relationship).
- **Complexity**: indicating the algorithm's computational cost and implementation difficulty.
  - Rated as Low, Medium, or High.
- Interpretability: How easily the results of the algorithm can be understood or explained.
  - rated as High, Medium, or Low.

# {{ site.data.name.example }}
