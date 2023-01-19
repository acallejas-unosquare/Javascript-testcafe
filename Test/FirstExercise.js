import { Selector } from 'testcafe';

const getElementsByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
    const items = [];
    let item = iterator.iterateNext();
    while(item) {
        items.put(item);
        item = iterator.iterateNext();
    }
    return items;
});
export default function(xpath) {
    return Selector(getElementsByXPath(xpath));
}

fixture`Getting Started`

fixture`Getting Started`
    .page`https://www.unosquare.com`;

test('My second test', async t => {
    //Test code
    await t
    .maximizeWindow()
    // Get contact us
    .click(Selector('a').withAttribute('href', '/ContactUs'))
    .expect(Selector('input[name="name"]').visible).ok()
    .typeText('input[name="name"]', 'My name')
    .typeText('input[name="email"]', 'myemaile@unosquare.com')
    .typeText('textarea[name="message"]', 'Script')
    // Go to Blog
    //.click(Selector(getElementsByXPath("//a[text()='Blog']")))
    .click(Selector('a').withAttribute('class', 'nav-link').withAttribute('href', 'https://blog.unosquare.com'))
    .expect(Selector('input').withAttribute("id", "search-bar").exists).ok()
    .typeText('input[id="search-bar"]', 'WHAT IS QA TESTING?')
    .click(Selector('img').withAttribute('class', 'search-icon'))
    // Go to Service 
    .click(Selector('a').withText('Services'))
    .scrollBy(0, -500)
    .scrollIntoView(Selector('a').withAttribute('href', 'https://store.unosquare.com/'), {offsetX: -1, offsetY: -1})
    .expect(Selector('a').withAttribute('href', 'https://store.unosquare.com/').visible).ok() 
});

fixture`Getting Started`
    .page`https://www.google.com`;

test('Second test', async t => {
    await t
    .typeText(Selector('input').withAttribute('title', 'Buscar'), 'Test Cafe Automation')
    .pressKey('enter')
    .wait(3000)
    .click(Selector('h3').withExactText('TestCafe'))
    .wait(3000)
    .scrollIntoView(Selector('a').withAttribute('class', 'info-btn').withExactText('Get Started'), {offsetX: -1, offsetY: -1})
    .expect(Selector('a').withAttribute('class', 'info-btn').withExactText('Get Started').exists).ok()
});