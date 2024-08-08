---
title: Python Variables
order: 2
---

# Variables

Variables are containers for storing data values.


# Python Variables

Python has no command for declaring a variable.

A variable is created the moment you first assign a value to it.

For example, check out the following code:

```python
foo = 'i am a string' #string
bar = true #boolean
```

As you can see, we have assigned two variables ``foo`` and ``bar``.

You also might wonder whether strings HAVE to be declared with single quotes only.

In Python, you can declare strings using single OR double quotes!

```python
x = 'John'
# is the same as
x = "John"
```

Now, there's another cool thing about Python which you should know.

Variables do not need to be declared with any particular type, and can even change type after they have been set (unlike most of the other programming languages!)

# Variable Casting

If you want to specify the data type of a variable, this can be done with casting.

```python
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
```

# Getting the type of a variable

You can get the data type of a variable with the type() function. (This comes handy quite often! :D)

```python
x = 5
y = "John"
print(type(x))
print(type(y))
```

#Are variables in Python Case-Sensitive?

Variable names in Python ARE case-sensitive.

If you want to learn more about Python Variables, you can learn more [here](https://www.w3schools.com/python/python_variables.asp)





