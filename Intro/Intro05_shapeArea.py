def shapeArea(n):
    j=0
    r=0
    for i in range (0,n):
        j+=i
        r=j*4+1
    return r

print (shapeArea(10))