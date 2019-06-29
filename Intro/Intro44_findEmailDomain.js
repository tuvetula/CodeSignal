function findEmailDomain(address) {
    return result = address.split(/[\s\S]*@/).join("");
}
console.log(findEmailDomain("cqnifc\"\"]ç(@gmail.com"));