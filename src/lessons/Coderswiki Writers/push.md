---
title: How to push to Github
order: 4
---

> Note ! pushing code to github is a critical task, one mistake can make you cry .

hum `git push` use karte hai humne jo apne device mei code mei changes kiye usko github mei le jane ke liye

Lakin us se pahle 3 aur steps hota hai, you need to know this.

## setup
Git push use karne ke liye hume pahle terminal ko github ke sath connect karna padega. for that

```bash
git checkout -b main
git config --global user.name "Your username from github account"
git config --global user.email "your.email@example.com"
git remote add origin your_repo_url
```
**your_repo_url**: fork karne ke bad jo repo bana tha uska search bar se link

## `git add`
`git add` command use karte hai hum git ko ye bolne ke liye ki maine jo sab changes kiya iss file mei vo ek bar dekh lo sab theek hai ?
hum isko 2 tarike se use kar sakte hai

```bash
git add filename
```

is se bas vo file ke vare mei git ko pata chalega aur git uss file ko dekhega. agar tumhe sare files ko dikhana ho git ko, then use

```bash
git add .
```

Hum mostly yahi use karte hai !

## `git commit`
Git commit ek tarha se save karna hota hai, yeh ek check mark lagana hota hai ki "thik hai abh tak jo maine kiya all good". is se faida ye hota hai ki agar bad mei aur changes karenge ke bad yad aya ki mujhe vo pahle vaal code chahiye phir se, you can come back to that check mark.

Also, tumhe commit ke sath ek message likhna padega, must !
```bash
git commit -m "koi bhi message"
```

## `git push`
hamesaa, `git push` , `git add .` and `gid commit -m "message"` ke bad hi karna. after adding and commiting, run
```bash
git push origin main
```
