from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

openai.api_key = 'your_openai_api_key here'

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.get_json()
    notes = data['notes']

    response = openai.Completion.create(
        model="text-davinci-003",
        prompt=f"Summarize these notes: {notes}",
        max_tokens=150
    )

    summary = response.choices[0].text.strip()
    return jsonify({'summary': summary})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
