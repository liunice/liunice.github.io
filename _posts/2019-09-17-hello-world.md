---
layout: post
title: "Hello world!"
date: 2019-09-17 13:08:02 +0800
categories: free-talk
tags: [Jekyll, "Hello World"]
excerpt_separator: <!--excerpt-->
permalink: hello-world
---

**Hello world**, this is my first Jekyll blog post.
<!--excerpt-->
I hope you like it!

![Jekyll logo](/assets/images/jekyll-logo-2x.png){:width="249px" height="135px"}

---

# Posts
{% for category in site.categories %}
  <h3>{{ category[0] }}</h3>
  <ul>
    {% for post in category[1] %}
      <li><a href="{{ post.url }}" target="_blank">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
{% endfor %}

---

# Page Tags
<ul>
  {% for tag in page.tags %}
    <li>{{ tag }}</li>
  {% endfor %}
</ul>

# Exerpt
{{ page.excerpt }}

# Staff Members
{% for staff_member in site.staff_members %}
  <h4>
    <a href="{{ staff_member.url }}">
      {{ staff_member.name }} - {{ staff_member.position }}
    </a>
  </h4>
  <p>{{ staff_member.content | markdownify }}</p>
{% endfor %}

# Images
{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files %}
  {{ myimage.path }}
{% endfor %}