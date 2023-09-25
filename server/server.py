from flask import Flask, jsonify
from flask_cors import CORS
import weatherdata

app = Flask(__name__)
CORS(app)


@app.route('/weather', methods=['GET'])
def get_weather():
    return jsonify(weatherdata.weather_data)

@app.route('/weather/<date>', methods=['GET'])
def get_weather_for_date(date):
    weather = weather_data.get(date)
    if weather is None:
        return "Weather data not found for the specified date", 404
    return jsonify({date: weather})

if __name__ == '__main__':
    app.run(debug=True)