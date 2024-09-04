---
title: Input/Output
order: 1
author: Malay Patra
---

# Basic Input/Output

In any programming language, input and output (I/O) operations are fundamental. These operations enable a program to interact with the user, receive data (input), and display results (output). Understanding how to handle I/O is essential for solving problems in programming and is the first step towards mastering Data Structures and Algorithms (DSA). This lesson covers basic I/O operations in three popular programming languages: C++, Java, and Python.

## Input/Output in Different Languages

### 1. C++

C++ provides basic I/O functionality through the standard input (`cin`) and output (`cout`) streams, which are part of the `iostream` library.

#### Input in C++

To take input from the user, you can use the `cin` object followed by the extraction operator (`>>`).

```cpp
#include <iostream>
using namespace std;

int main() {
    int number;
    cout << "Enter an integer: ";
    cin >> number;
    cout << "You entered: " << number << endl;
    return 0;
}
```

**Output:**
```bash
Enter an integer: 5
You entered: 5
```

#### Output in C++

To display output to the user, you can use the `cout` object followed by the insertion operator (`<<`).

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```

**Output:**
```bash
Hello, World!
```

### 2. Java

Java uses the `System.out` and `Scanner` classes for handling output and input, respectively.

#### Input in Java

To take input in Java, you can use the `Scanner` class, which is part of the `java.util` package.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int number = scanner.nextInt();
        System.out.println("You entered: " + number);
    }
}
```

**Output:**
```bash
Enter an integer: 10
You entered: 10
```

#### Output in Java

To display output, you can use the `System.out.println` method.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**Output:**
```bash
Hello, World!
```

### 3. Python

Python provides a straightforward way to handle I/O using the `input()` function for input and the `print()` function for output.

#### Input in Python

To take input from the user in Python, you can use the `input()` function, which returns the input as a string.

```python
number = input("Enter an integer: ")
print("You entered:", number)
```

**Output:**
```bash
Enter an integer: 7
You entered: 7
```

#### Output in Python

To display output, you can use the `print()` function.

```python
print("Hello, World!")
```

**Output:**
```bash
Hello, World!
```