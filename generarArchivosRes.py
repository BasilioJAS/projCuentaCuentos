import os, sys

def getFilesInFolder(path):
    for fileOrFolder in os.listdir(path):
        fullpath = path+"/"+fileOrFolder
        
        if(os.path.isdir(fullpath)):
            getFilesInFolder(fullpath)
        else:
            listOfFiles.append([fileOrFolder, path])
            
            
        
    



listOfFiles = []
listOfFolders = []

getFilesInFolder("res")
i= 0

finalStr = ("var res = {") + "\n"


for file in listOfFiles:
    str = "    " + file[0].replace(".", "_") + " : \"" + file[1]+"/"+file[0] + "\",";
    finalStr = finalStr +(str) + "\n"
finalStr = finalStr[0:-2]+ "\n"
    

finalStr = finalStr + "\n};\n\n"

finalStr = finalStr + ("var g_resources = [];") + "\n"
finalStr = finalStr + ("for (var i in res) {") + "\n"
finalStr = finalStr + ("    g_resources.push(res[i]);") + "\n"
finalStr = finalStr + ("}") + "\n\n"

print (finalStr)
f = open("src\\resource.js", 'w')
f.write(finalStr)
f.close()
