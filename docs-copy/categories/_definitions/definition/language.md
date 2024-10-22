---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  type:     whatis
  lp:       2
---



# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Language|Common||[definition][Language_Common_Whatis]&uarr;|
<br>



# Type
- Dsl (eg. Regexp, Awk, sed, grep)
- Programing Language
  - Scripting language (eg. bash, perl, python, sql, powershell, sql)
  - Compiled language (eg. Java, Scala, C, C++)
- Documentation language (eg. Html, Markdown, Asciidoc)
- Markup language (eg. Latex, Html, Sgml, Xml, Xsd)

# Todo
- Sgml, Xml, Csv, Json, Yaml
- Xsl, Xslt, Xpath
- Json, jq, Yaml, yq

# Todo
- XML est un format de representation de l'information
- XML n'est un format de publication de l'information
- one XML [document] can be represented as 1 ordered Tree with node

# 1 xml doc
## the source
```xml
<?xml version="1.0" encoding="UTF-8"?>
<document modele="ULCoursGeneral" code="BP-Incendie3_S1_E2_UL1">
    <entete>
        <identification>
            <titre>L'assurance de la responsabilité de voisinage</titre>
            <date>21/02/01</date>
            <auteur>AEA</auteur>
            <version>1.00</version>
        </identification>
    </entete>
    <corps>
        <contenu>
            <paragraphe>Cette garantie est appelée : recours des voisins et des tiers.</paragraphe>
            <remarque>
                <paragraphe>L'image suivante <ressource URIsrc="img07.jpg"
                        titre="Recours des voisins et des tiers" type="image"/> montre la
                    garantie.</paragraphe>
            </remarque>
        </contenu>
    </corps>
</document>
```

## As one tree
```json
/
 |document
   |@modele = "ULCoursGeneral"
   |@code = "BP-Incendie3_S1_E2_UL1"
   |entete
     |identification
       |titre 
         |text() = "L'assurance de ..."
       |date 
         |text() = "21/02/01"
       |auteur
         |text() = "AEA"
       |version
         |text() = "1.00"
     |corps
       |contenu
         |paragraphe
           |text() = "Cette garantie ..."
         |remarque
         |paragraphe
           |text() = "L'image suivante"
           |ressource
             |@URIsrc = "img07.jpg"
             |@titre = "Recours des voisins..."
             |@type = "image"
           |text() = "montre la garantie."
```

# Xpath
## Definition
- allow to point on 1 elemnt of an XML
- one Xpath expresseion return
  - 1 set of node (ie. node-set)
  - 1 string
  - 1 boolean
  - 1 real
## Type of node
- root nodes
- element nodes
- text nodes
- attribute nodes
- namespace nodes
- processing instruction nodes
- comment nodes


