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

The Business Partners directory stores details of customers, suppliers, persons accountable for advances and the company's own details. This information is used in documents, payments and reports.

### Partner directory layout

<img src="{{ site.baseurl }}/assets/images/partneri-kataloga-uzbuve.png" alt="The three parts of the partner directory: analytical groups, personal accounts and additional information" />

| Part of the window | Purpose |
| --- | --- |
| **1. Analytical groups (Analītikas grupas)** | Select which group of partners to display. |
| **2. Personal accounts (Personālie konti)** | Find and select a partner, create a new record or edit an existing partner's details. |
| **3. Additional account information (Personālkonta papildus informācija)** | Review and update information about the selected partner, including bank accounts. |

Standard groups include:

- **Customers/suppliers** — buyers and suppliers.
- **Employees / accountable persons** — persons used for advances and expense reporting.
- **Our companies** — the company's own details.

Group names and codes may vary depending on the database settings. **All partners (Visi partneri)** displays partners from all groups.

### Finding a partner

Before creating a new partner, check whether the partner already exists in the directory.

1. Select the relevant group or **All partners (Visi partneri)**.
2. Search by name or registration number.
3. Check the details of the matching record.

The **partner code** identifies the record in the program. It is different from the **registration number** and the **VAT number**.

If you cannot find the partner, check the active filters. See <a href="{{ site.baseurl }}/en/docs/work-basics/#searching">Searching</a> and <a href="{{ site.baseurl }}/en/docs/work-basics/#filtering-data">Filtering data</a> in Work Basics.

### Creating a partner

1. Select the group in which the partner should be created.
2. Click the new-record button or press **Insert** in the partner list table.
3. Enter the partner's name, registration number, VAT number where applicable, legal address and country.
4. Save the record.
5. Check the saved details and add bank accounts.

<img src="{{ site.baseurl }}/assets/images/partneri-jauna-ieraksta-izveide.png" alt="Entering a new partner and saving the record" />

Partner data can also be obtained from the **Register of Enterprises** if this function is available. See <a href="{{ site.baseurl }}/docs/papildfunkcijas-citas-funkcijas/#lur-imports">LUR import (Latvian)</a>.

### Opening a partner record from a document

To open the partner selected in a **sales invoice**, click **Kods** next to the partner field.

Check the partner's name and registration number before editing its details.

<img src="{{ site.baseurl }}/assets/images/partneri-kartite-no-rekina.png" alt="The Kods button opens the selected partner from a sales invoice" />

### Partner bank accounts

Add bank accounts in the selected partner's additional information, under **Bank accounts (Bankas konti)**.

<img src="{{ site.baseurl }}/assets/images/partneri-bankas-atversana.png" alt="Finding a partner and opening its bank accounts" />

1. Select the partner.
2. Open its bank accounts and add a new row.
3. Enter the account details and save.
4. If this is the main bank account, select the corresponding option.
5. Refresh the partner list and check the result.

**The bank account displayed in the partner list must be marked as the main account (Galvenais).**

To delete an incorrect bank account, select its row under **Bank accounts (Bankas konti)** and press **Ctrl+Delete**.

<img src="{{ site.baseurl }}/assets/images/partneri-galvenais-bankas-konts.png" alt="Selecting the main bank account in the bank accounts window" />

### Checking for duplicates

If duplicate checking is enabled in the database, the program checks whether the registration number already exists when you create or edit a partner.

<img src="{{ site.baseurl }}/assets/images/partneri-regnum-kontrole.png" alt="Duplicate registration number warning for 40003048719" />

If a duplicate warning appears, find the existing partner first and check whether that record should be used.

If a separate record with the same registration number is required, an exception can be marked in the **ALLOW_DUBLICATE_REGNUMS** column in the partner directory.

To check existing records, use report **868** in the **Control (Kontrole)** report group. It lists registration numbers that occur more than once among **partners that are not closed**.

<img src="{{ site.baseurl }}/assets/images/partneri-dublikatu-atskaite-868.png" alt="Report 868: registration number 40003048719 occurs in two records" />

The report does not check name similarity. If the same person has been entered with different registration numbers, those records may not appear in the report.

### Merging partner records

Merge records after verifying that both directory entries refer to the same person and only one record should be retained.

Before merging:

1. Compare the details of both records.
2. Decide which record to retain.
3. Check the documents and balances of both records.

Use **Merge (Apvienošana)** and specify the partner record to retain.

> **Warning:** merging also replaces the partner in historical documents linked to the record being merged.

<img src="{{ site.baseurl }}/assets/images/partneri-apvienosana.png" alt="Merging partners and entering the code of the record to retain" />

<img src="{{ site.baseurl }}/assets/images/partneri-apvienosanas-apstiprinajums.png" alt="Merge confirmation identifying the retained and deleted partner records" />

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
