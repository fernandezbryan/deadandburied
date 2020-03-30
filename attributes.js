function getAttributesForCharacter(character) {
    return findObjs({
        _type: "attribute",
        _characterid: character.id
    });
}

function setAttributeToMax(attribute) {
    var max = attribute.get("max");
    attribute.set("current", max);
}