from flask import Flask, jsonify
from concurrent import futures
import grpc
import sys
import os

sys.path.append(os.path.join(os.path.dirname(__file__), '..', '..', 'packages', 'protos'))

app = Flask(__name__)

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "service": "concordia-backend"}), 200

@app.route('/api/stats', methods=['GET'])
def get_stats():
    return jsonify({
        "totalRevenue": 125000.50,
        "totalOrders": 342,
        "activeCustomers": 156,
        "conversionRate": 3.2
    }), 200

@app.route('/api/user/current', methods=['GET'])
def get_current_user():
    return jsonify({
        "id": "user_123",
        "name": "John",
        "surname": "Johnson",
        "profileImageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    }), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
