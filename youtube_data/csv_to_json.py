import csv
import json

with open("USvideos.csv") as f:
    reader = csv.DictReader(f)
    rows = list(reader)

with open("USvideos.json", "w") as f:
    json.dump(rows, f)
