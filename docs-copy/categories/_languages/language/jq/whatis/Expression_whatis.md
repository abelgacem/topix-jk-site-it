# Member
- Module
- Method
- Expression (recursivity)

# Syntax
     import "a" as foo;            ## Import Module
     include "b";                  ## Include Module.Method
     def some_function: body_here; ## Define Method.Inline
     Expr01 | Expr02 | ... ExprN   

# [ Expr ]
- Return the Output of Expr as 1 Array
- Is 1 Shorthand for **reduce expr as $value ([]; setpath(length; $value)**

# { Expr }
- Return the Output of Expr as 1 Object
- Is 1 Shorthand for **reduce expr as $value ([]; setpath(length; $value)**