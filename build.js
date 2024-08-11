const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");
const ejs = require("ejs");
const matter = require("gray-matter");
const hljs = require("highlight.js");

// Load plugins
const md = MarkdownIt({
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) { }
        }
        return "";
    },
    linkify: true,
});

// Custom plugin definations
function wrapImages(md) {
    md.renderer.rules.image = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        token.attrs[token.attrIndex('src')][1] = md.utils.escapeHtml(token.attrs[token.attrIndex('src')][1]);
        const imgTag = self.renderToken(tokens, idx, options);
        return `<div class="img-centerer"><div class="img-container">${imgTag}</div></div>`;
    };
}

// Load the custom plugins
md.use(wrapImages);


const srcPath = path.join(__dirname, "src");
const buildPath = path.join(__dirname, "build");
const lessonsPath = path.join(srcPath, "lessons");
const layoutPath = path.join(srcPath, "layout.ejs");
const indexPath = path.join(srcPath, "index.ejs");
const indexHtmlPath = path.join(buildPath, "index.html");
const lessons = [];

// Utility functions
const getDirectories = (source) =>
    fs
        .readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);

const getMarkdownFiles = (source) =>
    fs
        .readdirSync(source, { withFileTypes: true })
        .filter(
            (dirent) =>
                !dirent.isDirectory() && path.extname(dirent.name) === ".md",
        )
        .map((dirent) => dirent.name);

const parseMarkdownFile = (filePath) => {
    const content = fs.readFileSync(filePath, "utf-8");
    const parsed = matter(content);
    const title = parsed.data.title || path.basename(filePath, ".md");
    const order = parsed.data.order || 0;
    const author = parsed.data.author || 'unknown';
    const renderedContent = md.render(parsed.content);
    const outputFileName = path.basename(filePath, ".md") + ".html";
    return { title, order, renderedContent, outputFileName, author };
};

const copyFolderRecursive = (src, dest) => {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyFolderRecursive(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
};

const deleteFolderRecursive = (folderPath) => {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const currentPath = path.join(folderPath, file);
            if (fs.lstatSync(currentPath).isDirectory()) {
                deleteFolderRecursive(currentPath);
            } else {
                fs.unlinkSync(currentPath);
            }
        });
        fs.rmdirSync(folderPath);
    }
};

// Ensure build path
if (fs.existsSync(buildPath)) {
    fs.rmSync(buildPath, { recursive: true });
}
fs.mkdirSync(buildPath);

getDirectories(lessonsPath).forEach((l) => {
    const lessonDir = path.join(lessonsPath, l);
    const lesson = {
        name: l,
        location: l,
        chapters: [],
    };
    const chapters = getMarkdownFiles(lessonDir);
    chapters.forEach((c) => {
        const chapterPath = path.join(lessonDir, c);
        const { title, order, renderedContent, outputFileName, author } =
            parseMarkdownFile(chapterPath);
        const chapterUrl = `/${l}/${outputFileName}`;
        lesson.chapters.push({
            title,
            order,
            author,
            content: renderedContent,
            url: chapterUrl,
            filename: outputFileName,
        });
    });

    if (chapters.length > 0) {
        // Sort chapters by order
        const sortedChapters = lesson.chapters.sort(
            (a, b) => a.order - b.order,
        );
        lesson.chapters = sortedChapters;

        // Set the lesson URL to the first chapter's URL
        lesson.url = sortedChapters[0].url;

        lessons.push(lesson);
    } else {
        console.log(
            `⚠ Skipping lesson: ${l}\n⚠ No chapters within this lesson`,
        );
    }
});

lessons.forEach((lesson) => {
    fs.mkdirSync(path.join(buildPath, lesson.location));
    const sortedChapters = lesson.chapters.sort((a, b) => a.order - b.order);
    lesson.chapters = sortedChapters;

    sortedChapters.forEach((chapter) => {
        const currentUrl = chapter.url;
        ejs.renderFile(
            layoutPath,
            {
                chapters: sortedChapters,
                content: chapter.content,
                name: lesson.name,
                author: chapter.author,
                currentUrl,
            },
            (err, str) => {
                if (err) {
                    console.error("⨯ Error rendering EJS:", err);
                    return;
                }

                const outputFilePath = path.join(
                    buildPath,
                    lesson.location,
                    chapter.filename,
                );
                fs.writeFileSync(outputFilePath, str);
            },
        );
    });
});

ejs.renderFile(indexPath, { lessons }, (err, str) => {
    if (err) {
        console.error("⨯ Error rendering index.ejs:", err);
        return;
    }

    fs.writeFileSync(indexHtmlPath, str);
});

console.log("✓ Lessons processed and HTML files generated successfully!");
