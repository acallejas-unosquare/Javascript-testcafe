import BlogPage from '../../PageObjects/Blog'

fixture`Testing Blog`
    .page`https://www.unosquare.com/contact-us/`

test('Testing Blog', async (t) => {

    await t
    .maximizeWindow();
});