from decimal import Decimal

import requests
import bs4


def cut_chars(string):
    return ''.join(char for char in string if char.isdigit() or char == ',').replace(',', '.')


def get_product_by_barcode(barcode):
    base_url = 'https://www.leclerc.rzeszow.pl/'
    complex_url = f'{base_url}szukaj.html?slowo={barcode}'

    r = requests.get(complex_url)
    tag_soup = bs4.BeautifulSoup(r.text, 'html.parser')

    item_container = tag_soup.select_one('.kat_list')

    if not item_container:
        return None

    try:
        title = item_container.select_one('a')['title']
        price = item_container.select_one('.price').getText()
        img = base_url + item_container.select_one('img')['src']
    except AttributeError:
        return None

    return {'id': barcode, 'name': title, 'price': cut_chars(price), 'image': img}
