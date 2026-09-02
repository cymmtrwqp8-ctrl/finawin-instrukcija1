---
title: "Work basics"
module: pamati
order: 1
module_order: 1
level: 1
layout: doc-en
permalink: /en/docs/work-basics/
---
# Work basics

## About this guide

This is the user guide for the **FinaWin Finance** module.

Version: 3.1

| Version | Date | Comment | Author |
|---|---|---|---|
| 3.1 | 14 October 2026 | Initial edition, based on FinaWin version 8.592 | Solcraft |

> The screenshots may show Latvian interface labels. Where useful, this guide gives the English meaning followed by the Latvian label in parentheses so that the same command can be found in the program.

## Introduction

### Intended audience

This guide is a standard reference for both new and experienced users of **FinaWin Finance**. It explains the program's operating principles, options, functions, windows, commands and reports. Basic computer skills are recommended.

Before independent work begins, Solcraft normally provides user training based on the processes used by your company. During training, typical scenarios are demonstrated and user questions are answered. This guide can then be used as a day-to-day reference.

## Configuration and customisation

This guide describes the standard use of the program. If your company has a specially configured feature or a custom development, additional remote or on-site training, or a separate guide for that feature, may be required.

### How to use this guide

- **Terms and abbreviations** explains the main technical and accounting terminology.
- **Signing in and getting started** describes how to start the program and connect to a database.
- **Navigation principles** explains how records are added, edited, saved and deleted in lists, tables and directories.
- **Program configuration** explains how to adjust the program for convenient daily use.
- **Directories** describes the master data used by the program, including business partners, accounts, projects, processes and other classifications.
- **Printing and exporting** explains how to print tables and save data in formats such as Microsoft Excel.
- The program may also include additional data-import functions configured for your company.

### Questions and discrepancies

The program and this guide are continuously improved. If the program behaves differently from the description, or anything is unclear, contact the consultant responsible for your FinaWin module or the Solcraft office.

### Terms and abbreviations

#### General and technical terms

- **DB (database):** the location where program data is stored, such as business partners, invoices and accounts.
- **MDI (Multi-Document Interface):** a mode that allows several documents or reports to be open at the same time.
- **Modal window:** a window that blocks other actions until it is closed.
- **SMTP:** a standard for sending e-mail directly from the program.
- **MAPI:** a method for sending e-mail through an application installed on the computer, such as Outlook.
- **SSL/TLS:** secure data-transfer protocols used to encrypt e-mail and other data.
- **Clipboard:** temporary storage for copied or cut data, for example when using `Ctrl+C` and `Ctrl+V`.
- **Field:** an individual data-entry item in a table or form, such as Name, Date or Amount.
- **Window:** the part of the screen that displays a particular program section or function.
- **UI (user interface):** the visual part of the program used by the user.

#### Program functions and settings

- **Toolbar:** the icon bar at the top of the screen containing commands such as Save, Print and Filter.
- **Navigator/navigation buttons:** buttons for moving between records and for adding, deleting and saving records.
- **Configuration:** adjusting colours, fonts, layouts, filters and other program behaviour to suit the user.
- **Parameters:** values or rules that determine how the program operates, such as date format and printing settings.
- **Quick filter:** a simple filter usually opened with the right mouse button.
- **Multi-level filter:** an advanced filter containing several criteria, for example business partner and date.
- **View:** a report or table layout saved by a user.
- **Default view:** the initial data view used when no other view has been selected.

#### Finance and accounting terms

- **Chart of accounts:** the complete list of the company's accounting accounts.
- **Posting:** an accounting entry that records a financial transaction.
- **Cash order:** a document recording cash received or paid out.
- **Invoice:** a financial document for supplied goods or services.
- **Advance expense report:** an employee report detailing how an advance was used, for example during a business trip.
- **VAT:** value added tax applied to goods and services.
- **Debtor/creditor:** respectively, a customer who owes money to the company and a supplier to whom the company owes money.
- **MU journal:** the payment-order journal containing payment batches sent to the bank.

#### Other terms

- **Regional settings:** Windows settings for language, dates, currency and number formats.
- **Backup:** a safety copy of data.
- **Cloud:** an online data-storage environment, usually on a server outside the company.
- **File extension:** the file type, such as `.xls`, `.xml` or `.pdf`, which helps determine which application opens it.
- **XML:** a structured-data format used, among other things, for preparing and exchanging electronic invoices.

## Signing in and getting started

### Windows regional settings

Before starting FinaWin, check the Windows settings under **Time & language → Language & region → Administrative language settings → Formats**:

- Set the required date format.
- Under **Additional settings**, set the decimal separator to a **full stop** and the digit-grouping symbol to a **comma**.

These settings should be changed by a person with the necessary Windows permissions, such as a system administrator. Restarting the computer afterwards is recommended.

| <img src="{{ site.baseurl }}/assets/images/image2.png" /> | <img src="{{ site.baseurl }}/assets/images/image3.png" /> |
|---|---|

**Figure: Regional settings**

### Starting the program

Start FinaWin by double-clicking its desktop icon:

<img src="{{ site.baseurl }}/assets/images/image4.png" alt="FinaWin desktop icon" />

A database is the location in which company data is entered and stored. It may contain:

- company details, organisational units and employees;
- business-partner data;
- product and service data;
- general-ledger documents, sales invoices and other documents.

To connect to a database, choose **System → Databases** (*Sistēma → Datu bāzes*) and select the required database. The database normally needs to be selected only on the first connection; subsequent connections are automatic.

FinaWin can work with several databases. This is useful, for example, for an outsourced accounting provider. Make sure that the correct company database is selected before entering or changing data.

For data security, Solcraft recommends storing company data in a managed cloud environment where regular backups are created.

### Users

Users are defined in the program and each user has a password for connecting to the database. Roles can be assigned to determine which program functions and data the user may access or change.

## Navigation principles

Understanding the navigation buttons, tables and data-processing tools makes everyday work faster and reduces errors when working with large data sets.

### Top toolbar

After signing in, the main program window displays menus at the top and a toolbar with command icons underneath.

<img src="{{ site.baseurl }}/assets/images/image5.png" />

**Figure: Toolbar**

Common toolbar commands include:

- **Close current window** — closes the active window.
- **Documents** — opens the document list.
- **Business partners** — opens the Business Partners directory.
- **Chart of accounts** — opens the Chart of Accounts directory.
- **New document** — opens a new document form.
- **Repeat document** — creates a new document based on the previous document.
- **Configuration** — available when a directory, document or report is open; opens the table-configuration window.
- **Sort** — opens the record-sorting window for the active table.
- **Print current table** — opens the table-printing settings.
- **Reports** — opens reports linked to the current function.
- **Export current table** — saves or exports the active table.
- <img src="{{ site.baseurl }}/assets/images/image6.png" /> **Define filter** — opens the advanced filter window.
- <img src="{{ site.baseurl }}/assets/images/image7.png" /> **Clear filters** — removes every filter currently applied.
- <img src="{{ site.baseurl }}/assets/images/image8.png" /> **Previous filter** — returns to the previous filter step.
- <img src="{{ site.baseurl }}/assets/images/image9.png" /> **Select filter** — selects a previously saved filter.

### Navigator buttons

When a table or directory is opened, the navigator becomes active at the top of the window.

<img src="{{ site.baseurl }}/assets/images/image10.png" />

| Button | Function |
|---|---|
| <img src="{{ site.baseurl }}/assets/images/image11.png" /> | Go to the first record |
| <img src="{{ site.baseurl }}/assets/images/image12.png" /> | Go to the previous record |
| <img src="{{ site.baseurl }}/assets/images/image13.png" /> | Go to the next record |
| <img src="{{ site.baseurl }}/assets/images/image14.png" /> | Go to the last record |
| <img src="{{ site.baseurl }}/assets/images/image15.png" /> | Add a new record |
| <img src="{{ site.baseurl }}/assets/images/image16.png" /> | Delete the selected record |
| <img src="{{ site.baseurl }}/assets/images/image17.png" /> | Save the record. The record is saved only when the save indicator is no longer active. |
| <img src="{{ site.baseurl }}/assets/images/image19.png" /> | Cancel the latest unsaved changes |
| <img src="{{ site.baseurl }}/assets/images/image20.png" /> | Refresh the data |
| <img src="{{ site.baseurl }}/assets/images/image21.png" /> | Calculate column totals when they are not displayed by default |

### Keyboard navigation

| Key | Function |
|---|---|
| Arrow keys | Move between list records and fields |
| `Insert` | Add a new record |
| `Ctrl+Delete` | Delete a record |
| `Enter` | Start editing the selected field |
| `Esc` | Cancel changes |
| `Ctrl+Home` / `Ctrl+End` | Go to the beginning/end of the list |
| `PageUp` / `PageDown` | Previous/next page |
| `Home` / `End` | First/last field of the current record |
| `Ctrl+PageUp` / `Ctrl+PageDown` | First/last record on the page |
| `Shift+Tab` / `Tab` | Previous/next field |

Typing a letter, number or special character, or pressing `Backspace`, clears the current field content and starts edit mode. In edit mode, use the arrow keys, `Home` and `End` to move within the field. Hold `Shift` while moving to select part of the text.

Additional shortcuts:

| Shortcut | Function |
|---|---|
| `Delete` / `Backspace` | Delete the character after/before the cursor |
| `Shift+Delete` | Cut the selected text to the Clipboard |
| `Ctrl+Insert` or `Ctrl+C` | Copy selected text |
| `Shift+Insert` or `Ctrl+V` | Paste from the Clipboard |
| `F4` | Document types |
| `F7` | Copy the value from the record above |
| `Ctrl+F7` | Copy the selected record |
| `Ctrl+F` or `Ctrl+M` | Search |
| `Ctrl+A` | Refresh the current table |
| `Ctrl+J` | Create a new general-ledger document |
| `Ctrl+K` | Table configuration |
| `Ctrl+L` | Open the Windows calculator |
| `Ctrl+O` | Sort the table |
| `Ctrl+Q` | Search commands |
| `Ctrl+T` | Enter the current date |
| `Ctrl+Alt+F` | Find a column in the table |
| `Ctrl+Enter` | Save the record |

### Right mouse button

Several table functions can be opened with the right mouse button. The quick filter is the most common; depending on the table, a menu with additional actions may also be displayed.

## Program configuration

The program can be configured for more efficient daily work. Main configuration categories include **DB Data, SCFW Finance, Report Generator, Language, E-signature, Document Management, Logo, E-mail, Effects** and **Fonts**.

<img src="{{ site.baseurl }}/assets/images/image22.png" alt="Configuration categories" />

Select a category on the left side of the configuration window. The settings available for that category are shown on the right.

<img src="{{ site.baseurl }}/assets/images/image23.png" alt="Configuration window" />

### DB Data

The main section contains company and database information:

- **DB name:** full company/database name used by the system, for example `Demo Company 2025-09`.
- **Short DB name:** abbreviated internal or reporting name, for example `DEMO2`.
- **Accountant:** person responsible for the company's accounting.
- **Invoice signature:** signature text or the name printed on invoices.
- **Position and officer's name:** the signatory's position and full name shown on documents.
- **Manager, telephone and fax:** company contact information.
- **Print on last page:** prints specified information, such as a signature or summary, on the last page.
- **SC_xxx user signature:** user name/signature text that can be inserted automatically in documents.

### SCFW Finance

- **Posting exchange rate:** choose the official rate or allow the user to select a rate when creating a posting.
- **Search by:** choose whether lists are searched by system code/number or by name.
- **Open balance/turnover reports:** open several reports at once in MDI mode, or only one report in a modal window.
- **Order period:** use the current period or allow another period to be selected manually.

### Report Generator

This section controls report viewing, previewing and formatting:

- **Database path:** connection path to the reporting database, for example `reporting-server:database-name`. Use the value supplied by your system administrator.
- **Print-preview windows:** open one modal preview, several previews inside the main window, or several separate windows.
- **Report designer:** open one modal designer or several separate designer windows.
- **Additional print settings:** print page number, current date and optional information on the last page.
- **Table print settings:** adjust margins, table-line colour and width, line-number column width, and the background colour of total rows.

### Language

Select the language used by the FinaWin program interface.

### E-signature

This section configures the system's local electronic-signature function. It is separate from the legally qualified Latvian eSignature service provided by LVRTC.

- **Active:** enables or disables the local e-signature function.
- **E-signature server address:** IP address or network path of the internal or third-party signing server. Use the value supplied by your system administrator.

### Document Management

This section contains the paths and technical settings required by the document-management module:

- **Active:** enables document registration, signing and related processes.
- **Module Ex ID:** internal identifier; normally not changed manually.
- **Database path:** full path to the document-management database.
- **E-signature program path:** location of the signing application. Use the path supplied by your system administrator.
- **Temporary folder:** folder used to exchange files between FinaWin and the signing application.

### Logos

This section lists all logos stored in the system, such as `_logo1` and `_logo2`. Logos can be used on invoices, quotations, contracts, report headers and other documents.

- **Edit:** replace or edit the selected logo.
- **New:** upload a new PNG, JPG or BMP image and assign a name.
- **Delete:** remove the selected logo from the system.

### E-mail

FinaWin can send invoices, reports and notifications by e-mail.

**Sending method:**

- **From an e-mail application (MAPI):** opens a prepared message in an installed application such as Outlook.
- **Directly from FinaWin (SMTP):** sends the message through an e-mail server; this is normally recommended for companies.

**SMTP settings:** server address, port (commonly 587 or 465), login, password, SSL and AutoTLS. Enter the sender's name, sender's e-mail address, optional organisation and standard signature text. Use **Send test e-mail** to verify the configuration. The settings report shows the e-mail configuration stored for system users.

### Effects

This section controls the program's appearance and visual behaviour:

- **Use skin:** enables a selectable interface theme.
- **Skins:** selects a theme such as Beijing, Office or Classic.
- **Enable animation (fx):** enables visual transitions and effects; disable it if better performance is required.
- **Background shading:** darkens the area behind an active modal window.
- **Enable alert window:** displays pop-up information, warning and error messages.

### Fonts

Font settings control the typeface and size used in tables, reports and forms:

- **Table data font** and **heading font** control table contents and column headings.
- **Report data** and **report headings** control generated reports.
- **Use system encoding** helps display Latvian and other language characters correctly.
- **Form font** controls windows, input fields and buttons.
- **Use system font** uses the Windows default font, normally Segoe UI or a similar font.

## Windows

Every directory, document and report opens in a new program window. If several items are open, all open windows are visible at the top of the program.

<img src="{{ site.baseurl }}/assets/images/image24.png" alt="Several open windows" />

## Table configuration

Directories, documents and many reports are displayed as rows and columns. For each table you can change column names, widths and order; freeze columns; hide fields; make fields read-only; configure printing; display totals; and apply colours.

Some windows contain several linked tables. In the Documents window, for example, the document list and the selected document's specification are separated by a movable divider. Double-click the divider control to hide or restore the second table.

<img src="{{ site.baseurl }}/assets/images/image25.png" alt="Table divider" />

Open table configuration in any of these ways:

- click <img src="{{ site.baseurl }}/assets/images/image26.png" alt="Configuration icon" /> on the top toolbar;
- press `Ctrl+K`;
- choose **Table → Table Configuration** (*Tabula → Tabulas konfigurācija*).

<img src="{{ site.baseurl }}/assets/images/image27.png" alt="Table configuration window" />

The configuration window lists all table fields, their order, visible names and database field names. The main field attributes are:

1. **Eye:** show the field.
2. **Lock:** make the field read-only.
3. **Printer:** include or exclude the field when printing the table.
4. **Total:** display the total of all values at the bottom of the column.

The same attributes can be changed with the keyboard in the **Column attributes** area.

To change column order, drag a column heading to the required position, or use the configuration buttons:

- <img src="{{ site.baseurl }}/assets/images/image28.png" /> move to the first position;
- <img src="{{ site.baseurl }}/assets/images/image29.png" /> move one position up;
- <img src="{{ site.baseurl }}/assets/images/image30.png" /> move one position down;
- <img src="{{ site.baseurl }}/assets/images/image31.png" /> move to the last position.

Table configurations can be exported <img src="{{ site.baseurl }}/assets/images/image32.png" />, imported from a file <img src="{{ site.baseurl }}/assets/images/image33.png" />, or imported from another user <img src="{{ site.baseurl }}/assets/images/image34.png" />. An administrator can copy configurations using <img src="{{ site.baseurl }}/assets/images/image35.png" />.

Use <img src="{{ site.baseurl }}/assets/images/image36.png" /> to assign a colour to a field, column or row. Simple colours can be copied from an existing example. If colouring depends on rules, ask your consultant to configure the conditions.

Under **Column parameters** (*Ailes parametri*), set:

- **Width:** number of characters displayed. A `dd.MM.yyyy` date requires 10 characters.
- **Name:** visible column heading.
- **Format:** number of decimal places for amounts or quantities.

<img src="{{ site.baseurl }}/assets/images/image37.png" alt="Column parameters" />

Useful **Table parameters** include:

- **Fixed columns:** keeps the specified number of columns visible while scrolling horizontally.
- **Show column totals:** calculates totals at the bottom. On very large data sets this can slow down the table; use the totals button <img src="{{ site.baseurl }}/assets/images/image39.png" /> when totals are needed only occasionally.
- **Search panel:** adds a search field under the toolbar. Text is highlighted across the table and can be filtered by pressing `Enter`.
- **Remember row:** returns the cursor to the same record after data is refreshed.
- **Row numbering:** displays a number beside each row.
- **Multi-select:** adds a selection column so that several records can be selected and filtered for a common action, such as printing three chosen records.
- **Read-only (`Ctrl+Shift+R`):** prevents editing.
- **Show delete confirmation:** asks for confirmation before a record is deleted.
- **Go to last row:** opens a large table at the most recently added record.

<img src="{{ site.baseurl }}/assets/images/image38.png" alt="Table parameters" />

## Sorting records

### Standard sorting

Click <img src="{{ site.baseurl }}/assets/images/image42.png" alt="Sort icon" /> to open the sorting window.

<img src="{{ site.baseurl }}/assets/images/image43.png" alt="Sorting window" />

Available fields are listed alphabetically on the left. Move the fields to be used for sorting into the **Sort path** area on the right. Use the middle arrow buttons to add or remove fields, and the right-side buttons to set priority and ascending/descending order. The highest field has the first priority; subsequent fields sort records within that result.

<img src="{{ site.baseurl }}/assets/images/image50.png" alt="Sorted data" />

The administrator-only lock button <img src="{{ site.baseurl }}/assets/images/image52.png" /> prevents other users from changing the saved sorting arrangement. Confirm with **OK** or cancel with **Cancel**.

### Quick sorting

Click a column heading to sort by that column. Click it again to reverse the order. To sort by several columns, hold `Ctrl` and click the required headings in priority order; double-click a heading if the opposite order is required. The triangle and number beside each heading show the direction and priority.

<img src="{{ site.baseurl }}/assets/images/image55.png" alt="Sorting by several columns" />

## Searching

You can search across the active table or only within a selected column. Main directories also provide a built-in search toolbar for important fields, such as Business Partner Name and Registration Number.

<img src="{{ site.baseurl }}/assets/images/image56.png" alt="Directory search" />

To search across a report or entire table, enable **Search panel** in Table Configuration. Matching text is highlighted in every column. Press `Enter` or use the filter button to display only matching rows; use the cross on the right to clear the filter.

<img src="{{ site.baseurl }}/assets/images/image58.png" alt="Highlighted search results" />

To search one column, select it and press `Ctrl+F`. FinaWin fills in the selected field name; this can be changed in the search window. Enter the required value, choose the search method and press `Enter` or a search button.

With **case-insensitive search**, partial words can be found without matching capitalisation or Latvian diacritics. **Find all** displays every result in a separate window; double-click a result to select it.

## Filtering data

Filters display only records that meet selected criteria. Filters can be named, saved, reused and edited. Open the saved-filter list with <img src="{{ site.baseurl }}/assets/images/image60.png" />, or choose **Load** (*Nolasīt*) while defining a filter.

### Quick filter

Right-click a value and choose **Quick filter** (*Ātrais filtrs*) to show records with that value. Choose **Quick filter (exclude)** to show records that do not have the value. To add another condition to the current result, right-click another value and choose **Filter within filter** (*Filtrēt filtrā*). Repeat as many times as necessary.

<img src="{{ site.baseurl }}/assets/images/image63.png" alt="Quick filter" />

Use **Previous filter** <img src="{{ site.baseurl }}/assets/images/image65.png" /> to return one or more filtering steps.

### Multi-level filter

Click <img src="{{ site.baseurl }}/assets/images/image61.png" alt="Define filter" /> to open Filter Definition. If a quick filter is still active, its criteria are included; extend them or choose **Clear** and create a new filter.

<img src="{{ site.baseurl }}/assets/images/image67.png" alt="Defined filter" />

For each condition, select an operation and enter a value:

- **Equals, greater than, less than, not equal, or empty** perform the stated comparison.
- **Like** is case-sensitive and supports `%` as a wildcard. For example, `%Item%` finds values containing `Item`.
- **Contains** ignores capitalisation and Latvian diacritics and finds the value anywhere in the field.
- **In list** matches several exact values in one condition, for example `'RP1', 'RK1', 'BZ1'`.

To remove a condition, click its number and choose **Delete this row**. To filter a range, such as EUR 500–1,000, create the first boundary and then choose **Create nested condition** for the second boundary.

Save a reusable filter with <img src="{{ site.baseurl }}/assets/images/image71.png" />, enter a name and confirm with **OK**. Clear all filtering with <img src="{{ site.baseurl }}/assets/images/image72.png" />.

## Printing

FinaWin can print any table, directory, report or document. A document may have several print forms. Use the printer commands on the top toolbar or the print command on the lower toolbar. Depending on the active window, the command opens **Print table** or **Print form**.

When printing a table, select the columns to include, enter a table heading and choose portrait or landscape orientation.

<img src="{{ site.baseurl }}/assets/images/image76.png" alt="Print table window" />

## Exporting

Any table can be saved outside FinaWin in several formats. The default is Excel `.xls`, but another available format can be selected. An exported Excel file contains the same table data that was visible in FinaWin.

<img src="{{ site.baseurl }}/assets/images/image78.png" alt="Save table window" />

<img src="{{ site.baseurl }}/assets/images/image79.png" alt="Table data saved in Excel" />
