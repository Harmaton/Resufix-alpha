from flask import Flask, request, jsonify
from pyresparser import ResumeParser

app = Flask(__name__)


@app.route("/post_cv", methods = ["POST"])
def processCv():
    try:
        #get the file from the request
        resume = request.files['file']
        #save the file to the server
        resume.save(resume)
        #parse the file
        data = ResumeParser(resume).get_extracted_data()

        return jsonify(data)
    except:
        return "Error"
    
    
if __name__ == '__main__':
    app.run(debug=True)