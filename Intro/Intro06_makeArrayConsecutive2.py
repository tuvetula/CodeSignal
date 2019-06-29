def makeArrayConsecutive2(statues):
    maxvalue=0
    minvalue=20
    r=0
    n=(len(statues))
    for i in range (len(statues)):
        if maxvalue<statues[i]:
            maxvalue=statues[i]          
    
    for j in range (len(statues)):
        if minvalue>statues[j]:
            minvalue=statues[j]
    
    r=((maxvalue-minvalue)+1)-n
    return r
   
print (makeArrayConsecutive2([0,3]))
