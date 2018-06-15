
# coding: utf-8

# In[1]:


get_ipython().system(u'curl -L https://raw.githubusercontent.com/mgiovann/machineLearningData/master/USvideos.csv -o USvideos.csv')
    
get_ipython().system(u'curl -L https://raw.githubusercontent.com/mgiovann/machineLearningData/master/USvideosOld.csv -o USvideosOld.csv')


# In[30]:


get_ipython().system(u'curl -L https://raw.githubusercontent.com/mgiovann/machineLearningData/master/youtube-new/USvideos.csv -o USvideos.csv')


# In[1]:


get_ipython().system(u'curl -L https://raw.githubusercontent.com/mgiovann/machineLearningData/master/youtube-new/CAvideos.csv -o CAvideos.csv')


# In[2]:


get_ipython().system(u'curl -L https://raw.githubusercontent.com/mgiovann/machineLearningData/master/youtube-new/DEvideos.csv -o DEvideos.csv')


# In[3]:



get_ipython().system(u'curl -L https://raw.githubusercontent.com/mgiovann/machineLearningData/master/youtube-new/FRvideos.csv -o FRvideos.csv')


# In[4]:


get_ipython().system(u'curl -L https://raw.githubusercontent.com/mgiovann/machineLearningData/master/youtube-new/GBvideos.csv -o GBvideos.csv')


# In[53]:


get_ipython().system(u'curl -L https://raw.githubusercontent.com/mgiovann/machineLearningData/master/youtube-new/US_category_id.json -o US_category_id.json')
get_ipython().system(u'curl -L https://raw.githubusercontent.com/mgiovann/machineLearningData/master/youtube-new/CA_category_id.json -o CA_category_id.json')
get_ipython().system(u'curl -L https://raw.githubusercontent.com/mgiovann/machineLearningData/master/youtube-new/DE_category_id.json -o DE_category_id.json')
get_ipython().system(u'curl -L https://raw.githubusercontent.com/mgiovann/machineLearningData/master/youtube-new/FR_category_id.json -o FR_category_id.json')
get_ipython().system(u'curl -L https://raw.githubusercontent.com/mgiovann/machineLearningData/master/youtube-new/GB_category_id.json -o GB_category_id.json')


# In[15]:


import pandas as pd
import numpy as np
from collections import Counter
from random import randint
import datetime
import time
import json
from pprint import pprint
import string


# In[36]:


df = pd.read_csv("GBvideos.csv", error_bad_lines=False)

df['publish_time'] = pd.to_datetime(df['publish_time'], format='%Y-%m-%dT%H:%M:%S.%fZ')
df['publishHour'] = df['publish_time'].dt.time



timeList = df['publishHour'].tolist()
timeList = np.array(timeList)

viewList = df['views']
viewList = np.array(viewList)
 
timeCountList = []
viewCountList = []
dataArray = []

print("\n\n")  
lastHour = datetime.time(00, 00, 00)
for i in range(0,8):
    hour = (i+1)*3
    nextHour = datetime.time(hour-1, 59, 59)

    newList = np.asarray(np.where(np.logical_and((timeList > lastHour),  (timeList < nextHour))))    
    
    asdf, count = newList.shape    
    
    
    viewCount = int(round(np.mean(viewList[newList])))
    viewCountList.append(viewCount)

    timeLabel = lastHour.strftime("%H:%M") + "-" + nextHour.strftime("%H:%M")
    dataArray.append(viewCount)
    
    delta = datetime.timedelta(seconds=1)
    lastHour = nextHour
    lastHour = (datetime.datetime.combine(datetime.date(1,1,1),lastHour) + delta).time()
    
    
# print(timeCountList)
print("\n\n\n")
print("Average views by publish time: ")
print(dataArray)
print("\n")
print("% views by publish time: ")
percentageArray = np.array(dataArray)
percentageArray = np.round((percentageArray / sum(percentageArray)) * 100, 1)
print(percentageArray)
print(sum(percentageArray))


# In[50]:


df = pd.read_csv("FRvideos.csv", error_bad_lines=False)
# print(list(df))
df['publish_time'] = pd.to_datetime(df['publish_time'], format='%Y-%m-%dT%H:%M:%S.%fZ')
df['publishHour'] = df['publish_time'].dt.time

timeList = df['publishHour'].tolist()
timeList = np.array(timeList)

# zeroToThree = 
# threeToSix = 
timeCountList = []
dataArray = []

# print(type(timeList[0]))
t= timeList[0]

print("\n\n")  
lastHour = datetime.time(00, 00, 00)
for i in range(0,8):
    hour = (i+1)*3
    nextHour = datetime.time(hour-1, 59, 59)

    newList = np.asarray(np.where(np.logical_and((timeList > lastHour),  (timeList < nextHour))))    
    
    asdf, count = newList.shape
    
    timeCountList.append(count)

    timeLabel = lastHour.strftime("%H:%M") + "-" + nextHour.strftime("%H:%M")
#     dataArray.append(count)
    dataArray.append(count)
    
    delta = datetime.timedelta(seconds=1)
    lastHour = nextHour
    lastHour = (datetime.datetime.combine(datetime.date(1,1,1),lastHour) + delta).time()
    
    
print("Count by publish time: ")
print(dataArray)


# In[74]:


#parse category files
with open('US_category_id.json') as f:
    data = json.load(f)
 
catList = []
catDict = {}
for i in range(0, 32):
    catList.append(data["items"][i]['snippet']['title'])
    catDict[data["items"][i]['id']] = data["items"][i]['snippet']['title']

print(catDict) 


# In[78]:


print(catDict['20'])


# In[103]:


df = pd.read_csv("USvideos.csv", error_bad_lines=False)

categoryList = df['category_id'].tolist()
likesList = df['likes'].tolist()
dislikesList = df['dislikes'].tolist()
viewsList = df['views'].tolist()

categoryList = np.array(categoryList)
likesList = np.array(likesList)
dislikesList = np.array(dislikesList)
viewsList = np.array(viewsList)    


print(Counter(categoryList).keys())
print(Counter(categoryList).values()) 
catCountKeys = np.array([v for v in Counter(categoryList).keys()])
catCountCounts = np.array([v for v in Counter(categoryList).values()])

print("\n\n")

# list of descriptions. Matches up with indices in catCountKeys
categoryDescriptions = ["Entertainment", "Science & Technology", "People & Blogs", "Comedy", "Film & Animation", 
                        "Howto & Style", "Music", "News & Politics", "Sports", "Education",
                       "Autos & Vehicles", "Gaming", "Pets & Animals", "Nonprofits & Activism", "Travel & Events", "Shows"]

print("catCountKeys: ", catCountKeys)
categoryListForPrint = []

graphList = []
count = 0
for category in catCountKeys:
    mean = round(np.mean(viewsList[np.where(categoryList == category)]))
    print("category: ", category, " average views = ", mean)
    graphList.append([catDict[str(category)], mean])
#     categoryListForPrint.append(catDict)
    count += 1


print("\n")


#sort by mean views
print("Category count")
print(sorted(graphList, key=lambda mean: mean[1]))



# In[104]:




sortedCats = sorted(graphList, key=lambda mean: mean[1])
sortedCats = np.array(sortedCats)
i, j = sortedCats.shape
printCatList = [] 
printMeanList = []
for i in range(i):
    m = int(float(sortedCats[i][1]))
    printMeanList.append(m)
    printCatList.append(sortedCats[i][0])
    
print(printMeanList)
print(printCatList)
print("\n\n")
print(sortedCats[:,0])
print(sortedCats[:,1])



# In[116]:


df = pd.read_csv("GBvideos.csv", error_bad_lines=False)

categoryList = df['category_id'].tolist()
likesList = df['likes'].tolist()
dislikesList = df['dislikes'].tolist()
viewsList = df['views'].tolist()

categoryList = np.array(categoryList)
likesList = np.array(likesList)
dislikesList = np.array(dislikesList)
viewsList = np.array(viewsList)    


# print(Counter(categoryList).keys())
# print(Counter(categoryList).values()) 
catCountKeys = np.array([v for v in Counter(categoryList).keys()])
catCountCounts = np.array([v for v in Counter(categoryList).values()])


# print("catCountKeys: ", catCountKeys)
categoryListForPrint = []

graphList = []
countryDict = {}
count = 0
for category in catCountKeys:
    mean = round(np.mean(viewsList[np.where(categoryList == category)]))
    countryDict[catDict[str(category)]] = mean

# print(countryDict)

otherCountryMeans = []

for k in printCatList:
    otherCountryMeans.append(countryDict[k])

print("Country category mean list: ")
print(otherCountryMeans)


# In[61]:




columnNames = ['video_id', 'title']
df = pd.read_csv("USvideos.csv", error_bad_lines=False)
print(df.describe())
print(list(df))


# In[30]:





categoryList = df['category_id'].tolist()
likesList = df['likes'].tolist()
dislikesList = df['dislikes'].tolist()
viewsList = df['views'].tolist()

categoryList = np.array(categoryList)
likesList = np.array(likesList)
dislikesList = np.array(dislikesList)
viewsList = np.array(viewsList)




# In[60]:


#random colors
colors = []
for i in range(20):
    colors.append('%06X' % randint(0, 0xFFFFFF))
    


print(Counter(categoryList).keys())
print(Counter(categoryList).values()) 
catCountKeys = np.array([v for v in Counter(categoryList).keys()])
catCountCounts = np.array([v for v in Counter(categoryList).values()])

print("\n\n")

# list of descriptions. Matches up with indices in catCountKeys
categoryDescriptions = ["Entertainment", "Science & Technology", "People & Blogs", "Comedy", "Film & Animation", 
                        "Howto & Style", "Music", "News & Politics", "Sports", "Education",
                       "Autos & Vehicles", "Gaming", "Pets & Animals", "Nonprofits & Activism", "Travel & Events", "Shows"]



graphList = []
count = 0
for category in catCountKeys:
    mean = round(np.mean(viewsList[np.where(categoryList == category)]))
    print("category: ", category, " average views = ", mean)
    graphList.append([categoryDescriptions[count], mean, colors[count]])
    count += 1


print("\n")


#sort by mean views
print("paste this into the js: \n")
print(sorted(graphList, key=lambda mean: mean[1]))
    
    
    


# In[9]:


oldYoutubeDF = pd.read_csv("USvideosOld.csv", error_bad_lines=False)

print(oldYoutubeDF.describe())

print(list(oldYoutubeDF))


# In[94]:


#random colors
colors = []
for i in range(20):
    colors.append('%06X' % randint(0, 0xFFFFFF))


publishTimeDF['publish_time'] = pd.to_datetime(oldYoutubeDF['publish_time'], format='%Y-%m-%dT%H:%M:%S.%fZ')
publishTimeDF['publishHour'] = publishTimeDF['publish_time'].dt.time

# print(publishTimeDF[['publishHour']].head)


timeList = publishTimeDF['publishHour'].tolist()
timeList = np.array(timeList)

# zeroToThree = 
# threeToSix = 
timeCountList = []
dataArray = []

# print(type(timeList[0]))
t= timeList[0]

# newTime = datetime.time(17, 14, 0)

# print(newTime)

if t > newTime:
    print("asdasd")
print("\n\n")  
lastHour = datetime.time(00, 00, 00)
for i in range(0,8):
    hour = (i+1)*3
    nextHour = datetime.time(hour-1, 59, 59)
#     print(i)
#     print(lastHour)
#     print(nextHour, "\n")
    

    
    
#     newList = np.where((timeList > lastHour) and (timeList < nextHour))
    newList = np.asarray(np.where(np.logical_and((timeList > lastHour),  (timeList < nextHour))))    
    
    asdf, count = newList.shape
    
    timeCountList.append(count)

    timeLabel = lastHour.strftime("%H:%M") + "-" + nextHour.strftime("%H:%M")
    dataArray.append([timeLabel, count, colors[i]])
    
    delta = datetime.timedelta(seconds=1)
    lastHour = nextHour
    lastHour = (datetime.datetime.combine(datetime.date(1,1,1),lastHour) + delta).time()
    
    
# print(timeCountList)
print("\n\n\n")
print(dataArray)
    


# In[98]:


#random colors
colors = []
for i in range(20):
    colors.append('%06X' % randint(0, 0xFFFFFF))


publishTimeDF['publish_time'] = pd.to_datetime(oldYoutubeDF['publish_time'], format='%Y-%m-%dT%H:%M:%S.%fZ')
publishTimeDF['publishHour'] = publishTimeDF['publish_time'].dt.time



timeList = publishTimeDF['publishHour'].tolist()
timeList = np.array(timeList)

viewList = oldYoutubeDF['views']
viewList = np.array(viewList)
 
timeCountList = []
viewCountList = []
dataArray = []

print("\n\n")  
lastHour = datetime.time(00, 00, 00)
for i in range(0,8):
    hour = (i+1)*3
    nextHour = datetime.time(hour-1, 59, 59)

    newList = np.asarray(np.where(np.logical_and((timeList > lastHour),  (timeList < nextHour))))    
    
    asdf, count = newList.shape    
    
    
    viewCount = int(round(np.mean(viewList[newList])))
    viewCountList.append(viewCount)

    timeLabel = lastHour.strftime("%H:%M") + "-" + nextHour.strftime("%H:%M")
    dataArray.append([timeLabel, viewCount, colors[i]])
    
    delta = datetime.timedelta(seconds=1)
    lastHour = nextHour
    lastHour = (datetime.datetime.combine(datetime.date(1,1,1),lastHour) + delta).time()
    
    
# print(timeCountList)
print("\n\n\n")
print(dataArray)
    


# In[4]:


df = pd.read_csv("USvideos.csv", error_bad_lines=False)
print(list(df))


# In[11]:


likesList = np.array(df['likes'].tolist())
dislikesList = np.array(df['dislikes'].tolist())
commentList = np.array(df['comment_count'].tolist())

print(round(np.mean(likesList)))
print(round(np.mean(dislikesList)))
print(round(np.mean(commentList)))


# In[10]:


df = pd.read_csv("USvideos.csv", error_bad_lines=False)



# In[22]:


# print (list(df))
tags = np.array(df['tags'].tolist())
# print (tags[0:10])
print(tags[1], "\n\n\n")
s = str(tags[1])
# print(s.translate(string.punctuation))

table = str.maketrans({key: None for key in string.punctuation})
new_s = s.translate(table) 
print(type(s))
print(s)


# In[23]:




