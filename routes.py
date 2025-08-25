from flask import render_template, request, jsonify, make_response, url_for
from app import app, db
from models import Contact, Newsletter, Testimonial
from datetime import datetime

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/team')
def team():
    return render_template('team.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/testimonials')
def testimonials():
    testimonials = Testimonial.query.order_by(Testimonial.testimonial_date.desc()).all()
    return render_template('testimonials.html', testimonials=testimonials)

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    try:
        data = request.get_json()
        contact = Contact(
            name=data['name'],
            email=data['email'],
            company=data.get('company', ''),
            message=data['message']
        )
        db.session.add(contact)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Thank you for your message!'})
    except Exception as e:
        return jsonify({'success': False, 'message': 'Error submitting form. Please try again.'})

@app.route('/subscribe-newsletter', methods=['POST'])
def subscribe_newsletter():
    try:
        data = request.get_json()
        newsletter = Newsletter(email=data['email'])
        db.session.add(newsletter)
        db.session.commit()
        return jsonify({'success': True, 'message': 'Successfully subscribed to newsletter!'})
    except Exception as e:
        return jsonify({'success': False, 'message': 'Email already subscribed or invalid.'})

@app.route('/sitemap.xml')
def sitemap():
    pages = [
        {'url': url_for('index', _external=True), 'lastmod': '2025-08-20', 'priority': '1.0'},
        {'url': url_for('services', _external=True), 'lastmod': '2025-08-20', 'priority': '0.9'},
        {'url': url_for('portfolio', _external=True), 'lastmod': '2025-08-20', 'priority': '0.8'},
        {'url': url_for('about', _external=True), 'lastmod': '2025-08-20', 'priority': '0.7'},
        {'url': url_for('team', _external=True), 'lastmod': '2025-08-20', 'priority': '0.6'},
        {'url': url_for('contact', _external=True), 'lastmod': '2025-08-20', 'priority': '0.7'},
    ]
    
    sitemap_xml = render_template('sitemap.xml', pages=pages)
    response = make_response(sitemap_xml)
    response.headers["Content-Type"] = "application/xml"
    return response

@app.template_global()
def modify_query(**new_values):
    args = request.args.copy()
    for key, value in new_values.items():
        args[key] = value
    return '{}?{}'.format(request.path, url_encode(args))

from urllib.parse import urlencode as url_encode
