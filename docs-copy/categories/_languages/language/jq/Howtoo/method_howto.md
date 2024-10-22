# Example
Definition

        def do_while( action; condition ): 
        def w: action | if (condition | not) then empty else ., w end;
        w;
Usage

        0 | do_while( .+1; . % 6 != 0 )        