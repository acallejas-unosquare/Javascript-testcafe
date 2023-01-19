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

fixture`Exercise 3`
    .page`https://www.amazon.com/`

test('Amazon', async (t) => {
    var searchBox = Selector('input').withAttribute('id', 'twotabsearchtextbox');
    var results = Selector(getElementsByXPath("//a[@class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']")); 
    
    
    var firstPriceComplete = Selector('span').withAttribute('class', 'a-offscreen');
    var addCart = Selector('input').withAttribute('id', 'add-to-cart-button');
    var cart = Selector('a').withAttribute('id', 'nav-cart');
    var cartOption2 = Selector('a').withAttribute('id', 'attach-sidesheet-view-cart-button');
    var total = Selector('span').withAttribute('id', 'sc-subtotal-amount-buybox');
    var deleteBtn = Selector('input').withText('Eliminar');
    await t
    .maximizeWindow()
    .typeText(searchBox, 'Samsung Galaxy Note 20')
    .pressKey('enter')
    .takeScreenshot()
    .expect(results.count).gt(1, "Not results displayed");
    
    var price = await firstPriceComplete.innerText;
    console.log(price);

    await t
    .click(results.nth(0));

    var secondPrice = await firstPriceComplete.innerText;

    await t
    .expect(price).eql(secondPrice)
    .takeScreenshot()
    .click(addCart)
    .takeScreenshot()
    .click(cart)
    .takeScreenshot()
    .wait(3000);

    var finalPrice = await total.innerText;

    await t
    .expect(price).eql(finalPrice)
    .click(deleteBtn)
    .takeScreenshot();



});