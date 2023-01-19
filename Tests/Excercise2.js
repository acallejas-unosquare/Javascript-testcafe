import { Selector } from 'testcafe';

const getElementsByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
    const items = [];
    let item = iterator.iterateNext();
    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }
    return items;
});
export default function (xpath) {
    return Selector(getElementsByXPath(xpath));
}

fixture`Exercise 2`
    .page`https://blog.unosquare.com/`

    
    test("Search bar validation", async (t) => {
        var searchBar = Selector('input').withAttribute("id", "search-bar");
        var searchBtn = Selector('button').withAttribute("class", "search-submit link-blue");
        var results  =  Selector(getElementsByXPath("//h2[@class='title-header']"));
        
        await t
        .maximizeWindow()
        .typeText(searchBar, "unosquare")
        .click(searchBtn)
        .takeScreenshot()
        .expect(results.exists).ok({ timeout: 500 })
        .expect(results.count).gt(1, "Exist more than 1 result")
        
    });
    
    test("Validate Posts", async (t) => {
        var recentPostBtn = Selector('input').withAttribute('id', 'tab1');
        var popularPostBtn =  Selector('input').withAttribute('id', 'tab2');
        var postList = Selector(getElementsByXPath("//section[@id='content1']//*//a[@class='post-title']"));
        
        await t
        .expect(recentPostBtn.exists).ok({ timeout: 500 })
        .expect(popularPostBtn.exists).ok({ timeout: 500 })
        .expect(recentPostBtn.checked).eql(true)
        .takeScreenshot()
        console.log(popularPostBtn.attributes);
    }); 

test("Categories", async (t) => {
    var categories = Selector(getElementsByXPath("//a[@class='topic-categories']"));

    await t
    .expect(categories.count).gt(90, "Less categories as expected")
    .expect(Selector('h1').innerText).contains("DIGITAL", "Title not containt DIGITAL")
    .expect(Selector('h1').innerText).notContains("JAVA", "The title shouldn't contain JAVA")
    
});



