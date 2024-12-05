cuda = int(input("type the degree"))
def od(images):
    if images%2 == 0:
        print(images-1)
    else:
        print(images)
def calculateimag(cudas):
    images = 360/cudas
    images = int(images)
    od(images)
    
calculateimag(cuda)

