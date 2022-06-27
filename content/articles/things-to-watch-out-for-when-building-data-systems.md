---

title: What should you watch out for when building distributed data systems?
description: Fundamental questions and challenges to think about when building a robust distributed data system.
img: articles/ddia-ch1/cover.jpg
alt: Reliability, Scalability, and Maintainability of distributed data systems

tags: [Big Data, Distributed Systems]
keywords: [Data System, Distributed Data System, Data-Intensive Applications, Big Data, Distributed Systems, Reliability, Scalability, Maintainability]
---

<note>
        💡 This article summarises the first chapter of the book <a href="https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=sr_1_1?crid=3NJT47VKRLNUI&keywords=designing+data-intensive+applications&qid=1656192466&sprefix=fluent+pyth%2Caps%2C549&sr=8-1">Designing Data-Intensive Applications</a> by Martin Kleppe. I am publishing summaries of each chapter I read.
</note>

## Introduction

In today’s world, many applications are data-intensive, we are no longer limited by computing power or memory, but we are somewhat constrained by data: its complexity, amount, and the speed at which it is changing.

These challenges require us to build systems that are adequate and respond to businesses’ requirements, and often, these systems make use of a large set of tools and technologies working together (databases, caches, indexes, stream/batch processing…etc); We are no longer satisfied by using just one database for everything, for example, you can find in just one project several tools like:

- PostgreSQL as a transactional processing system.
- A search engine like Elasticsearch.
- A warehouse (think something like Google’s BigQuery).
- A data-lake.
- …etc.

We are converging towards “distributed systems” being the norm. And this comes with a multitude of challenges and intricacies to deal with.

In this article, I will summarize the three fundamental aspects to think about when building a distributed data system: **Reliability, Scalability, and Maintainability**

## Reliability

What we mean by reliability in this context is the ability of the system to continue to work correctly even when something unexpected happens (*a.k.a. fault-tolerance*).

In an environment where many things are moving and changing at a very high speed, we can expect many faults to happen, and we should design systems that can cope with as many faults as we can.

We outline three kinds of faults:

### Hardware Faults

Our software needs hardware components to run it, when the hardware goes down the software goes down with it. Any component may go down at any time (Hard disk, CPU…etc).

One of the solutions to mitigate hardware faults is to make the hardware redundant like to set up hard disks in [RAID](https://en.wikipedia.org/wiki/RAID) mode, and equip servers with dual power supplies…etc), and thus when a component goes down, the redundant component takes its place.

### Software Bugs

Software bugs are faults that are more dangerous given that they generally cause bigger failures spanning a big portion of the system: A bug in one node or one service can cause cascading failures on other services and nodes!

What is more dangerous is that such kinds of bugs, if no measures are taken, can go unnoticed for long periods before being discovered.

A set of measures and practices can be implemented to minimize the occurrence of such bugs, a few of them could be to:

- Think very well before making assumptions in your code.
- Test your code thoroughly and extensively.
- Measure, Monitor and Analyze your system behaviour.

### Human Errors

The systems we build are operated by humans, and humans are unreliable and error-prone even when they have the best of intentions. We should also consider this:

- Provide a testing/staging environment where users can experiment safely without affecting production systems.
- Implement thorough testing, both automated (unit, feature, integration, and end-to-end tests) and manual testing.
- Make it so that it is easy to roll back configuration changes from users.
- Extensive monitoring will give enough data to analyze later on and understand why a failure happened, and sometimes even anticipate problems before they occur.

## Scalability

Scalability is defined as the ability of the system to react to increasing load while avoiding degradation. In a data system, the increase could be in terms of the number of requests received, the amount of data being processed, the number of concurrent users…etc.

Scalability is a delicate topic, and different approaches exist for different use cases. To discuss scalability, one should define key metrics that are relevant to the specific application.

The first step would be to analyze the current load on the system depending on the architecture being used ( reads/writes in a database, number of requests to a web page per second, number of cache reads…etc).

By describing the current load, you can make more educated analyses regarding future load increases and how your system performance will respond, such investigations require answering questions like:

- How does the performance change when we increase load without adding more resources?
- How many resources do we need to add when we increase the load to keep the same performance?

Answering these types of questions requires us to define performance metrics relevant to the use case, metrics such as throughput, response time…etc.

There exist two approaches to implementing scalability:

1. **Scaling up (vertical scaling)**: That is to increase the size of a machine in terms of resources (CPU, memory…etc).
2. **Scaling out (horizontal scaling)**: That is to distribute the load across multiple machines.

Choosing one of the two approaches often requires making trade-offs. Scaling up is generally easier to implement and maintain but is more expensive (A highly powerful machine can be extremely expensive).

Some systems can even implement what is known as *elasticity*. An elastic system is a system that can automatically add or remove computing resources when they detect increases or decreases in load. Such systems are more useful when the load is unpredictable.

## Maintainability

A software life cycle doesn’t end when we are done with the initial development, but more work is to be done after that to maintain it (fixing bugs, adding new features, dealing with technical debt…etc). And thus, we should build software responsibly with maintainability in mind. Three design principles are key to this end:

### Operability

Operability is to make the system easy for the operations teams to keep running. A set of measures can be implemented:

- Support integration and automation tools.
- Good documentation of the system and how it works.
- Giving the ability to change the default behaviour and configurations.
- Provide good monitoring and visibility into the system behaviour.
- Implement predictable systems and minimize undefined behaviours.

### Simplicity

Simplicity is the opposite of complexity, systems should be built in a manner that makes new engineers easily understand them. When software is complex and hard to reason about, it becomes easier to introduce new bugs or make it very hard to implement new features.

One thing to do to avoid complexity is “*abstraction”*, by using abstractions, we hide away implementation details and give APIs that are well-documented for users to use.

### Evolvability

Evolvability is about making it easy to make changes to the software as requirements change over time. Software should be built with extensibility in mind. You can think of Evolvability as Agility for organizational processes.

## Conclusion

In this article, we have outlined three of the most important principles that are fundamental when thinking about distributed data-intensive applications.

An application has to meet a multitude of criteria and requirements to be useful, but unfortunately, where there are decisions to be made, there are trade-offs to be taken. It is not always easy to make decisions in a world ruled by unstructured data. But again, isn’t that the whole fun of it?
