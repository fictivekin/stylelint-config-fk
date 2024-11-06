module.exports = {
    "extends": "stylelint-config-standard-scss",
    "ignoreFiles": ["**/*.css", "**/kss"],
    "plugins": [
        "stylelint-order",
        "stylelint-scss"
    ],
    "rules": {
        "at-rule-no-unknown": null,
        "block-no-empty": true,
        "color-hex-length": "short",
        "color-named": ["never", {
            "ignore": ["inside-function"]
        }],
        "color-no-invalid-hex": true,
        "comment-no-empty": true,
        "comment-whitespace-inside": "always",
        "custom-property-empty-line-before": null,
        "declaration-block-no-duplicate-properties": [true, {
            "ignore": ["consecutive-duplicates"]
        }],
        "declaration-block-single-line-max-declarations": 1,
        "font-family-no-duplicate-names": true,
        "font-family-no-missing-generic-family-keyword": true,
        "font-family-name-quotes": "always-where-recommended",
        "function-calc-no-unspaced-operator": true,
        "function-linear-gradient-no-nonstandard-direction": true,
        "function-name-case": "lower",
        "keyframe-declaration-no-important": true,
        "length-zero-no-unit": true,
        "max-nesting-depth": [0, {
            "ignoreAtRules": ["media", "supports", "include", "each", "if", "else"]
        }],
        "media-feature-name-no-unknown": true,
        "no-duplicate-selectors": true,
        "number-max-precision": 4,
        "order/properties-alphabetical-order": true,
        "property-no-unknown": true,
        "rule-empty-line-before": ["always", {
            "except": ["after-single-line-comment", "first-nested"]
        }],
        "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-else-closing-brace-space-after": "always-intermediate",
        "scss/at-else-empty-line-before": "never",
        "scss/at-else-if-parentheses-space-before": "always",
        "scss/at-function-parentheses-space-before": "never",
        "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
        "scss/at-if-closing-brace-space-after": "always-intermediate",
        "scss/at-mixin-argumentless-call-parentheses": "never",
        "scss/at-mixin-parentheses-space-before": "never",
        "scss/at-rule-conditional-no-parentheses": null,
        "scss/at-rule-no-unknown": true,
        "scss/comment-no-empty": null,
        "scss/dollar-variable-colon-space-after": "always",
        "scss/dollar-variable-colon-space-before": "never",
        "scss/dollar-variable-no-missing-interpolation": true,
        "scss/double-slash-comment-empty-line-before": ["always", {
            "except": ["first-nested"],
            "ignore": ["between-comments"]
        }],
        "scss/double-slash-comment-whitespace-inside": "always",
        "scss/operator-no-newline-after": true,
        "scss/operator-no-newline-before": true,
        "scss/operator-no-unspaced": true,
        "selector-class-pattern": "^[a-zA-Z]+([a-zA-Z0-9-]*(__)?)*[a-zA-Z0-9]$",
        "selector-max-attribute": 2,
        "selector-max-class": 3,
        "selector-pseudo-class-no-unknown": true,
        "selector-pseudo-element-colon-notation": "double",
        "selector-pseudo-element-no-unknown": true,
        "selector-type-case": "lower",
        "selector-type-no-unknown": true,
        "shorthand-property-no-redundant-values": true,
        "string-no-newline": true,
        "unit-no-unknown": true,
        "value-keyword-case": ["lower", {
            "ignoreProperties": ["/^\\$.*$/"]
        }]
    }
};
