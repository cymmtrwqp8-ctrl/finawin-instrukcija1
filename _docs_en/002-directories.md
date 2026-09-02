---
title: "Directories"
module: katalogi
order: 2
module_order: 2
level: 1
layout: doc-en
permalink: /en/docs/directories/
---
# Directories

Directories contain the master data used throughout FinaWin. Correctly designed directories are the foundation for consistent documents, accurate accounting and useful reporting.

Before documents are created, review the company's business processes and decide which information will later be required for analysis. Reports are based on documents, and documents combine data from several directories. Therefore, the dimensions required for future analysis must be entered in the relevant documents from the beginning.

Data migrated from a previous accounting or warehouse system may only partly reflect the company's current needs. Review the available FinaWin directories before entering live documents.

<img src="{{ site.baseurl }}/assets/images/image80.png" alt="List of directories" />

Directories are grouped by purpose. Business Partners, Projects, Agents, Processes, Resources and similar analytical dimensions may also contain groups that help organise their records.

Enter master data before using it in a document. For example, add a new customer to the Business Partners directory before importing or entering that customer's invoice. Directory data can be updated later if, for example, a partner changes its legal address or a service's VAT treatment changes.

Use the navigator buttons to add, edit, save and delete records. Table appearance and visible columns can be adjusted in **Table Configuration**.

## Exchange rates

The Exchange Rates directory stores rates by currency and date and is used for accurate conversion in financial transactions and accounting. Add a new record with the navigator's **New record** button or the `Insert` key.

The reverse rate is calculated as:

`Reverse rate = 1 / ECB rate`

<img src="{{ site.baseurl }}/assets/images/image81.png" alt="Exchange rates" />

## Chart of accounts

The Chart of Accounts directory contains every accounting account used by the company. Each account has a unique number, name and type, for example asset, liability, income or expense. Accounts can be grouped to make accounting and financial analysis easier to review.

Add an account with the navigator's **New record** button or the `Insert` key. The chart of accounts determines how transactions are recorded and how financial statements are produced.

<img src="{{ site.baseurl }}/assets/images/image82.png" alt="Chart of accounts" />

## Business partners

This directory contains the company's own details and information about its business partners. Standard groups include:

- **Customers/suppliers:** buyers, suppliers and detailed information about each organisation.
- **Employees:** employee contact information; commonly used to identify persons accountable for advances and expense reports.
- **Our companies:** the company's own legal entities, branches, warehouses or stores. Separate records may be useful when units have different details, including VAT numbers in different countries.

<img src="{{ site.baseurl }}/assets/images/image83.png" alt="Business partners" />

The window is divided into linked tables:

1. Select the analytical group. A standard setup may include All partners, `000` Our companies, `01` Debtors/Creditors and `03` Accountable persons. Groups can be changed or extended.
2. The second table shows the partners belonging to the selected group.
3. The third table contains additional partner information, especially bank accounts.

Create a partner manually with the navigator or `Insert`, or import company data from the Latvian **Register of Enterprises** function when it is available in the main menu.

Two partner records can be merged when an old record should be replaced by a new legal entity. Select **Merge** (*Apvienošana*) and specify the new record to which the old data must be transferred.

> **Important:** merging also replaces the partner in all documents previously linked to the old record.

<img src="{{ site.baseurl }}/assets/images/image84.png" alt="Merging partner records" />

## Internal addresses

Internal Addresses represent organisational units such as departments, branches, workshops, warehouses or stores. Add records manually with the navigator or `Insert`.

These units help allocate and analyse costs, revenue and resources by part of the organisation and are used in financial, management and accounting reports.

<img src="{{ site.baseurl }}/assets/images/image85.png" alt="Internal addresses" />

## Projects

The Projects directory contains the company's projects. Projects group income and expenses by activity, customer or contract. Each project can have a unique code and name and can be used in financial reports to analyse costs, revenue and profit or loss by project.

Add a project with the navigator or `Insert`.

<img src="{{ site.baseurl }}/assets/images/image86.png" alt="Projects" />

## Processes

Processes classify and monitor company activities and workflows, such as sales, purchasing, production or project delivery. A process can have a unique code and name and can be linked to organisational units or accounts.

Use processes to classify documents, tasks and financial transactions by the type of activity. Add a process with the navigator or `Insert`.

<img src="{{ site.baseurl }}/assets/images/image87.png" alt="Processes" />

## Additional classifiers

Additional Classifiers provide flexible analytical dimensions that are not covered by standard fields, for example cost type, project stage, transaction category or product type. They can be used for more detailed grouping and analysis.

Add a classifier with the navigator or `Insert`.

<img src="{{ site.baseurl }}/assets/images/image88.png" alt="Additional classifiers" />

## Agents

Agents usually represent sales representatives, project managers or other employees involved in sales, purchasing or operational processes. Linking transactions and documents to an agent makes it possible to analyse sales, commission, project costs and performance by responsible person.

Add an agent with the navigator or `Insert`.

<img src="{{ site.baseurl }}/assets/images/image89.png" alt="Agents" />

## Service types

Service Types classify services supplied or received by the company, for example transport, consulting, repair and maintenance. This classification supports document preparation, accounting and financial analysis and makes reports easier to prepare and interpret.

Add a service type with the navigator or `Insert`.

<img src="{{ site.baseurl }}/assets/images/image90.png" alt="Service types" />

## Resources

Resources are tangible and intangible assets used in daily operations, for example vehicles, boats, machinery, equipment and premises. Resource records can contain the name, type, registration data and other relevant information.

Resources can be linked to projects, employees or organisational units to monitor their use and maintenance costs. Add a resource with the navigator or `Insert`.

<img src="{{ site.baseurl }}/assets/images/image91.png" alt="Resources" />

## Contract types

Contract Types classify agreements by content or purpose, for example service, supply or lease agreements. The classification supports consistent accounting and reporting by contract type.

Specific algorithms may be assigned to a contract type in FinaWin. These algorithms can automate processes when a contract of that type is used.

<img src="{{ site.baseurl }}/assets/images/image92.png" alt="Contract types" />

## Payment terms

Payment Terms define settlement rules for customers and suppliers. Each record specifies the number of days allowed for payment and may also define an early-payment discount.

By default, FinaWin counts calendar days. A working-day calendar requires separate configuration agreed with the system provider. In many cases, adding calendar days is sufficient for an approximate working-day deadline; for example, 12 calendar days are approximately 10 working days.

<img src="{{ site.baseurl }}/assets/images/image93.png" alt="Payment terms" />

## Account types

Account Types group accounting accounts by a common purpose or function. This structures the chart of accounts and supports financial reporting. Examples include:

- **PZA:** profit and loss accounts for income and expenses.
- **NAUDA:** cash-flow accounts, including cash and bank accounts.

<img src="{{ site.baseurl }}/assets/images/image94.png" alt="Account types" />

## Plan versions

Plan Versions stores different versions of budget plans, such as the original plan, revised plan and actual data. Keeping separate versions makes it possible to compare changes over time and analyse variances.

<img src="{{ site.baseurl }}/assets/images/image95.png" alt="Plan versions" />

## Bank list

The Bank List contains the banks active in the system. It is used to link payment accounts and financial documents to the correct bank. A record may contain the bank's name, code, contact information and other details required for accurate accounting and payment processing.

Add a bank with the navigator or `Insert`.

<img src="{{ site.baseurl }}/assets/images/image96.png" alt="Bank list" />

## Service catalogue

The Service Catalogue contains the services offered or supplied by the company. Services can be grouped by type or category, such as transport, consulting or repair. Each service has a name, code and other parameters required for documents.

Using catalogue items on invoices ensures consistent descriptions and price information and makes invoice preparation faster. Add a service with the navigator or `Insert`.

<img src="{{ site.baseurl }}/assets/images/image97.png" alt="Service catalogue" />
