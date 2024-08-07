---
title: How to contribute in Coderswiki
order: 0
---

Coderswiki uses `markdown` under the hood, that's why it's super easy to add new articles into this wiki.

### 1. Fork the repo
Visit [coderswiki](https://github.com/flamecoders/coderswiki) github repo and make a fark of it

### 2. Add your lesson
Yo can add a new lesson just by creating a new folder in 
```bash
coderswiki > src > lessons
```
Name of the folder will be taken as name of the lesson too

### 3. add chapters into lesson
Make a markdown file ending with .md extension. for example: how_to_code.md.

In that markdown file you must add a title and order at the top
```markdown
---
title: Hello World in Java
order: 0
---
```

And now are can add any content into that chapter , following the below syntax guide

- `#` <- Heading
- `##` <- Sub heading
- `###` <- Sub sub heading
- \`code\` <- Inline code
- \`\`\`lang_name \`\`\` <- multi line code
- any other text <- paragraph