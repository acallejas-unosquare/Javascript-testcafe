import { Selector } from 'testcafe';

fixture`Getting Started`

fixture`Getting Started`
    .page`https://www.unosquare.com/ContactUs`;

test('My second test', async t => {
    //Test code
    await t
    .maximizeWindow()
    .expect(Selector('input[name="name"]').visible).ok()
    .typeText('input[name="name"]', 'My name')
    .typeText('input[name="email"]', 'myemaile@unosquare.com')
    .typeText('textarea[name="message"]', 'The script can write a message!')
})