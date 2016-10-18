# -*- coding: utf-8 -*-
from flask.ext.wtf import Form
from wtforms import SelectField, HiddenField, TextField, TextAreaField, DateField, BooleanField, validators, ValidationError
from dataviva.utils.custom_fields import TagsField
from models import Subject


class RegistrationForm(Form):
    title_pt = TextField('title_pt', validators=[
        validators.Required(u"Por favor, insira o título do post."),
        validators.Length(max=400)
    ])

    show_home = BooleanField('show_home')

    author = TextField('author', validators=[
        validators.Required(u"Por favor, insira o autor do post."),
        validators.Length(max=100)
    ])

    publish_date = DateField('publish_date', validators=[
        validators.Required(u"Por favor, insira a data do post.")],
        format='%d/%m/%Y',
        description='Formato da data: dia/mês/ano'
    )

    subject_pt = TagsField('subject_pt',
        choices=[],
        validators=[
            validators.Required(u"Por favor, insira a categoria do post."),
    ])

    text_call_pt = TextAreaField('text_call_pt', validators=[
        validators.Required(u"Por favor, insira uma chamada para o post."),
        validators.Length(max=500)
    ])

    text_content_pt = HiddenField('text_content_pt', validators=[
        validators.Required(u"Por favor, insira o conteúdo do post.")
    ])

    thumb = HiddenField('thumb', validators=[
        validators.Required(u"Por favor, insira uma imagem para a chamada.")
    ])

    language = SelectField('language',
        choices=[('pt', 'Português'), ('en', 'Inglês')],
    )

    def set_choices(self):
        if self.subject_pt.data:
            self.subject_pt.choices = [(name, name) for name in self.subject_pt.data]
        for subject in Subject.query.order_by(Subject.name):
            if (subject.name, subject.name) not in self.subject_pt.choices:
                self.subject_pt.choices.append((subject.name, subject.name))
