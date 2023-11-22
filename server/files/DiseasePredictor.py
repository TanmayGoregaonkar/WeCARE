import pickle
import numpy as np
# import statistics as st

with open(r"C:\Users\sable\Documents\WebDev\Backend\Practice\server\files\predictModel2.pkl",'rb') as file:
	models = pickle.load(file)
	
final_rf_model = models['model3']
final_nb_model = models['model2']
final_svm_model = models['model1']

symptomsArr = models['colData']
# print(symptomsArr)
preClassesreq = models['preClasses']

# Creating a symptom index dictionary to encode the
# input symptoms into numerical form
symptom_index = {}
for index, value in enumerate(symptomsArr):
	symptom = " ".join([i.capitalize() for i in value.split("_")])
	# print(symptom)
	symptom_index[symptom] = index

data_dict = {
	"symptom_index":symptom_index,
	"predictions_classes":preClassesreq
}

def mode(lst):
     
    # creating a dictionary
    freq = {}
    for i in lst:
       
        # mapping each value of list to a
        # dictionary
        freq.setdefault(i, 0)
        freq[i] += 1
         
    # finding maximum value of dictionary
    hf = max(freq.values())
     
    # creating an empty list
    hflst = []
     
    # using for loop we are checking for most
    # repeated value
    for i, j in freq.items():
        if j == hf:
            hflst.append(i)
             
    # returning the result
    return hflst

# Defining the Function
# Input: string containing symptoms separated by commas
# Output: Generated predictions by models
def predictDisease(symptoms):
	symptoms = symptoms.split(",")
	
	# creating input data for the models
	input_data = [0] * len(data_dict["symptom_index"])
	for symptom in symptoms:
		# print(symptom)
		index = data_dict["symptom_index"][symptom]
		input_data[index] = 1
		
	# reshaping the input data and converting it
	# into suitable format for model predictions
	input_data = np.array(input_data).reshape(1,-1)
	
	# generating individual outputs
	rf_prediction = data_dict["predictions_classes"][final_rf_model.predict(input_data)[0]]
	nb_prediction = data_dict["predictions_classes"][final_nb_model.predict(input_data)[0]]
	svm_prediction = data_dict["predictions_classes"][final_svm_model.predict(input_data)[0]]
	
	# making final prediction by taking mode of all predictions
	final_prediction = mode([rf_prediction, nb_prediction, svm_prediction])[0]
	predictions = {
		"rf_model_prediction": rf_prediction,
		"naive_bayes_prediction": nb_prediction,
		"svm_model_prediction": svm_prediction,
		"final_prediction":final_prediction
	}
	return final_prediction

pyInp = input()
# Testing the function
print(predictDisease(pyInp))
