function Potion(label) {
    this.types = ['strength', 'agility', 'health'];
    this.label = label || this.types[Math.floor(Math.random() * this.types.length)];

    if (this.label === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;