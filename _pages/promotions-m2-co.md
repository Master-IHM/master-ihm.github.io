---
layout: page
use-site-title: true
menuname: FORMATION
---

# Les Chefs-d'œuvre de M2


{% for part in site.data.cos reversed %}

## Promotion {{ part[0] }}
  {% assign yeardata =  part[1] %}
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





