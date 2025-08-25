from app import db
from datetime import datetime

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    company = db.Column(db.String(100))
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, name, email, message, company=None):
        self.name = name
        self.email = email
        self.message = message
        self.company = company

class Newsletter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    subscribed_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __init__(self, email):
        self.email = email

class Testimonial(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    client_name = db.Column(db.String(100), nullable=False)
    client_company = db.Column(db.String(100), nullable=False)
    client_position = db.Column(db.String(100), nullable=False)
    testimonial_text = db.Column(db.Text, nullable=False)
    project_name = db.Column(db.String(100), nullable=False)
    project_url = db.Column(db.String(200))
    client_email = db.Column(db.String(120))
    client_phone = db.Column(db.String(50))
    linkedin_url = db.Column(db.String(200))
    rating = db.Column(db.Integer, default=5)
    location = db.Column(db.String(100))
    testimonial_date = db.Column(db.DateTime, default=datetime.utcnow)
    is_featured = db.Column(db.Boolean, default=False)
    
    def __init__(self, client_name, client_company, client_position, testimonial_text, project_name, project_url=None, client_email=None, client_phone=None, linkedin_url=None, rating=5, location=None, is_featured=False):
        self.client_name = client_name
        self.client_company = client_company
        self.client_position = client_position
        self.testimonial_text = testimonial_text
        self.project_name = project_name
        self.project_url = project_url
        self.client_email = client_email
        self.client_phone = client_phone
        self.linkedin_url = linkedin_url
        self.rating = rating
        self.location = location
        self.is_featured = is_featured
