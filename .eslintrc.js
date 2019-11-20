module.exports = {
    "parser": "babel-eslint",
    "extends": ["airbnb", "prettier"],
    "env": {
        browser: true,
        es6: true
    },
    "rules": {
        'react/jsx-filename-extension': [1, {extensions: ['.js']}],
        'react/prop-types': 0,
        'react/prefer-stateless-function': 0,
        'react/no-array-index-key': 0,
        'no-console': 0,
        'jsx-ally/anchor-is-valid': 0,
        'react/destructuring-assignment': 0,
        'react/jsx-one-expression-per-line': 0,
        "react/no-did-update-set-state": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "max-len": 0,
        "import/no-extraneous-dependencies": 0,
        "react/no-access-state-in-setstate": 0,
        "react/jsx-tag-spacing": 0,
        "object-shorthand": 0,
    }
}