function Word(word) {
    this.word_id = word.word_id || 0;
    this.word_jt = word.word_jt || "";
    this.word_ft = word.word_ft || "";
    this.yp = word.yp || "";
};

module.exports = Word;