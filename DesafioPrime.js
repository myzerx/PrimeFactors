// The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143?  
function Calculate() {
    const inputValue = 600851475143; // 13195
    result = inputValue
    index = 2


    do {
        if (result % index == 0) {
            console.log("\n", result, "Divided by", index)
            result = result / index

        }
        else {
            index++;

        }
    } while (result > index)
    console.log("\n The Largest prime factor of", inputValue, "is", result)
}
Calculate()

