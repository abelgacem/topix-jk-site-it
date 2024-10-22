<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

# Example
        Input: 	"foo" "bar"
        Filter: in({"foo": 42})
        # Does Input.Key "foo" is in Object {"foo": 42}  => True
        # Does Input.Key "bar" is in Object {"foo": 42}  => False

        Input:  [2, 0]
        Filter: map(in([0,1]))
        # Does Input.Key 2  exist as key in [0,1]  => False
        # Does Input.Key 0  exist as key in [0,1]  => True
