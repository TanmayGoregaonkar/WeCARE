import sys
import pickle

input_string = sys.stdin.readline()
pyinp = list(map(int,input_string.split()))
print(pyinp)


with open(r"C:\Users\sable\Documents\WebDev\Backend\Practice\server\files\classifier2.pkl", 'rb') as file:
    model = pickle.load(file)

print("Hello")

pred = model.predict([pyinp])

print(pred.astype(int))