import ContactUsPage from '../../PageObjects/ContactUs'

fixture`Testing Blog`
    .page`https://www.unosquare.com/contact-us/`

test('Testing Blog, Empty fields', async (t) => {
    await t
    .click(ContactUsPage.submitBtn)
    .expect(ContactUsPage.emailError.visible).ok()
});