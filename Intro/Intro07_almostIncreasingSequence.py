def almostIncreasingSequence(sequence):
    n=0
    value=-1000001
    
    for i in range (len(sequence)):
        print ("DEBUT DE LA BOUCLE I=",i," pour n=",n, " value=",value, "valeur sequence i =",sequence[i])
        if sequence[i]>value:
            if sequence[i]==sequence[0] and sequence[i]>sequence[1]:
                value=sequence[1]
            else:
                value=sequence[i]
                print ("value est egal à ",value)
        
        else:    
            if sequence[i]>sequence[i-2]:
                value=sequence[i]
            n+=1
            print (n)
        
        print ("FIN DE LA BOUCLE I=",i)
    
    if n>1:
        return False
    else:
        return True

print (almostIncreasingSequence ([1, 2, 3, 4, 3, 6]))
    
