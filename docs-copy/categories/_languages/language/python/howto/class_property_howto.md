<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../whatis/class_whatis.md


# [&larr;][Repo_Readme]Domain > Language > Python > Howto > class ([Definition][Item_Whatis])

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

# equivalent syntax
## Method
- good for property@static

```python
import cmd

class Base(cmd.Cmd):
    # @do_decorator
    # def do_manage_resource(self):
    #     """manage resource."""

    def __init__(self):
        super().__init__()
        self.intro = f'''
        Welcome to {self.__class__.__name__} (aka. IA : Interactive Actions).
        Type "help" or "tabulation" or "?" for available interactive actions, "quit" to exit
        '''
        self.doc_header = "Documented mx commands (type help <topic> or ? <topic> or (q)uit:"
        self.ruler = '-'
        self.prompt = f'{self.__class__.__name__} > '

    # override method
    def do_help(self, line):
        '''Show help.'''
        super().do_help(line)

    def print_topics(self, header, cmds, cmdlen, maxcol):
        '''Customize the printing of topics.'''
        super().print_topics(header, cmds, cmdlen, maxcol)

```
## Method
- good for property@calculated
```python
class Base(cmd.Cmd):
#   @do_decorator
#   def do_manage_resource(self):
#       """manage resource."""

  def __init__(self):
    super().__init__()

  @property
  def intro(self):
    '''customize the intro'''
    l_MSG = f'''
    Welcome to {self.__class__.__name__} (aka. IA : Interactive Actions).
    Type "help" or "tabulation" or "?" for available interactive actions, "quit" to exit
    '''
    return l_MSG

  @property
  def doc_header(self):
    '''customize the help header'''
    return "Documented mx commands (type help <topic> or ? <topic> or (q)uit:"

  @property
  def ruler(self):
    '''customize the separator for help'''
    return '-'

  # @property
  # def prompt(self):
  #   '''customized the prompt'''
  #   l_MSG = f'{self.__class__.__name__} > '
  #   return l_MSG

  # override method
  def do_help(self, line):
     '''Show help.'''
    #  self.doc_header = "Documented mx commands (type help <topic> or ? <topic> or (q)uit:"
    #  self.ruler      = "="
     super().do_help(line)

  def print_topics(self, header, cmds, cmdlen, maxcol):
    '''Customize the printing of topics.'''
    super().print_topics(header, cmds, cmdlen, maxcol)
```
