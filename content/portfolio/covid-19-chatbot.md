---

title: ML-based COVID19 chatbot in Moroccan Dialect
img: portfolio/sahm/sahm.jpg
tags: [Chatbot, Machine Learning, Natural Language Processing]

---

A chatbot to answer messages from people in Moroccan dialect, both in Arabic and Latin letters.
<!--more-->

## Details

Back in the early days of the COVID-19 pandemic, We had an idea me and my friends [Safoine](https://www.linkedin.com/in/safoinme), [Karim](), and [Mourad]() to build a machine-learning-based chatbot to answer questions from people in Moroccan dialect regarding the COVID19 pandemic situation. The chatbot provided accurate and credible information from governmental sources. It also provided some commands users can use to get daily statistics like daily cases and the latest news.

We were motivated by the confusion that people felt when looking for information, and the need to provide accurate and reliable information. And we believed that we could put our motivation and skills to the test by building this chatbot. Our target was the Moroccan people, that's we chose to expose the chatbot as a Facebook Messenger bot since Facebook is the most widely used social network in this country.

For 3 months, our chatbot received more than 5 000 messages and people had positive interactions with it. This also allowed us to gather more data and fine-tune the chatbot along the way.

## Project Architecture

We trained our model using [Tensorflow](https://www.tensorflow.org/) and [Keras](https://keras.io/). We used a simple CNN-based architecture. The model was then saved and served through [Tensorflow Serving](https://www.tensorflow.org/serving/).

We created an application on Facebook to serve as a bot and connected it to our platform using an API we built in [Laravel](https://laravel.com/). This API also persisted data in a MySQL database.

Data regarding daily cases was scraped from [https://www.worldometers.info/coronavirus/](https://www.worldometers.info/coronavirus/) and served to users through custom commands.

- The following diagram explains the architecture visually.

<center>

![COVID chatbot architecture](/_nuxt/assets/images/portfolio/sahm/architecture.svg "COVID chatbot architecture")

</center>