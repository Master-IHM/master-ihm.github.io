---
layout: page
use-site-title: true
menuname: FORMATION
redirect_from:
  - /promotions-m2/stages
---

# Stage d'alternance en M2

{% assign datas = "" | split: "" %}
{% for cat in site.data.stages.m2 %}
   {% assign testme =  cat[1] | where: "type","ALT" %}
   {% if testme != empty %}
   {% assign datas = datas | push: cat[0] %}
   {% endif %}
{% endfor %}

{% assign datas = datas | sort | reverse %}


{% for part in datas  %}
## Promotion {{ part }}
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
    {% if subpart.type == "ALT" %}
        <tr>
        <td>{{ subpart.etudiants }}
        </td>
        <td>{{ subpart.sujet }}</td>
        <td>{{ subpart.commanditaire | replace: ";;" , "," }}</td>
        </tr>
      {% endif %}
      {% endfor  %}
    </tbody>
</table>

{% endfor %}
