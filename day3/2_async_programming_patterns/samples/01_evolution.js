import fs from "node:fs";

// Callback (hell)
fs.readFile("./user.json", "utf8", (error, userData) => {
  if (error) {
    console.log(error);
    return;
  }

  const user = JSON.parse(userData);
  fs.readFile("./regions.json", (error, regionsData) => {
    if (error) {
      console.log(error);
      return;
    }

    const regions = JSON.parse(regionsData);
    const userRegionNewsIDs = regions[user.region];

    fs.readFile("./news.json", (error, newsData) => {
      if (error) {
        console.log(error);
        return;
      }

      const allNews = JSON.parse(newsData);
      const userNews = allNews.filter((article) =>
        userRegionNewsIDs.includes(article.id)
      );

      userNews.forEach((news) => {
        console.log(news.headline);
        console.log(news.content);
        console.log("-----");
      });
    });
  });
});

// The fs module offers capabilities to read from and write to files.

// Use the following signature for fs.writeFile():
// fs.writeFile(filename, data, [encoding], callback)

// Hints:
// 1. 'filename' is the name of the file you want to write to.
// 2. 'data' is the content you want to write to the file.
// 3. 'encoding' is optional, but if specified, can be set to 'utf8' for plain text.
// 4. The 'callback' function receives an error as its only argument. Check this to ensure the file was written successfully.

// After creation, utilize fs.readFile() to read and display its content.
