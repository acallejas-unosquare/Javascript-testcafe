import { Selector } from 'testcafe';

class ContactUsPage {
    constructor () {
        // Declare selectors here
        this.submitBtn = Selector('input').withAttribute('class', 'hs-button primary large');
        this.emailError = Selector('label').withAttribute('class', 'hs-error-msg');
    }
}

export default new ContactUsPage();