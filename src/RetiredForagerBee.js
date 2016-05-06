import ForagerBee from './ForagerBee';

class RetiredForagerBee extends ForagerBee {
  constructor(props) {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.color = 'grey';
    this.canFly = false;
    this.treasureChest = [];
  }

  forage() {
    return 'I am too old, let me play cards instead';
  }

  gamble() {
    this.treasureChest.push('treasure');
  }
};

export default RetiredForagerBee;
