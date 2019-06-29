def adjacentElementsProduct(inputArray):
   j=0
   n=inputArray[j]*inputArray[j+1]
   for j in range (len(inputArray)-1):
      if inputArray[j]*inputArray[j+1]>n:
          n=inputArray[j]*inputArray[j+1]   
   return n

print (adjacentElementsProduct([3, 6, -2, -5, 7, 3]))


#def adjacentElementsProduct(inputArray):
#   j=0
#   n=inputArray[j]*inputArray[j+1]
#   for j in range (len(inputArray)-1):
#      k=inputArray[j]*inputArray[j+1]
#      if k>n:
#         n=k
#   return n