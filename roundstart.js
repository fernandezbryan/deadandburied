function setRoundStartAttributes(character) {
    const attributes = getAttributesForCharacter(character);
    for (var i = 0; i < attributes.length; i++) {
        var name = attributes[i].get("name").toUpperCase();
        if (name.startsWith("ATTACK SKILL") || name.startsWith("DEFENSE SKILL")) {
            setAttributeToMax(attributes[i]);
        }
    }
}

on("chat:message", function(msg) {
    if(msg.type == "api" && msg.who === gm && msg.content.toUpperCase() === '!NEWROUND') {
        sendChat("Status", "A new round has begun.", null, {noarchive:true} );
    }
    const characters = getCharacters();
    for (var i = 0; i < characters.length; i++) {
        setRoundStartAttributes(characters[i]);
    }
});