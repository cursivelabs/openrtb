var schema = {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "w": {
        "type": "integer"
      },
      "h": {
        "type": "integer"
      },
      "ext": {
        "type": "object"
      }
    }
  }
}

module.exports = schema;
