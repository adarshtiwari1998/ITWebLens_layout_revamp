#!/usr/bin/env python3
import os
import re
from pathlib import Path

def convert_template_to_static(template_path, output_path, page_name):
    """Convert a Flask template to static HTML"""
    
    # Read the template file
    with open(template_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Read the base template
    with open('templates/base.html', 'r', encoding='utf-8') as f:
        base_content = f.read()
    
    # Extract content from the template
    # Remove extends and blocks
    content = re.sub(r'{%\s*extends\s*["\']base\.html["\']\s*%}', '', content)
    
    # Extract title
    title_match = re.search(r'{%\s*block\s+title\s*%}(.*?){%\s*endblock\s*%}', content, re.DOTALL)
    title = title_match.group(1).strip() if title_match else 'ITWEBLENS - Futuristic IT Services & Web Development'
    
    # Extract main content
    content_match = re.search(r'{%\s*block\s+content\s*%}(.*?){%\s*endblock\s*%}', content, re.DOTALL)
    main_content = content_match.group(1).strip() if content_match else content
    
    # Extract scripts
    scripts_match = re.search(r'{%\s*block\s+scripts\s*%}(.*?){%\s*endblock\s*%}', content, re.DOTALL)
    scripts_content = scripts_match.group(1).strip() if scripts_match else ''
    
    # Replace the base template placeholders
    static_html = base_content
    static_html = re.sub(r'{%\s*block\s+title\s*%}.*?{%\s*endblock\s*%}', title, static_html, flags=re.DOTALL)
    static_html = re.sub(r'{%\s*block\s+content\s*%}{%\s*endblock\s*%}', main_content, static_html, flags=re.DOTALL)
    static_html = re.sub(r'{%\s*block\s+scripts\s*%}{%\s*endblock\s*%}', scripts_content, static_html, flags=re.DOTALL)
    
    # Remove any remaining block declarations
    static_html = re.sub(r'{%\s*block\s+\w+\s*%}', '', static_html)
    static_html = re.sub(r'{%\s*endblock\s*%}', '', static_html)
    
    # Replace Flask url_for calls with static paths
    static_html = re.sub(r'{{\s*url_for\(["\']static["\']\s*,\s*filename=["\']([^"\']+)["\']\)\s*}}', r'static/\1', static_html)
    
    # Replace navigation links
    nav_replacements = {
        'href="/"': 'href="index.html"',
        'href="/services"': 'href="services.html"', 
        'href="/portfolio"': 'href="portfolio.html"',
        'href="/about"': 'href="about.html"',
        'href="/team"': 'href="team.html"',
        'href="/contact"': 'href="contact.html"',
        'href="/testimonials"': 'href="testimonials.html"'
    }
    
    for old, new in nav_replacements.items():
        static_html = static_html.replace(old, new)
    
    # Remove Flask specific template variables
    static_html = re.sub(r'{{\s*request\.url\s*}}', '', static_html)
    static_html = re.sub(r'{{\s*request\.url_root\s*}}', '', static_html)
    
    # Remove any remaining Jinja2 syntax that we might have missed
    static_html = re.sub(r'{%.*?%}', '', static_html, flags=re.DOTALL)
    static_html = re.sub(r'{{.*?}}', '', static_html, flags=re.DOTALL)
    
    # Write the static HTML file
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(static_html)
    
    print(f"Converted {template_path} -> {output_path}")

def main():
    """Convert all templates to static HTML"""
    
    # Ensure static_site directory exists
    os.makedirs('static_site', exist_ok=True)
    
    # Templates to convert
    templates = [
        ('templates/index.html', 'static_site/index.html', 'index'),
        ('templates/services.html', 'static_site/services.html', 'services'),
        ('templates/portfolio.html', 'static_site/portfolio.html', 'portfolio'),
        ('templates/about.html', 'static_site/about.html', 'about'),
        ('templates/team.html', 'static_site/team.html', 'team'),
        ('templates/contact.html', 'static_site/contact.html', 'contact'),
        ('templates/testimonials.html', 'static_site/testimonials.html', 'testimonials'),
    ]
    
    for template_path, output_path, page_name in templates:
        if os.path.exists(template_path):
            convert_template_to_static(template_path, output_path, page_name)
        else:
            print(f"Template not found: {template_path}")
    
    print("✅ All templates converted to static HTML files!")
    print("📁 Static site files are in the 'static_site' directory")

if __name__ == "__main__":
    main()