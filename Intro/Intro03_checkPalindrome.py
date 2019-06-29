def checkPalindrome(inputString):
    for i in range (len(inputString)):
        if inputString[i]!=inputString[len(inputString)-i-1]:
            return False
    return True


print (checkPalindrome("aaabaaaa"))
