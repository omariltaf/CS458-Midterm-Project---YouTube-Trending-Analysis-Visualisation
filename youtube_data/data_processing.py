import pandas as pd
import numpy as np
from collections import Counter
from random import randint



columnNames = ['video_id', 'title']

df = pd.read_csv("USvideos.csv", error_bad_lines=False)

print(df.describe())

categoryList = df['category_id'].tolist()
likesList = df['likes'].tolist()
dislikesList = df['dislikes'].tolist()
viewsList = df['views'].tolist()

categoryList = np.array(categoryList)
likesList = np.array(likesList)
dislikesList = np.array(dislikesList)
viewsList = np.array(viewsList)



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
    
    
    

