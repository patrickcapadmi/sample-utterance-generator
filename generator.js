/* globals
console, exports, require 
*/
'use strict';

const intentUtteranceExpander = require('intent-utterance-expander');
const input = require('./input.json');
var fs = require('fs-extra');

const inputIntents = input.interactionModel.languageModel.intents;

var outputIntents = [];

var count = 0;

inputIntents.forEach(element => {
    // console.log(element.name);
    // console.log(element.samples);
    if(element.samples.length > 0){
        var expandedSamples = [];
        element.samples.forEach(utterance => {
            expandedSamples = expandedSamples.concat((intentUtteranceExpander(utterance)));
        });
        element.samples = expandedSamples;
        count += expandedSamples.length;
    }
    outputIntents.push(element);
});

console.log(`Utterance count: ${count}`);

input.interactionModel.languageModel.intents = outputIntents;

const content = JSON.stringify(input, null, 4);

fs.outputFile("generated/interaction_model_generated.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("Model saved");
});
