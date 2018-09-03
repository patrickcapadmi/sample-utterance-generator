# sample-utterance-generator
Generates a full Alexa interaction model using a skeleton input. 

For simple generation, use https://lab.miguelmota.com/intent-utterance-expander/example/

To generate the entire interaction model at once, add intents into `input.json` with correctly formated sample utterances.

Run `generator.js` to generate interaction model, found at `generated/interaction_model_generated.json`

Paste into Skills console or upload with ASK CLI:

```
ask api update-skill --skill-id $SKILL_ID --file interaction_model_generated.json
```

Setup: https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html
Reference: https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html
