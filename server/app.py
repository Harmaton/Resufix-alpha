from flask import Flask, request, jsonify
from pyresparser import ResumeParser
import os
import spacy
import nltk
nltk.download('stopwords')

spacy.load('en_core_web_sm')
app = Flask(__name__)

@app.route("/send", methods = ["POST"]) 
def receive_resume():
    resume_directory = request.form["resume_directory"]
    return "processing resume ..."

@app.route("/return", methods = ["GET"])
def process_resume():
    try:
        #resume_directory = request.args.get("resume_directory")
        #resume_path = os.path.join(resume_directory, "resume.pdf")
        data = ResumeParser(r'C:\Users\user\Downloads\React_Juniour_Dev.pdf').get_extracted_data()
        return jsonify(data)
    
    except Exception as e:
        return jsonify({"error": str(e)})
        #return "resume processed json file returned ..."


    
if __name__ == '__main__':
    app.run(debug=True)

