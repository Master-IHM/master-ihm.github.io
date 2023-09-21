---
layout: page
use-site-title: true
menuname: FORMATION
redirect_from:
  - /promotions-m2/co
---

# Les Chefs-d'œuvre de M2

{% assign datas = "" | split: "" %}
{% for cat in site.data.cos %}
  {% assign datas = datas | push: cat[0] %}
{% endfor %}

{% assign datas = datas | sort | reverse %}

{% for part in datas  %}
## Promotion {{ part }}
  {% assign yeardata =  site.data.cos[part] %}
<table class="table table-striped">
    <thead>
        <tr>
            <th class="col-md-6">Sujet</th>
            <th class="col-md-3">Etudiant(s)</th>
            <th class="col-md-3">Commanditaire</th>
        </tr>
    </thead>
    <tbody>
    {% for subpart in yeardata %}
        <tr>
        <td>{{ subpart.sujet }}</td>
        <td>{{ subpart.etudiants | replace: ";;" , "," }}</td>
        <td>{{ subpart.commanditaire | replace: ";;" , "," }}</td>
        </tr>
      {% endfor  %}
    </tbody>
</table>

{% endfor %}
