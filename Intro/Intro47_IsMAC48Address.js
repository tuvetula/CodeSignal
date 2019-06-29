function isMAC48Address(inputString) {
    return /^([0-9A-F]{2}[-]){5}[0-9A-F]{2}$/.test(inputString);
}
console.log(isMAC48Address("0A-4F-46-87-1C-2E"));