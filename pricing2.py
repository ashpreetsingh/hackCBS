import sys
from datetime import datetime
def linear(base,days,bb):
    return base+days/bb
def price_gen():
    for item in sys.argv[1]:
        dd,mm,yyyy=item["mfd"].split("-")
        x=(datetime.now()-datetime(int(yyyy),int(mm),int(dd)))
        item["cost"]=linear(item["base"],x.days,item["bb"])
    print(sys.argv[1])
    sys.stdout.flush()




def main():
    price_gen()
