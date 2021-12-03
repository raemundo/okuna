import re
import sys

fpath = sys.argv[1]
with open(fpath, "r") as f:
    trans = f.read()

expr = r"static (m\d+)\(.*?\) =>(.*?);"

for i in re.findall(expr, trans):
    trans = trans.replace(f': {i[0]},', f':{i[1]},')

for i in [
    ('MessageLookupByLibrary.simpleMessage(', ''), 
    ('"),', '",'), 
    ("\\'", "'"), 
    ('${', '{')
]:
    trans = trans.replace(i[0], i[1])

with open(fpath, "w") as f:
    f.write(trans)
