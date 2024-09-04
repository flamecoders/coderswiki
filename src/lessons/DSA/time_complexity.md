---
title: Time Complexity
order: 2
author: Malay Patra
---

# Time Complexity

## Why Time Complexity?

In everyday life, we constantly compare similar things to make better decisions. For example, when shopping for potatoes, you might compare the prices:

- **30 Rs/Kg**
- **20 Rs/500g**

But how do we compare these?

First, we normalize the quantities to the same unit:

- **30 Rs for 1 Kg** or **30 Rs for 1000g**
- **20 Rs for 500g** or **40 Rs for 1000g**

Now, the comparison becomes straightforward. The first option is cheaper per kilogram.

Similarly, in computer science, we often need to compare two pieces of code to determine which one is more efficient. However, instead of cost and weight, we compare the performance of algorithms based on how much time it's taking to process the same amount of input data.

This brings us to the concept of **time complexity**.

## What is Time Complexity?

Imagine you are given two computers A and B. Both needs to perform common task.

**Task :** Print all the integers from 1 to 1000.

Now you simply write the code to fullfill the given task as below.

```python
import time

start_time = time.time()

for i in range(1, 1001):
    print(i)

end_time = time.time()
print(f"Time taken: {end_time - start_time} seconds")
```

and run the code in those two different computers.

**Outputs for A:**
```bash
...
999
1000
Time taken: 0.0006153583526611328 seconds
```
**Outputs for B:**
```bash
...
999
1000
Time taken: 0.0005153583526063514 seconds
```

From the results it's clear that B is a better computer than A ! Let's run again and verify that.

**Outputs for A:**
```bash
...
999
1000
Time taken: 0.0004982364822738292 seconds
```
**Outputs for B:**
```bash
...
999
1000
Time taken: 0.0005836583526742814 seconds
```

Wait what ? Now A took less time that B to run the same code, but why ?

The time taken to run the same code can vary even on the same machine due to factors like 
- background processes, 
- CPU load,
- memory usage. 

To consistently compare performance, we need a measure that is independent of specific hardware or environmental conditions—this is where **Time Complexity** becomes crucial. It only and only depends on the input size (`n`)

There are multiple notation to express **Time Complexity**, most popular one is **Big-O Notation**.

## Big-O Notation
In **Big-O Notation** we express time complexity with the below format
```text
O( <equation_in_terms_of_n> )

Example: O(n), O(n ^ 2) etc
```

where `n` stand for `input size`, and the equation says how the time taken is changing based on input size or `n`.

## Some of the most used notation

### 1. O(1)
Where time taken is not depended on size on input at all (`const time`).

**For example:**

```python
print("Hello world")
```
It takes almost same time to print `"Hello world"` and `"Hello Hello Hello world"`, proving that it doesn't depends on input size.

**Plot:**
![O(1) plot](./assets/o1.png)

> We get a little increase in the taken time as inpusize increases, however it's negligible.

