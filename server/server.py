from flask import Flask, jsonify
from flask_cors import CORS
import weatherdata

app = Flask(__name__)
CORS(app)


@app.route('/weather', methods=['GET'])
def get_weather():
    return jsonify(weatherdata.weather_data)

def filter_weather_by_date(dt_txt):
    filtered_data = [item for item in weatherdata.weather_data["list"] if item["dt_txt"] == dt_txt]
    return filtered_data


@app.route('/weather/<date>', methods=['GET'])
def get_weather_for_date(date):
    weather = filter_weather_by_date(date)
    if weather is None:
        return "Weather data not found for the specified date", 404
    return jsonify({date: weather})

if __name__ == '__main__':
    app.run(debug=True)