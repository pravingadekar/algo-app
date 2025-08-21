from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from . import models, database
from .routers import users

# Create DB tables
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Algo App Backend")

# Allow frontend (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint


@app.get("/")
def root():
    return {"message": "Backend running 🚀"}


# Routers
app.include_router(users.router)
