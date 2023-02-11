from flask import Flask, request
from pyresparser import ResumeParser
from docx import Document

app = Flask(__name__)


@app.route("/post_cv", methods = ["POST"])
def processCv(resume):
    try:
        doc = Document()
        with open(resume, r) as file:
            doc.add_paragraph(file.read())
        doc.save('res.docx')
        data = ResumeParser('res.docx').get_extracted_data()
    except:
        data = ResumeParser(resume).get_extracted_data()
    
    return data
    

if __name__ == '__main__':
    app.run(debug=True)