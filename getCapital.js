let displayText;
let input;
let ok;
let invalidMessage = ' is not a valid country name or code.\nPlease enter a valid country name / code and try again.';

document.getElementById("submitBtn").onclick = async function () {
    // Ensure displayText is empty at beginning of each function call
    displayText = '';
    document.getElementById('displayOutput').innerHTML = displayText;
    input = document.getElementById("searchInput").value;

    let trimInput = encodeURIComponent(input.trim());
    const nameApiEndpoint = `https://restcountries.eu/rest/v2/name/${trimInput}`
    const codeApiEndpoint = `https://restcountries.eu/rest/v2/alpha/${trimInput}`

    const nameRes = await fetch(nameApiEndpoint);
    ok = nameRes.ok;

    if (ok) {
        const data = await getJson(nameRes);

        if (data.length == 1) {
            displayText = 'The capital of ' + data[0].name + ' is ' + data[0].capital;
        } else {
            displayText = 'Multiple countries found matching search. Please refine your search.'
            ok = false;
        }
    }

    if (!ok) {
        const codeRes = await fetch(codeApiEndpoint);
        ok = codeRes.ok;
        if (ok) {
            const data = await getJson(codeRes);
            displayText = 'The capital of ' + data.name + ' is ' + data.capital;
        } else {
            // if neither call returns 200 (therefore no message is set), display invalid input message
            if (displayText == '') {
                displayText = input + invalidMessage;
            }
        }
    }
    // set displayCapital value to current displayText message
    document.getElementById('displayOutput').innerHTML = displayText;

    async function getJson(res) {
        const resJson = await res.json();
        return resJson;
    }
};
