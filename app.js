'use strict';

const fs = require('fs');
const csv = require("csvtojson/v2");

const buffer = fs.readFileSync('sample.csv');
const base64Csv = buffer.toString('base64');

const buff = Buffer.from(base64Csv, 'base64');
const headers = [
    'resource', 
    'work_order_number', 
    'activity_number', 
    'city', 
    'community',
    'address',
    'lot_number',
    'state',
    'zip_code',
    'job_type',
    'trade',
    'service',
    'service_quantity',
    'order_date',
    'builder',
    'company',
    'field_manager',
    'supervisor',
    'subcontractors',
];

const start = async () => {
    const jsonArray = await csv({ checkType: true }).fromString(buff.toString());

    console.log(jsonArray);
};

start();
