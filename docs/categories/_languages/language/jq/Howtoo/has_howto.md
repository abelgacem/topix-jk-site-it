<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

# Example
        Input: 	[{"foo": 42}, {}]
        Filter: map(has("foo"))
        # Does Input {"foo": 42} Contains The Key "Foo" => True
        # Does Input {}          Contains The Key "Foo" => False

        Input: 	[[0,1], ["a","b","c"]]
        Filter: map(has(2))
        # Does Input [0,1]         Contains The Key 2 => False
        # Does Input ["a","b","c"] Contains The Key 2 => True
