from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
# Allow frontend (Angular) to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # you can restrict to ["http://localhost:4200"] later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "Backend is running successfully 🚀"}


@app.get("/health")
def health_check():

    return {"status": "ok"}
# New sample API


@app.get("/api/message")
def get_message():
    return {"message": "Hello from FastAPI Backend!"}
