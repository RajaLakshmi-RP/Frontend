from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:3001"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/logs")
def get_logs():
    return [
        {"ip": "192.168.1.1", "action": "GET", "status": 200},
        {"ip": "10.0.0.5", "action": "POST", "status": 403}
    ]

@app.get("/alerts")
def get_alerts():
    return [
        {"ip": "10.0.0.5", "threat": "Bot", "score": 92},
        {"ip": "172.16.0.9", "threat": "Suspicious", "score": 78}
    ]
