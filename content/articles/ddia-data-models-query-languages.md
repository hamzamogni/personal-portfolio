---

title: Data Models and Query Languages
description: Data Models and Query Languages
img: articles/ddia-ch1/cover.jpg
alt: Data Models and Query Languages

tags: [Databases, Query Languages, Data Models]
keywords: [Databases, Query Languages, Data Models, SQL, NoSQL, graph tables]

---

<note>
        💡 This article summarises the first chapter of the book <a href="https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=sr_1_1?crid=3NJT47VKRLNUI&keywords=designing+data-intensive+applications&qid=1656192466&sprefix=fluent+pyth%2Caps%2C549&sr=8-1">Designing Data-Intensive Applications</a> by Martin Kleppe. I am publishing summaries of each chapter I read.
</note>

## Introduction

Probably one of the most important and interesting concepts in the world of computing is **abstractions**, abstractions allow us to build complex software components on top of other components without worrying about the lower-level implementations.

For example, when you run a SQL query you rarely have to worry about how the query optimizer is going to execute it. When you save a document in your word processing software, you don't have to worry about the operating system and how is it going to save the file on disk.

This concept allows different people working on different layers to work together effectively, and communication between these components is done through data models. Each layer hides the complexity of the layers below it by exposing a clean data model.

In this article, we will cover three of the most widely used data models: the relational model, the document model, and graph-based models. We will also talk about some query languages used with each one of these models.

## Data Models

A data model is a way to abstract and standardize the way data is related to one another. There exist many data models suited for different use cases.

We will discuss:

- Relational models.
- Document models.
- Graph-Like models.

### Relational Models

The relational model is one of the oldest and most widely used models nowadays, data in this model is organized into relations (tables) that hold an unordered collection of tuples (rows). The relational model provides an intuitive and easier way to model relationships between entities (_i.e. a one-to-many relationship between a product in a store and orders_), it also tries to rigorously enforce a schema when writing data.

### Document Models


### Graph-Like Models