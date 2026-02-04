# Concordia Commerce Backend

Flask-based backend service for Concordia Commerce. Currently serves as a mock API, with plans to implement full gRPC services.

## Setup

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Unix/MacOS:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

## Running

```bash
python app.py
```

The server will start on `http://localhost:5000`

## Endpoints

- `GET /health` - Health check endpoint
- `GET /api/stats` - Mock statistics data

## Future Implementation

- gRPC server implementation based on proto definitions
- Database integration
- Authentication and authorization
- Business logic services
