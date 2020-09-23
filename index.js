const { text } = require('express');
const express = require('express');
const app = express();

function test(params) {
    console.log("params :",params);
}

test("okay");