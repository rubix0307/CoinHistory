import re
from django import template
from bleach.sanitizer import Cleaner

register = template.Library()

@register.filter
def markdown_a_to_html(text):

    markdown_link_pattern = r'\[([^\]]+)\]\(([^)]+)\)'

    html_text = re.sub(markdown_link_pattern, r'<a href="\2" target="_blank">\1</a>', text)
    return html_text

@register.filter
def save_html_tags(text:str, tags:str):
    tags = [tag.strip() for tag in tags.split(',')]
    cleaner = Cleaner(tags=tags, attributes=['target','href'])
    safe_html = cleaner.clean(text)

    return safe_html