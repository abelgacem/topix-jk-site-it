# Define var inline
    "f o o" as $foo | "b a r" as $bar | {$foo, $bar:$foo}
    # Outpout --> {"f o o":"f o o","b a r":"f o o"}