---
title: Statements
order: 3
author: Malay Patra
---

# C++ Statements

## 1. Statements

A **computer program** is a list of "instructions" to be "executed" by a computer.

In a programming language, these programming instructions are called `statements`.

The following statement "instructs" the compiler to print the text "Hello World" to the screen:

```cpp
cout << "Hello World!";
```

It is important that you end the statement with a semicolon ;

If you forget the semicolon (`;`), an error will occur and the program will not run:

**Example:**
```cpp
cout << "Hello World!"
```
**Output:**
```bash
error: expected ';' before 'return'
```
## 2. Many Statements
Most C programs contain many statements.

The statements are executed, one by one, in the same order as they are written:
```cpp
cout << "Hello World!";
cout << "Have a good day!";
return 0;
```

### Example explained
From the example above, we have three statements:
1. `printf("Hello World! ");`
2. `printf("Have a good day!");`
3. `return 0;`

The first statement is executed first (print "Hello World!" to the screen).

Then the second statement is executed (print "Have a good day!" to the screen).

And at last, the third statement is executed (end the C program successfully).

> You will learn more about statements while reading this tutorial. For now, just remember to always end them with a semicolon to avoid any errors.
