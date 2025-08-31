function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// Introduction with name and language (both required)
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Introduction with optional language (defaults to "JavaScript")
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
