let multiCountriesMsg = 'Multiple countries found matching search. Please refine your search.';
let invalidMsg = ' is not a valid country name or code. Please enter a valid country name / code and try again.';
let countryFoundMsg = 'The capital of ';

const fullCountry = 'Canada';
const partCountry = 'can';
const fullCapital = 'Ottawa';
const multiMatch = "united";
const spaceCountry = 'New Zealand';
const partSpaceCountry = 'new z';
const spaceCountryCapital = 'Wellington';
const capsCode = 'NZL';
const invalidName = 'Murica';
const invalidCode = "EUR";
const alphaNum = 'A1ban3a';
const specChar = 'c#ina';

/* The following test cases validate the following scenarios:
    * POSITIVE *
    - PT1: Capital is displayed when searching using a valid single word full country name
    - PT2: Capital is displayed when searching using a valid partial country name with only one match
    - PT3: Capital is displayed when searching using a valid full country name containing spaces
    - PT4: Capital is displayed when searching using a valid partial country name containing spaces
    - PT5: Capital is displayed when searching using a valid country code

    * NEGATIVE *
    - NT1: An appropriate error message is displayed when searching using a valid partial country name with multiple matches
    - NT2: An appropriate error message is displayed when searching using an invalid country name
    - NT3: An appropriate error message is displayed when searching using an invalid country code
    - NT4: An appropriate error message is displayed when searching using an invalid country name containing numbers
    - NT5: An appropriate error message is displayed when searching using an invalid country name containing special characters

    Note: Some of these tests may not necessarily be appripriate for this type of exercise / app and are included simply
    as an example of common tests that would be written for a web app, though it is not at all exhaustive
*/
describe('Country Capital Search', () => {
    // *** POSITIVE TESTS ***

    // open browser and validate title
    it('should open the URL and verify the title', () => {
        browser.url('http://127.0.0.1:8887');
        expect(browser).toHaveTitle('REST API Countries - Country Capital');
    });

    // PT1
    it('should search for a valid single word full country name and verify the capital is displayed', () => {
        // get references to elements needed for test
        const searchInput = $('#searchInput');
        const submitBtn = $('#submitBtn');
        const displayCapital = $('#displayOutput');

        // clear input field before sending input
        searchInput.clearValue();
        // input search value and click submit button
        searchInput.addValue(fullCountry);
        submitBtn.click();

        // validate output
        expect(displayCapital).toHaveText(countryFoundMsg + fullCountry + ' is ' + fullCapital);
    })

    // PT2
    it('should search for a valid partial country name and verify the capital is displayed', () => {
        // get references to elements needed for test
        const searchInput = $('#searchInput');
        const submitBtn = $('#submitBtn');
        const displayCapital = $('#displayOutput');

        // clear input field before sending input
        searchInput.clearValue();
        // input search value and click submit button
        searchInput.addValue(partCountry);
        submitBtn.click();

        // validate output
        expect(displayCapital).toHaveText(countryFoundMsg + fullCountry + ' is ' + fullCapital);
    })

    // PT3
    it('should search for a valid full country name with spaces and verify the capital is displayed', () => {
        // get references to elements needed for test
        const searchInput = $('#searchInput');
        const submitBtn = $('#submitBtn');
        const displayCapital = $('#displayOutput');

        // clear input field before sending input
        searchInput.clearValue();
        // input search value and click submit button
        searchInput.addValue(spaceCountry);
        submitBtn.click();

        // validate output
        expect(displayCapital).toHaveText(countryFoundMsg + spaceCountry + ' is ' + spaceCountryCapital);
    })

    // PT4
    it('should search for a valid partial country name with spaces and verify the capital is displayed', () => {
        // get references to elements needed for test
        const searchInput = $('#searchInput');
        const submitBtn = $('#submitBtn');
        const displayCapital = $('#displayOutput');

        // clear input field before sending input
        searchInput.clearValue();
        // input search value and click submit button
        searchInput.addValue(partSpaceCountry);
        submitBtn.click();

        // validate output
        expect(displayCapital).toHaveText(countryFoundMsg + spaceCountry + ' is ' + spaceCountryCapital);
    })

    // PT5
    it('should search for a valid country code and verify the capital is displayed', () => {
        // get references to elements needed for test
        const searchInput = $('#searchInput');
        const submitBtn = $('#submitBtn');
        const displayCapital = $('#displayOutput');

        // clear input field before sending input
        searchInput.clearValue();
        // input search value and click submit button
        searchInput.addValue(capsCode);
        submitBtn.click();

        // validate output
        expect(displayCapital).toHaveText(countryFoundMsg + spaceCountry + ' is ' + spaceCountryCapital);
    })

    // *** NEGATIVE TESTS ***

    // NT1
    it('should search for a valid partial country name with multiple matches and verify the error message is displayed', () => {
        // get references to elements needed for test
        const searchInput = $('#searchInput');
        const submitBtn = $('#submitBtn');
        const displayCapital = $('#displayOutput');

        // clear input field before sending input
        searchInput.clearValue();
        // input search value and click submit button
        searchInput.addValue(multiMatch);
        submitBtn.click();

        // validate output
        expect(displayCapital).toHaveText(multiCountriesMsg);
    })

    // NT2
    it('should search for an invalid country name and verify the correct error message is displayed', () => {
        // get references to elements needed for test
        const searchInput = $('#searchInput');
        const submitBtn = $('#submitBtn');
        const displayCapital = $('#displayOutput');

        // clear input field before sending input
        searchInput.clearValue();
        // input search value and click submit button
        searchInput.addValue(invalidName);
        submitBtn.click();

        // validate output
        expect(displayCapital).toHaveText(invalidName + invalidMsg);
    })

    // NT3
    it('should search for an invalid country code and verify the correct error message is displayed', () => {
        // get references to elements needed for test
        const searchInput = $('#searchInput');
        const submitBtn = $('#submitBtn');
        const displayCapital = $('#displayOutput');

        // clear input field before sending input
        searchInput.clearValue();
        // input search value and click submit button
        searchInput.addValue(invalidCode);
        submitBtn.click();

        // validate output
        expect(displayCapital).toHaveText(invalidCode + invalidMsg);
    })

    // NT4
    it('should search for an invalid country name containing numbers and verify the correct error message is displayed', () => {
        // get references to elements needed for test
        const searchInput = $('#searchInput');
        const submitBtn = $('#submitBtn');
        const displayCapital = $('#displayOutput');

        // clear input field before sending input
        searchInput.clearValue();
        // input search value and click submit button
        searchInput.addValue(alphaNum);
        submitBtn.click();

        // validate output
        expect(displayCapital).toHaveText(alphaNum + invalidMsg);
    })

    // NT5
    it('should search for an invalid country name containing special characters and verify the correct error message is displayed', () => {
        // get references to elements needed for test
        const searchInput = $('#searchInput');
        const submitBtn = $('#submitBtn');
        const displayCapital = $('#displayOutput');

        // clear input field before sending input
        searchInput.clearValue();
        // input search value and click submit button
        searchInput.addValue(specChar);
        submitBtn.click();

        // validate output
        expect(displayCapital).toHaveText(specChar + invalidMsg);
    })
});

