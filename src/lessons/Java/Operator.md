---
title: Chapter 3
order: 3
---

#   Java Operators

Operators are used to perform operations on variables and values.

In the example below, we use the + operator to add together two values:

```java
int x = 100 + 50;
```


Although the + operator is often used to add together two values, like in the example above, it can also be used to add together a variable and a value, or a variable and another variable:

```java
int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)
```

Java divides the operators into the following groups:

1.  `Arithmetic operators`
2.  `Assignment operators`
3.  `Comparison operators`
4.  `Logical operators`
5.  `Bitwise operators`


#   Arithmetic Operators

Arithmetic operators are used to perform common mathematical operations.

## Operators:


### 1.  Addition (+)

It adds together two values.

Example: ` x + y`


### 2. Subtraction (-)

It subtracts one value from another.

Example: ` x - y`


### 3. Multiplication (*)

It multiplies two values.

Example: ` x * y`


### 4. Division (/)

It divides one value by another.

Example: ` x / y`


### 5. Modulus (%)

It returns the division remainder.

Example: ` x % y`


### 6. Increment (++)

It increases the value of a vriable by 1

Example: ` ++x`


### 7. Decrement (--)

It decreases the value of a variable by 1

Example: ` --x`


#   Java Assignment Operators

Assignment operators are used to assign values to variables.

In the example below, we use the assignment operator (=) to assign the value 10 to a variable called x:

```java
int x = 10;
```
The addition assignment operator (+=) adds a value to a variable:

### Example:    
```java
int x = 10;
x += 5;
```

A list of all assignment operators:

```
 Operators          Example         Same As
 ```

 ```java
    =               x = 5           x = 5

    +=              x += 3          x = x + 3

    -=              x -= 3          x = x - 3

    *=              x *= 9          x = x * 9

    /=              x /= 9          x = x / 9

    %=              x %= 7          x = x % 7

    &=              x &= 7          x = x & 7

    |=              x |= 7          x = x | 7       

    ^=              x ^= 7          x = x ^ 7   

    >>=             x >>= 4         x = x >> 4

    <<=             x <<= 4         x = x << 4
```

#   Java Comparison Operators

Comparison operators are used to compare two values (or variables). This is important in programming, because it helps us to find answers and make decisions.

The return value of a comparison is either true or false. These values are known as `Boolean values`.

In the following example, we use the greater than operator (>) to find out if 5 is greater than 3:

### Example:

```java
int x = 5;
int y = 3;
System.out.println(x > y); // returns true, because 5 is higher than 3
```

```
 Operator           Name                   Example
 ```

```java
    ==              Equal to                x == y

    !=              Not equal               x != y

    >               Greater than            x > y

    <               Less than               x < y

    >=              Greater than or         x >= y    
                    equal to

    <=              Less than or            x <= y
                    equal to
```

#   Java Logical Operators

You can also test for `true` or `false` values with logical operators.

Logical operators are used to determine the logic between variables or values:

```
 Operator           Name            Description                         Example
 ```

 ```java
    &&              Logical and     Returns true if both                x < 5 && x < 10
                                    statements are true.

    ||              Logical or      Returns true if one                 x < 5 || x < 4
                                    of the statements is 
                                    true.

    !               Logical not     Reverse the result,                 !(x < 5 && x < 10)
                                    returns false if the 
                                    result is true
```

