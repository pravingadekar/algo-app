from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# apna database URL dalna
SQLALCHEMY_DATABASE_URL = "postgresql+psycopg2://postgres:Pravin%40123%21@localhost:5432/algo_app"


engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
