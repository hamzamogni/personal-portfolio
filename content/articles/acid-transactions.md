---
title: How ACID are your transactions?
description: We often hear the term ACID when we talk about database transactions, in this article we will dissect what they mean.
alt: relational databases, transactions
img: articles/acid-transactions/cover.jpg

tags: [Databases Engineering, Transactions]
keywords: [ACID, atomicity, consistency, isolation, durability, databases, relational databases, transactions]
---

## Introduction

ACID is an abbreviation of the four properties of database transactions (Atomicity, Consistency, Isolation, and Durability), read the rest of this article to get an understanding of what we mean by each one of them. But first, let's define what we mean by a transaction in the first place.

## What is a transaction?

A transaction is a term used in databases jargon to describe a set of queries that are considered as being one single unit of work. A transaction can be rolled back before committing it to revert any current changes introduced by the transaction, and once the transaction is committed it gets persisted.

Usually, transactions are used to change and modify data, but it is perfectly normal to have read-only transactions.

## Atomicity

Atomicity is a simple property implying that a transaction should be considered as an atomic operation, we can summarize this property in these rules:

- All queries in a transaction must succeed for the transaction to succeed.
- If one query fails, all the previous queries in the transaction get rolled back.
- If the database crash during a transaction, all the previous successful queries should roll back.

## Consistency

It is crucial to ensure consistency when it comes to data management. Consistency involves checking whether data stored on disk is aligned with the defined data model. This is ensured by the user by setting referential key integrity _(i.e foreign key constraints)_ or by ensuring atomicity and isolation _(more on isolation below)_.  Referential keys integrity ensures that any data references are accurate, while atomicity ensures that a set of operations are treated as a single transaction, so either all of them are executed or none of them are. Isolation ensures that each transaction is executed in isolation without any interference from other concurrent transactions.


## Isolation

By design, transactions are usually executed concurrently (at the same time), isolation ensures that transactions do not interfere with each other. There are many levels of isolations, but we need to understand what anomalies isolation tries to prevent. We call these anomalies read phenomena, and there are 4 different read phenomena:

- **Dirty Reads**: dirty reads happen when a transaction reads changes introduced by another transaction that is not yet committed.
- **Non-repeatable Reads**: reading the same data twice by a transaction.
- **Phantom Reads**: reading data that is newly inserted by another transaction.
- **Lost Updates**: this happens when two transactions are executed and they both change the same data at the same time before committing.

<br>
To tackle these read phenomena, different databases implement different isolation levels, there are 5 isolation levels:

1. **Read Uncommitted**: This is the basic level where there is no isolation implemented, meaning that any change from outside is visible to a transaction (you can read uncommitted values).
2. **Read Committed**: One of the most popular levels, each transaction reads only committed changes by other transactions.
3. **Repeatable Read**: In this level the transaction will make sure that whe it reads a row, that row will remain unchanged during that transaction.
4. **Snapshot**: Each query will read only changes that were committed before the transaction started.
5. **Serializable**: This disables concurrency altogether, therefore only one transaction is being run at each time.

## Durability

Durability refers to the process of persisting data to a non-volatile storage system *(a disk for example)*, this makes our changes resilient to system crashes and power outage..Etc. There many techniques used for durability, out of which we can find

### WAL (Write-ahead log)

- Any changes get flushed immediately to this log, this WAL is a log of all changes introduced to the data.
- Instead of writing all the data (indexes, rows, columns...etc), databases only persist compressed versions of changes to the WAL.

This log can be used by the database to recover from a system crash. we should also note that operating systems don't always write changes to disk but they usually store it in their own cache and then batch write to disk, therefore databases have to make sure to tell the OS to skip the cache.

<note>
There is also another technique called AOF (append-only file) which is very similar to WAL
</note>

### Asynchronous snapshots

When using these techniques, databases will keep all changes in memory and asynchronously flush to disk periodically.

## Conclusion

In this article we have summarized the 4 properties of database transaction, namely Atomicity, Consistency, Isolation, and Durability. We have seen how databases implement these properties to ensure a consistent and safe state of data. Understanding these properties is very important when dealing with complex database engineering challenges.