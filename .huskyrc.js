module.exports = {
    "hooks": {
        "pre-commit": "npm run eslint ..fix",
        "pre-push": "npm run eslint ..fix"
    }
}