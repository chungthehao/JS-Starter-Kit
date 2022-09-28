import { expect } from "chai";
import { JSDOM } from "jsdom";
import fs from "fs";

describe("My first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say welcome...", () => {
    const index = fs.readFileSync("./src/index.html");
    const dom = new JSDOM(index);

    const h2 = dom.window.document.getElementsByTagName("h2")[0];
    expect(h2.innerHTML).to.equal(
      "Welcome to Henry's JS Development Environment!"
    );

    dom.window.close();
  });
});
