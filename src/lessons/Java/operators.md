---
title: Operators
order: 3
author: Karan Prasad
---

#   Java Operators

Operators are used to perform operations on variables and values.

In the example below, we use the (`+`) operator to add together two values:

```java
int x = 100 + 50;
```


Although the (`+`) operator is often used to add together two values, like in the example above, it can also be used to add together a variable and a value, or a variable and another variable:

```java
int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)
```

Java divides the operators into the following groups:

-  ___Arithmetic operators___
-  ___Assignment operators___
-  ___Comparison operators___
-  ___Logical operators___
-  ___Bitwise operators___


##  1. Arithmetic Operators

Arithmetic operators are used to perform common mathematical operations.
| **Operation**       | **Description**                             | **Example** |
|---------------------|---------------------------------------------|-------------|
| ***Addition***      | It adds together two values.                | `x + y`     |
| ***Subtraction***   | It subtracts one value from another.        | `x - y`     |
| ***Multiplication***| It multiplies two values.                   | `x * y`     |
| ***Division***      | It divides one value by another.            | `x / y`     |
| ***Modulus***       | It returns the division remainder.          | `x % y`     |
| ***Increment***     | It increases the value of a variable by 1   | `++x`       |
| ***Decrement***     | It decreases the value of a variable by 1   | `--x`       |


##  2. Java Assignment Operators

Assignment operators are used to assign values to variables.

In the example below, we use the assignment operator (`=`) to assign the value 10 to a variable called x:

```java
int x = 10;
```
The addition assignment operator (`+=`) adds a value to a variable:

### **Example:**    
```java
int x = 10;
x += 5;
```

A list of all assignment operators:

| Operator | Example | Equivalent |
|---|---|---|
| = | x = 5 | x = 5 |
| += | x += 3 | x = x + 3 |
| -= | x -= 3 | x = x - 3 |
| *= | x *= 9 | x = x * 9 |
| /= | x /= 9 | x = x / 9 |
| %= | x %= 7 | x = x % 7 |
| &= | x &= 7 | x = x & 7 |
| \|= | x |= 7 | x = x | 7 |
| ^= | x ^= 7 | x = x ^ 7 |
| >>= | x >>= 4 | x = x >> 4 |
| <<= | x <<= 4 | x = x << 4 |

## 3. Java Comparison Operators

Comparison operators are used to compare two values (or variables). This is important in programming, because it helps us to find answers and make decisions.

The return value of a comparison is either true or false. These values are known as ***Boolean values***.

In the following example, we use the greater than operator (`>`) to find out if 5 is greater than 3:

### **Example:**

```java
int x = 5;
int y = 3;
System.out.println(x > y); // returns true, because 5 is higher than 3
```

| Operator | Name | Example |
|---|---|---|
| == | Equal to | x == y |
| != | Not equal to | x != y |
| > | Greater than | x > y |
| < | Less than | x < y |
| >= | Greater than or equal to | x >= y |
| <= | Less than or equal to | x <= y |

##  4. Java Logical Operators

You can also test for `true` or `false` values with logical operators.

Logical operators are used to determine the logic between variables or values:

| Operator | Name | Description | Example |
|---|---|---|---|
| && | Logical AND | Returns true if both expressions are true | x < 5 && x < 10 |
| \|\| | Logical OR | Returns true if at least one expression is true | x < 5 || x < 4 |
| ! | Logical NOT | Reverses the result of an expression | !(x < 5 && x < 10) |

