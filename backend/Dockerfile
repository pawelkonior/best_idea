FROM python:3.11

WORKDIR /opt/app/

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONBUFFERED 1

COPY Pipfile Pipfile.lock ./
RUN pip install pipenv && pipenv install --system

COPY . .

RUN python -m pip install --upgrade pip

EXPOSE 8000

#CMD python manage.py migrate && python manage.py runserver 0.0.0.0:8000
