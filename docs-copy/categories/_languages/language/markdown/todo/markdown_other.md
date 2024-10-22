<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

# [&larr;][Back_Readme] Domain > Computer Science > Markdown > Other > Howto
[Back_Readme]:     ./readme.md         "Home"

    
## Liste
### Liste UL
- item 01
  - Subitem 01    
  - Subitem 11    
  - Subitem 21    
- item 02
  - Subitem 02
  - Subitem 12    
  - Subitem 22    
### Liste OL
#### Type
1. item 01
1. item 02
1. item 03
#### Type
1. item 01
  1. Subitem 01    
  1. Subitem 11    
  1. Subitem 21    
1. item 02
  - Subitem 01    
  - Subitem 11    
  - Subitem 21    
1. item 03
  1. Subitem 02
  1. Subitem 12    
  1. Subitem 22 
   
## Syntax highlight

This code 

- works with Mac.Markoff
- fails with Angularjs.Markdown

```html
<!DOCTYPE html>  
<html>  
<head> 
    <meta charset = "utf-8"> 
    <title>Omt02-html6</title> 
    <!-- CSS Tp -->
    <link rel="stylesheet" href="shared/css/tp/w3.css">
    <!-- CSS Cus -->
    <link rel="stylesheet" href="shared/css/cus/root.css">
```

## Tree
This code 

- works with Mac.Markoff
- fails with Angularjs.Markdown
<details>
<summary>Click to display Content ...</summary>

```javascript
TheApp.config(function($routeProvider) {
    $routeProvider
    .when('/'                         ,{templateUrl:     'topic/omt/index.htm'})
    .otherwise({redirectTo: '/'});
});
```
</details>

## Note

> Info:
>
> You can insert all kind of text

## Link
### Standard
- you can [insert][Whatis_insert] a link to Another doc
- you can [insert](!#/Omt/Whatis/Link) a link to Another doc
- you can [`insert`][Whatis_insert] a link to Another doc
- you can ['insert'][Whatis_insert] a link to Another doc

### Test
I get 10 times more traffic from [1] [1] than from
[Yahoo] [2] or [Msn] [3].

  [1]: http://google.com/        "Goooooogle"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"
  [Whatis_insert]:!#/Omt/Whatis/Link


### Other

[![Build Status](https://travis-ci.org/highlightjs/highlight.js.svg?branch=master)](https://travis-ci.org/highlightjs/highlight.js) 
[![Greenkeeper badge](https://badges.greenkeeper.io/highlightjs/highlight.js.svg)](https://greenkeeper.io/) 
[![install size](https://packagephobia.now.sh/badge?p=highlight.js)](https://packagephobia.now.sh/result?p=highlight.js)


## Comment

The following code allow to insert comment in the souce file

[//]: #(  Everything after is not parsed by the engine

## Text Format

- voici du *Text*
- voici du **Text**
