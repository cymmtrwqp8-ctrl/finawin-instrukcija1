---
title: "Payments"
module: maksajumi
order: 4
module_order: 4
level: 1
layout: doc-en
permalink: /en/docs/payments/
---
# Payments

## Source-document journals

This area contains the main types of financial source documents used in everyday accounting and financial management.

<img src="{{ site.baseurl }}/assets/images/image119.png" alt="Source-document journals" />

The available journals include:

- **Payments:** the payment-order journal.
- **Invoice payment:** creates payment orders from the list of unpaid invoices.
- **Advance-expense receipts and reports:** records advances issued to employees and how those advances were used.
- **Advance invoices:** displays advance invoices created in the FinaWin Warehouse module.
- **Sales invoices:** sales and billing documents.
- **Cash receipt/payment orders:** records cash received and paid out.

The centralised journals make it easier to select the correct document type, prepare invoices and payments, maintain accurate accounting and produce financial reports.

## Paying invoices

The Invoice Payment window contains all payment-session batches.

<img src="{{ site.baseurl }}/assets/images/image120.png" alt="Invoice payment sessions" />

### Creating a payment batch

1. Open the **Sessions** window and make sure the first, Sessions, tab is active.
2. Click **New batch** (*Jauna paka*). The **Details** window opens beside it.
3. FinaWin assigns the batch number automatically. The number identifies the batch in the system.
4. Enter the payment parameters:
   - **Payment date:** date on which the payment will be made.
   - **Account:** bank or accounting account from which the payment will be made.
   - **Due-date reference:** date from which overdue days are calculated, when applicable.
5. Select **Show additional** if additional settings are required.
6. Click **Select unpaid invoices** (*Atlasīt neapmaksātos rēķinus*) to open the list of invoices eligible for the batch.

<img src="{{ site.baseurl }}/assets/images/image121.png" alt="Payment batch details" />

### Selecting unpaid invoices

The list contains unpaid or unlinked invoices that meet the selection criteria. Complete the following checks:

- Select the invoices that must be included and paid.
- Confirm that every invoice belongs in this payment batch.
- If necessary, open the selected business-partner card or view the selected document's posting.
- To pay a different amount for a particular invoice, change it in the **Adjusted amount** column.

<img src="{{ site.baseurl }}/assets/images/image122.png" alt="Unpaid invoice selection" />

Click **Create MU from selected** (*Izveidot MU no iezīmētajiem*) to create payment orders for the selected invoices.

<img src="{{ site.baseurl }}/assets/images/image123.png" alt="Invoice list" />

After the payment orders have been created, the **MU journal** button becomes available. Use it to open the payment session.

<img src="{{ site.baseurl }}/assets/images/image124.png" alt="MU journal button" />

## Automatic payments

Clicking **MU journal** after invoice selection opens the Payments window with the newly prepared payment session already filtered. Only payments created in that session are displayed.

<img src="{{ site.baseurl }}/assets/images/image125.png" alt="Payment session" />

Each row represents one unique business partner and shows the payment amount, bank account, accounting account, payment status and related information. Also verify:

- the company's bank account from which the payment will be made;
- the business partner's IBAN and SWIFT/BIC details;
- the session actions available at the bottom of the window.

Main actions:

- **New payment:** add a payment to the session.
- **Copy payment:** create another payment using an existing payment as the starting point.
- **Bank file:** prepare the payment file for bank upload. In the session list, the status changes from `-` to `?` when the bank file has been created. After the completed bank transaction file is imported into FinaWin, the status changes from `?` to `+`.
- **Actions:** open the business partner's details, open the linked general-ledger document, or delete the payment.

<img src="{{ site.baseurl }}/assets/images/image126.png" alt="Payment actions" />

### Editing payment details

The **Edit** window displays all payments for the selected business partner in the current session. Review or correct each item, including:

- payment amount and its correspondence to the invoice;
- comments and payment purpose;
- payment date;
- required accounts;
- project, when relevant.

The **Information for bank payment** area contains the text that will be included in the bank payment order, for example the payment purpose or invoice number.

<img src="{{ site.baseurl }}/assets/images/image127.png" alt="Payment details" />

## Creating a manual payment

In the Payments window, click **New payment** (*Jauns maksājums*).

<img src="{{ site.baseurl }}/assets/images/image128.png" alt="New payment button" />

The new-payment form opens. Complete the document header first. Fields marked in red are mandatory.

<img src="{{ site.baseurl }}/assets/images/image130.png" alt="New payment header" />

After completing the header, either:

- link an invoice to be paid; or
- enter the payment details manually.

### Linking an invoice

Open the invoice-linking function. The window displays the selected supplier's invoices waiting for payment. Review the invoice number, issue date, due date, amount, currency and payment status.

<img src="{{ site.baseurl }}/assets/images/image132.png" alt="Invoice linking" />

Click **Document information** to open the document-linking window.

<img src="{{ site.baseurl }}/assets/images/image112.png" alt="Document information button" />

<img src="{{ site.baseurl }}/assets/images/image113.png" alt="Amount linking" />

Available actions:

- **Link selected/all documents:** link one or more selected documents.
- **Unlink selected/all documents:** remove the links from the selected or all documents.
- **Link:** enter the amount to be paid for a particular document.
- **Unlink:** remove the link to a particular document.

When **Link** is selected, enter the payment amount in the amount window. To make a partial payment, enter only the amount to be paid now.

<img src="{{ site.baseurl }}/assets/images/image114.png" alt="Payment amount" />

Confirm the amount. FinaWin links the invoice and displays it in the adjacent table together with the linking information.

Once all payment details are complete, follow the same final steps as for an automatic payment: post the payment and prepare the bank file.

### Entering payment details manually

Complete every field marked in red. Carefully verify the recipient, IBAN, payment amount, currency, payment date, accounting details and payment purpose.

<img src="{{ site.baseurl }}/assets/images/image133.png" alt="Manual payment details" />

When all details are complete, post the payment and prepare the bank file in the same way as for an automatically generated payment.

<img src="{{ site.baseurl }}/assets/images/image134.png" alt="Completed payment" />
