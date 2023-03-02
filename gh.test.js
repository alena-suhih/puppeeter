let page;

describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });

  afterEach(() => {
    page.close();
  });

  test("The h1 header content'", async () => {
    setTimeout(async () => {
      const firstLink = await page.$("header div div a");
      await firstLink.click();
      await page.waitForSelector("h1");
      const title2 = await page.title();
      expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
    }, 60000);
  });

  test("The first link attribute", async () => {
    setTimeout(async () => {
      const actual = await page.$eval("a", (link) => link.getAttribute("href"));
      expect(actual).toEqual("#start-of-content");
    }, 70000);
  });

  test("The page contains Sign in button", async () => {
    setTimeout(async () => {
      const btnSelector = ".btn-large-mktg.btn-mktg";
      await page.waitForSelector(btnSelector, {
        visible: true,
      });
      const actual = await page.$eval(btnSelector, (link) => link.textContent);
      expect(actual).toContain("Get started with Team");
    }, 80000);
  });
});

test("The h1 header content About page", async () => {
  setTimeout(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/about");
    await page.$("header div div a");
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("Let's build from here");
  }, 60000);
});

test("The h1 header content Skills page", async () => {
  setTimeout(async () => {
    page = await browser.newPage();
    await page.goto("https://skills.github.com/");
    await page.$("header div div a");
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("GitHub Skills");
  }, 60000);
});

test("The h1 header content Services page", async () => {
  setTimeout(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/services/");
    await page.$("header div div a");
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual("The GitHub" < br > "Expert Services Team");
  }, 60000);
});
