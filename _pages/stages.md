---
layout: page
use-site-title: true
menuname: EDT
---

# Les Stages du master IHM

## Stages du master 2 IHM

{% assign datas = "" | split: "" %}
{% for cat in site.data.stages.m2 %}
  {% assign datas = datas | push: cat[0] %}
{% endfor %}

{% assign datas = datas | sort | reverse %}


{% for part in datas  %}
### Promotion {{ part }}
  {% assign yeardata =  site.data.stages.m2[part] %}
<table class="table table-striped">
    <thead>
        <tr>
            <th class="col-md-3">Nom</th>
            <th class="col-md-6">Titre du stage</th>
            <th class="col-md-3">Entreprise</th>
        </tr>
    </thead>
    <tbody>
    {% for subpart in yeardata %}
        <tr>
        <td>{{ subpart.etudiants }}
        {% if subpart.type == "ALT" %}<br><b>(Alternance)</b>{% endif %}
        {% if subpart.type == "PRO" %}<br><b>(Contrat PRO)</b>{% endif %}        
        </td>
        <td>{{ subpart.sujet }}</td>
        <td>{{ subpart.commanditaire | replace: ";;" , "," }}</td>
        </tr>
      {% endfor  %}
    </tbody>
</table>

{% endfor %}

## Stages du master 1 IHM

{% assign datas = "" | split: "" %}
{% for cat in site.data.stages.m1 %}
  {% assign datas = datas | push: cat[0] %}
{% endfor %}

{% assign datas = datas | sort | reverse %}


{% for part in datas  %}
### Promotion {{ part }}
  {% assign yeardata =  site.data.stages.m1[part] %}
<table class="table table-striped">
    <thead>
        <tr>
            <th class="col-md-3">Nom</th>
            <th class="col-md-6">Titre du stage</th>
            <th class="col-md-3">Entreprise</th>
        </tr>
    </thead>
    <tbody>
    {% for subpart in yeardata %}
        <tr>
        <td>{{ subpart.etudiants }}
        {% if subpart.type == "ALT" %}<br><b>(Alternance)</b>{% endif %}
        {% if subpart.type == "PRO" %}<br><b>(Contrat PRO)</b>{% endif %}
        </td>
        <td>{{ subpart.sujet }}</td>
        <td>{{ subpart.commanditaire | replace: ";;" , "," }}</td>
        </tr>
      {% endfor  %}
    </tbody>
</table>

{% endfor %}
