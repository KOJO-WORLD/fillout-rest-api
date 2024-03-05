# Fillout API Server

This is a simple Node.js server using Express.js to interact with [Fillout.com's REST API](https://www.fillout.com/help/fillout-rest-api). The server fetches form responses with an option to filter based on certain answers.

## Overview

[Fillout.com](http://Fillout.com) is a powerful form builder that stores responses to online form submissions. This server provides an additional endpoint to fetch form responses with filtering options.

## Usage

- API KEY: `sk_prod_TfMbARhdgues5AuIosvvdAC9WsA5kXiZlW8HZPaRDlIbCpSpLsXBeZO7dCVZQwHAY3P4VSBPiiC33poZ1tdUj2ljOzdTCCOSpUZ_3912`

- Form ID: `cLZojxk94ous`

`GET` method
http://localhost:3000/cLZojxk94ous/filteredResponses?filters=[  {"id":"nameId","condition":"equals","value":"Timmy"},  {"id":"birthdayId","condition":"greater_than","value":"2024-02-23T05:01:47.691Z"}]

### Installation

```
npm install

npm start
```

## API Endpoint

- Endpoint: `/{formId}/filteredResponse`
- Method: `GET`
- Query paramters: `filters` (JSON stringified): An array of filter clauses to narrow down responses.

```
    [
        {"id":"nameId","condition":"equals","value":"Timmy"},
        {"id":"birthdayId","condition":"greater_than","value":"2024-02-23T05:01:47.691Z"}
    ]
```
