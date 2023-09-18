---
layout: page
use-site-title: true
menuname: FORMATION
---

# Les Stages de M1

{% assign datas = "" | split: "" %}
{% for cat in site.data.stages.m1 %}
  {% assign datas = datas | push: cat[0] %}
{% endfor %}

{% assign datas = datas | sort | reverse %}


{% for part in datas  %}
## Promotion {{ part }}
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
        <td>{{ subpart.etudiants }}</td>
        <td>{{ subpart.sujet }}</td>
        <td>{{ subpart.commanditaire | replace: ";;" , "," }}</td>
        </tr>
      {% endfor  %}
    </tbody>
</table>

{% endfor %}