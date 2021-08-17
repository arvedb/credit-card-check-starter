// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

// CreditCardCompanies Array
let creditCardCompanies = [
    {
        companyName: 'Amex (American Express)',
        digit: 3
    },

    {
        companyName: 'Visa',
        digit: 4
    },

    {
        companyName: 'Mastercard',
        digit: 5
    },

    {
        companyName: 'Discover',
        digit: 6
    }
]


// Add your functions below:

const validateCred = array => {
    let newArray = array.slice().reverse();
    // console.log(newArray);
    // console.log(`newArray Original: ${newArray}`);
    let sumOfArray = 0;
    let isValid = false;

    for(let i = 1 ; i < newArray.length; (i  += 2)){
        newArray[i] = newArray[i]*2 - (((newArray[i]*2) > 9) ? 9 : 0);
        // console.log(i);
    }

    sumOfArray = newArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    // console.log(`newArray Neu: ${newArray}`);
    // console.log(`Sum of Array: ${sumOfArray}`);
    // console.log(sumOfArray % 10);
    isValid = ((sumOfArray % 10)) ? false : true;
    return isValid;
}

const findInvalidCards = creditCards => creditCards.filter(card => !validateCred(card));

const idInvalidCardCompanies = creditCards => {

    let companiesOfInvalidCreditCards = [];

    for(let card of creditCards){

        if(creditCardCompanies.findIndex(company => company.digit === card[0]) === -1){

            console.log(`Company of digit ${card[0]} not found.`);
            return null

        } 
        
        else if(!companiesOfInvalidCreditCards.includes(creditCardCompanies[creditCardCompanies.findIndex(company => company.digit === card[0])].companyName)){

            companiesOfInvalidCreditCards.push(creditCardCompanies[creditCardCompanies.findIndex(company => company.digit === card[0])].companyName);

        }
    }

    return companiesOfInvalidCreditCards;
}

/* console.log(validateCred(valid2));
console.log(validateCred(invalid1));
console.log(validateCred(mystery1));
console.log(findInvalidCards(batch)); */

console.log(idInvalidCardCompanies(findInvalidCards(batch)));









